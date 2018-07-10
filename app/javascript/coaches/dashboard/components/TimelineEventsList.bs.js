// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var TimelineEvent$ReactTemplate = require("../types/TimelineEvent.bs.js");
var TimelineEventCard$ReactTemplate = require("./TimelineEventCard.bs.js");

function str(prim) {
  return prim;
}

var component = ReasonReact.statelessComponent("TimelineEventsList");

function make(timelineEvents, authenticityToken, _) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function () {
              return React.createElement("div", {
                          className: "timeline-events-list__container"
                        }, $$Array.of_list(List.map((function (te) {
                                    return ReasonReact.element(/* Some */[String(TimelineEvent$ReactTemplate.id(te))], /* None */0, TimelineEventCard$ReactTemplate.make(te, authenticityToken, /* array */[]));
                                  }), timelineEvents)));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

exports.str = str;
exports.component = component;
exports.make = make;
/* component Not a pure module */
