// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Coach$ReactTemplate = require("../types/Coach.bs.js");
var Startup$ReactTemplate = require("../types/Startup.bs.js");
var SidePanel$ReactTemplate = require("./SidePanel.bs.js");
var TimelineEvent$ReactTemplate = require("../types/TimelineEvent.bs.js");
var TimelineEventsPanel$ReactTemplate = require("./TimelineEventsPanel.bs.js");

((require("./CoachDashboard.scss")));

var component = ReasonReact.reducerComponent("CoachDashboard");

function make(coach, startups, timelineEvents, authenticityToken, _) {
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
          /* render */(function (param) {
              var send = param[/* send */3];
              var state = param[/* state */1];
              var selectStartupCB = function (id) {
                return Curry._1(send, /* SelectStartup */[id]);
              };
              var clearStartupCB = function () {
                return Curry._1(send, /* ClearStartup */0);
              };
              return React.createElement("div", {
                          className: "coach-dashboard__container"
                        }, React.createElement("div", {
                              className: "row"
                            }, React.createElement("div", {
                                  className: "col-md-3"
                                }, ReasonReact.element(/* None */0, /* None */0, SidePanel$ReactTemplate.make(coach, startups, state[/* selectedStartupId */0], selectStartupCB, clearStartupCB, /* array */[]))), React.createElement("div", {
                                  className: "col"
                                }, ReasonReact.element(/* None */0, /* None */0, TimelineEventsPanel$ReactTemplate.make(state[/* timelineEvents */1], state[/* selectedStartupId */0], authenticityToken, /* array */[])))));
            }),
          /* initialState */(function () {
              return /* record */[
                      /* selectedStartupId : None */0,
                      /* timelineEvents */timelineEvents
                    ];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, state) {
              if (action) {
                return /* Update */Block.__(0, [/* record */[
                            /* selectedStartupId : Some */[action[0]],
                            /* timelineEvents */state[/* timelineEvents */1]
                          ]]);
              } else {
                return /* Update */Block.__(0, [/* record */[
                            /* selectedStartupId : None */0,
                            /* timelineEvents */state[/* timelineEvents */1]
                          ]]);
              }
            }),
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

function decode(json) {
  return /* record */[
          /* coach */Json_decode.field("coach", Coach$ReactTemplate.decode, json),
          /* startups */Json_decode.field("startups", (function (param) {
                  return Json_decode.list(Startup$ReactTemplate.decode, param);
                }), json),
          /* timelineEvents */Json_decode.field("timelineEvents", (function (param) {
                  return Json_decode.list(TimelineEvent$ReactTemplate.decode, param);
                }), json),
          /* authenticityToken */Json_decode.field("authenticityToken", Json_decode.string, json)
        ];
}

var jsComponent = ReasonReact.wrapReasonForJs(component, (function (jsProps) {
        var props = decode(jsProps);
        return make(props[/* coach */0], props[/* startups */1], props[/* timelineEvents */2], props[/* authenticityToken */3], /* array */[]);
      }));

exports.component = component;
exports.make = make;
exports.decode = decode;
exports.jsComponent = jsComponent;
/*  Not a pure module */
