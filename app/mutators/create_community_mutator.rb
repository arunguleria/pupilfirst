class CreateCommunityMutator < ApplicationMutator
  include AuthorizeSchoolAdmin

  attr_accessor :name
  attr_accessor :target_linkable
  attr_accessor :course_ids

  validates :name, length: { minimum: 1, maximum: 50, message: 'InvalidLengthName' }, allow_nil: false
  validate :course_must_exist_in_current_school

  def course_must_exist_in_current_school
    return if course_ids.blank?

    return if courses.count == course_ids.count

    errors[:base] << 'IncorrectCourseIds'
  end

  def create_community
    community = Community.create!(
      name: name,
      target_linkable: target_linkable,
      school: current_school
    )
    community.courses = courses
    community.id
  end

  private

  def courses
    @courses ||= current_school.courses.where(id: course_ids)
  end
end
