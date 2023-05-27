/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lf": () => (/* binding */ have),
/* harmony export */   "_D": () => (/* binding */ getFoldGroup)
/* harmony export */ });
/* unused harmony exports getSongLimit, isSong, getActiveEffects, getActiveSongs, getSongCount, canRememberSong, getMonsterLocations, getRemainingLiver, getRemainingStomach, getRemainingSpleen, haveInCampground, Wanderer, haveCounter, haveWandererCounter, isVoteWandererNow, isWandererNow, getKramcoWandererChance, getFamiliarWandererChance, getWandererChance, isCurrentFamiliar, getZapGroup, getBanishedMonsters, canUse, noneToNull, getAverage, getAverageAdventures, uneffect, getPlayerFromIdOrName, questStep, EnsureError, ensureEffect, getSaleValue, Environment, findLeprechaunMultiplier, findFairyMultiplier, holidayWanderers, getTodaysHolidayWanderers, canVisitUrl, damageTakenByElement, telescope, examine, byStat, byClass, directlyUse, unequip */
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(664);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _template_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(678);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(588);
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/** @module GeneralLibrary */





/**
 * Determines the current maximum Accordion Thief songs the player can have in their head
 *
 * @category General
 * @returns Maximum number of songs for player
 */

function getSongLimit() {
  return 3 + (booleanModifier("Four Songs") ? 1 : 0) + numericModifier("Additional Song");
}
/**
 * Determine whether the Skill or Effect provided is an Accordion Thief song
 *
 * @category General
 * @param skillOrEffect The Skill or Effect
 * @returns Whether it's a song
 */

function isSong(skillOrEffect) {
  if (skillOrEffect instanceof Effect && skillOrEffect.attributes.includes("song")) {
    return true;
  } else {
    var skill = skillOrEffect instanceof Effect ? toSkill(skillOrEffect) : skillOrEffect;
    return skill.class === $class(_templateObject || (_templateObject = _taggedTemplateLiteral(["Accordion Thief"]))) && skill.buff;
  }
}
/**
 * List all active Effects
 *
 * @category General
 * @returns List of Effects
 */

function getActiveEffects() {
  return Object.keys(myEffects()).map(e => Effect.get(e));
}
/**
 * List currently active Accordion Thief songs
 *
 * @category General
 * @returns List of song Effects
 */

function getActiveSongs() {
  return getActiveEffects().filter(isSong);
}
/**
 * List number of active Accordion Thief songs
 *
 * @category General
 * @returns Number of songs
 */

function getSongCount() {
  return getActiveSongs().length;
}
/**
 * Determine whether player can remember another Accordion Thief song
 *
 * @category General
 * @param quantity Number of songs to test the space for
 * @returns Whether player can remember another song
 */

function canRememberSong() {
  var quantity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return getSongLimit() - getSongCount() >= quantity;
}
/**
 * Determine the locations in which the given monster can be encountered naturally
 *
 * @category General
 * @param monster Monster to find
 * @returns Locations for monster
 */

function getMonsterLocations(monster) {
  return Location.all().filter(location => monster.name in appearanceRates(location));
}
/**
 * Determine the player's remaining liver space
 *
 * @category General
 * @returns Remaining liver space
 */

function getRemainingLiver() {
  return inebrietyLimit() - myInebriety();
}
/**
 * Determine the player's remaining stomach space
 *
 * @category General
 * @returns Remaining stomach space
 */

function getRemainingStomach() {
  return fullnessLimit() - myFullness();
}
/**
 * Determine the player's remaining spleen space
 *
 * @category General
 * @returns Remaining spleen space
 */

function getRemainingSpleen() {
  return spleenLimit() - mySpleenUse();
}
/**
 * Determine whether the player "has" any entity which one could feasibly "have".
 *
 * @category General
 * @param thing Thing to check
 * @param quantity Minimum quantity the player must have to pass
 * @returns Whether the player meets the requirements of owning the supplied thing
 */

function have(thing) {
  var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (thing instanceof kolmafia__WEBPACK_IMPORTED_MODULE_0__.Effect) {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)(thing) >= quantity;
  }

  if (thing instanceof kolmafia__WEBPACK_IMPORTED_MODULE_0__.Familiar) {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveFamiliar)(thing);
  }

  if (thing instanceof kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item) {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(thing) >= quantity;
  }

  if (thing instanceof kolmafia__WEBPACK_IMPORTED_MODULE_0__.Servant) {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveServant)(thing);
  }

  if (thing instanceof kolmafia__WEBPACK_IMPORTED_MODULE_0__.Skill) {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveSkill)(thing);
  }

  if (thing instanceof kolmafia__WEBPACK_IMPORTED_MODULE_0__.Thrall) {
    var thrall = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myThrall)();
    return thrall.id === thing.id && thrall.level >= quantity;
  }

  return false;
}
/**
 * Determine whether a given item is in the player's campground
 *
 * @category General
 * @param item The Item KoLmafia uses to represent the campground item
 * @returns Whether the item is in the campground
 */

function haveInCampground(item) {
  return Object.keys(getCampground()).map(i => Item.get(i)).includes(item);
}
var Wanderer;

(function (Wanderer) {
  Wanderer["Digitize"] = "Digitize Monster";
  Wanderer["Enamorang"] = "Enamorang Monster";
  Wanderer["Familiar"] = "Familiar";
  Wanderer["Holiday"] = "Holiday Monster";
  Wanderer["Kramco"] = "Kramco";
  Wanderer["Nemesis"] = "Nemesis Assassin";
  Wanderer["Portscan"] = "portscan.edu";
  Wanderer["Romantic"] = "Romantic Monster";
  Wanderer["Vote"] = "Vote Monster";
})(Wanderer || (Wanderer = {}));

var deterministicWanderers = [Wanderer.Digitize, Wanderer.Portscan];
/**
 * Determine whether the player has the specified counter
 *
 * @param counterName Name of the counter
 * @param minTurns Minimum turns the counter is set to
 * @param maxTurns Maximum turns the counter is set to
 * @category General
 * @returns Whether player has the counter
 */

function haveCounter(counterName) {
  var minTurns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var maxTurns = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;
  return getCounters(counterName, minTurns, maxTurns) === counterName;
}
/**
 * Determine whether the player has the specified wanderer's counter
 *
 * @param wanderer Wanderer to check
 * @category Wanderers
 * @returns Whether player has the wanderer counter
 */

function haveWandererCounter(wanderer) {
  if (deterministicWanderers.includes(wanderer)) {
    return haveCounter(wanderer);
  }

  var begin = wanderer + " window begin";
  var end = wanderer + " window end";
  return haveCounter(begin) || haveCounter(end);
}
/**
 * Determine whether the player will encounter a vote wanderer on the next turn,
 * providing an "I Voted!" sticker is equipped.
 *
 * @category Wanderers
 * @returns Whether the vote wanderer is due
 */

function isVoteWandererNow() {
  return totalTurnsPlayed() % 11 === 1 && get("lastVoteMonsterTurn") < totalTurnsPlayed();
}
/**
 * Tells us whether we can expect a given wanderer now. Behaves differently
 * for different types of wanderer.
 *
 * - For deterministic wanderers, return whether the player will encounter
 *   the queried wanderer on the next turn
 *
 * - For variable wanderers (window), return whether the player is within
 *   an encounter window for the queried wanderer
 *
 * - For variable wanderers (chance per turn), returns true unless the player
 *   has exhausted the number of wanderers possible
 *
 * @category Wanderers
 * @param wanderer Wanderer to check
 * @returns Whether the wanderer is due
 */

function isWandererNow(wanderer) {
  if (deterministicWanderers.includes(wanderer)) {
    return haveCounter(wanderer, 0, 0);
  }

  if (wanderer === Wanderer.Kramco) {
    return true;
  }

  if (wanderer === Wanderer.Vote) {
    return isVoteWandererNow();
  }

  if (wanderer === Wanderer.Familiar) {
    return get("_hipsterAdv") < 7;
  }

  var begin = wanderer + " window begin";
  var end = wanderer + " window end";
  return !haveCounter(begin, 1) && haveCounter(end);
}
/**
 * Determines the chance the player will encounter a sausage goblin on the
 * next turn, providing the Kramco Sausage-o-Matic is equipped.
 *
 * @category Wanderers
 * @returns Chance that the sausage goblin is due (as a number between 0 and 1)
 */

function getKramcoWandererChance() {
  var fights = get("_sausageFights");
  var lastFight = get("_lastSausageMonsterTurn");
  var totalTurns = totalTurnsPlayed();

  if (fights < 1) {
    return lastFight === totalTurns && myTurncount() < 1 ? 0.5 : 1.0;
  }

  var turnsSinceLastFight = totalTurns - lastFight;
  return Math.min(1.0, (turnsSinceLastFight + 1) / (5 + fights * 3 + Math.pow(Math.max(0, fights - 5), 3)));
}
/**
 * Determines the chance the player will encounter an Artistic Goth Kid or
 * Mini-Hipster wanderer on the next turn, providing a familiar is equipped.
 *
 * NOTE: You must complete one combat with the Artistic Goth Kid before you
 * can encounter any wanderers. Consequently,ƒ the first combat with the
 * Artist Goth Kid is effectively 0% chance to encounter a wanderer.
 *
 * @category Wanderers
 * @returns Chance that the familiar wanderer is due (as a number between 0 and 1)
 */

function getFamiliarWandererChance() {
  var totalFights = get("_hipsterAdv");
  var probability = [0.5, 0.4, 0.3, 0.2];

  if (totalFights < 4) {
    return probability[totalFights];
  }

  return totalFights > 7 ? 0.0 : 0.1;
}
/**
 * Determines the chance the player will encounter the specified wanderer
 * on the next turn.
 *
 * @category Wanderers
 * @param wanderer Wanderer to check
 * @returns Chance that the specified wanderer is due (as a number between 0 and 1)
 */

function getWandererChance(wanderer) {
  if (deterministicWanderers.includes(wanderer)) {
    return haveCounter(wanderer, 0, 0) ? 1.0 : 0.0;
  }

  if (wanderer === Wanderer.Kramco) {
    getKramcoWandererChance();
  }

  if (wanderer === Wanderer.Vote) {
    return isVoteWandererNow() ? 1.0 : 0.0;
  }

  if (wanderer === Wanderer.Familiar) {
    getFamiliarWandererChance();
  }

  var begin = wanderer + " window begin";
  var end = wanderer + " window end";

  if (haveCounter(begin, 1, 100)) {
    return 0.0;
  }

  var counters = get("relayCounters");
  var re = new RegExp("(\\d+):" + end);
  var matches = counters.match(re);

  if (matches && matches.length === 2) {
    var window = Number.parseInt(matches[1]) - myTurncount();
    return 1.0 / window;
  }

  return 0.0;
}
/**
 * Determines whether the player's current familiar is equal to the one supplied
 *
 * @category General
 * @param familiar Familiar to check
 * @returns Whether it is the player's current familiar
 */

function isCurrentFamiliar(familiar) {
  return myFamiliar() === familiar;
}
/**
 * Determines the fold group (if any) of which the given item is a part
 *
 * @category General
 * @param item Item that is part of the required fold group
 * @returns List of items in the fold group
 */

function getFoldGroup(item) {
  return Object.entries((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getRelated)(item, "fold")).sort((_ref, _ref2) => {
    var _ref3 = _slicedToArray(_ref, 2),
        a = _ref3[1];

    var _ref4 = _slicedToArray(_ref2, 2),
        b = _ref4[1];

    return a - b;
  }).map(_ref5 => {
    var _ref6 = _slicedToArray(_ref5, 1),
        i = _ref6[0];

    return kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item.get(i);
  });
}
/**
 * Determines the zap group (if any) of which the given item is a part
 *
 * @category General
 * @param item Item that is part of the required zap group
 * @returns List of items in the zap group
 */

function getZapGroup(item) {
  return Object.keys(getRelated(item, "zap")).map(i => Item.get(i));
}
/**
 * Get a map of banished monsters keyed by what banished them
 *
 * @category General
 * @returns Map of banished monsters
 */

function getBanishedMonsters() {
  var banishes = chunk(get("banishedMonsters").split(":"), 3);
  var result = new Map();

  var _iterator = _createForOfIteratorHelper(banishes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          foe = _step$value[0],
          banisher = _step$value[1];

      if (foe === undefined || banisher === undefined) break; // toItem doesn"t error if the item doesn"t exist, so we have to use that.

      var banisherItem = toItem(banisher);

      if (banisher.toLowerCase() === "saber force") {
        result.set($skill(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Use the Force"]))), Monster.get(foe));
      } else if (banisher.toLowerCase() === "nanorhino") {
        result.set($skill(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Unleash Nanites"]))), Monster.get(foe));
      } else if ([Item.none, Item.get("training scroll:  Snokebomb"), Item.get("tomayohawk-style reflex hammer"), null].includes(banisherItem)) {
        if (Skill.get(banisher) === $skill.none) {
          break;
        } else {
          result.set(Skill.get(banisher), Monster.get(foe));
        }
      } else {
        result.set(banisherItem, Monster.get(foe));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return result;
}
/**
 * Determines whether the item is usable
 *
 * This function will be an ongoing work in progress
 *
 * @param item Item to check
 * @returns Whether item is usable
 */

function canUse(item) {
  var path = myPath();

  if (path !== Path.get("Nuclear Autumn")) {
    if ($items(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["Shrieking Weasel holo-record, Power-Guy 2000 holo-record, Lucky Strikes holo-record, EMD holo-record, Superdrifter holo-record, The Pigs holo-record, Drunk Uncles holo-record"]))).includes(item)) {
      return false;
    }
  }

  if (path === Path.get("G-Lover")) {
    if (!item.name.toLowerCase().includes("g")) return false;
  }

  if (path === Path.get("Bees Hate You")) {
    if (item.name.toLowerCase().includes("b")) return false;
  }

  return true;
}
/**
 * Turn KoLmafia `none`s to JavaScript `null`s
 *
 * @param thing Thing that can have a mafia "none" value
 * @returns The thing specified or `null`
 */

function noneToNull(thing) {
  if (thing instanceof Effect) {
    return thing === Effect.none ? null : thing;
  }

  if (thing instanceof Familiar) {
    return thing === Familiar.none ? null : thing;
  }

  if (thing instanceof Item) {
    return thing === Item.none ? null : thing;
  }

  return thing;
}
/**
 * Determine the average value from the sort of range that KoLmafia encodes as a string
 *
 * @param range KoLmafia-style range string
 * @returns Average value fo range
 */

function getAverage(range) {
  var _range$match;

  if (range.indexOf("-") < 0) return Number(range);

  var _ref7 = (_range$match = range.match(/(-?[0-9]+)-(-?[0-9]+)/)) !== null && _range$match !== void 0 ? _range$match : ["0", "0", "0"],
      _ref8 = _slicedToArray(_ref7, 3),
      lower = _ref8[1],
      upper = _ref8[2];

  return (Number(lower) + Number(upper)) / 2;
}
/**
 * Deternube tge average adventures expected from consuming an Item
 *
 * If item is not a consumable, will just return "0".
 *
 * @param item Consumable item
 * @returns Average aventures from consumable
 */

function getAverageAdventures(item) {
  return getAverage(item.adventures);
}
/**
 * Remove an effect
 *
 * @category General
 * @param effect Effect to remove
 * @returns Success
 */

function uneffect(effect) {
  return cliExecute("uneffect ".concat(effect.name));
}
/**
 * Get both the name and id of a player from either their name or id
 *
 * @param idOrName Id or name of player
 * @returns Object containing id and name of player
 */

function getPlayerFromIdOrName(idOrName) {
  var id = typeof idOrName === "number" ? idOrName : parseInt(getPlayerId(idOrName));
  return {
    name: getPlayerName(id),
    id: id
  };
}
/**
 * Determine the step as a number for a given quest property.
 *
 * @param questName Name of quest property to check.
 * @returns Quest step
 */

function questStep(questName) {
  var stringStep = get(questName);
  if (stringStep === "unstarted") return -1;else if (stringStep === "started") return 0;else if (stringStep === "finished" || stringStep === "") return 999;else {
    if (stringStep.substring(0, 4) !== "step") {
      throw new Error("Quest state parsing error.");
    }

    return parseInt(stringStep.substring(4), 10);
  }
}
var EnsureError = /*#__PURE__*/function (_Error) {
  _inherits(EnsureError, _Error);

  var _super = _createSuper(EnsureError);

  function EnsureError(cause, reason) {
    var _this;

    _classCallCheck(this, EnsureError);

    _this = _super.call(this, "Failed to ensure ".concat(cause.name, "!").concat(reason ? " ".concat(reason) : ""));
    _this.name = "Ensure Error";
    return _this;
  }

  return EnsureError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * Tries to get an effect using the default method
 *
 * @param ef effect to try to get
 * @param turns turns to aim for; default of 1
 * @throws {EnsureError} Throws an error if the effect cannot be guaranteed
 */

function ensureEffect(ef) {
  var turns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (haveEffect(ef) < turns) {
    if (ef.default === null) {
      throw new EnsureError(ef, "No default action");
    }

    if (!cliExecute(ef.default) || haveEffect(ef) === 0) {
      throw new EnsureError(ef);
    }
  }
}
var valueMap = new Map();
var MALL_VALUE_MODIFIER = 0.9;
/**
 * Determiens the average value (based on mallprice and autosell) of a collection of items
 *
 * @param items items whose value you care about
 * @returns Average value of items
 */

function getSaleValue() {
  for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
    items[_key] = arguments[_key];
  }

  return items.map(item => {
    if (valueMap.has(item)) return valueMap.get(item) || 0;

    if (item.discardable) {
      valueMap.set(item, mallPrice(item) > Math.max(2 * autosellPrice(item), 100) ? MALL_VALUE_MODIFIER * mallPrice(item) : autosellPrice(item));
    } else {
      valueMap.set(item, mallPrice(item) > 100 ? MALL_VALUE_MODIFIER * mallPrice(item) : 0);
    }

    return valueMap.get(item) || 0;
  }).reduce((s, price) => s + price, 0) / items.length;
}
var Environment = {
  Outdoor: "outdoor",
  Indoor: "indoor",
  Underground: "underground",
  Underwater: "underwater"
};
/**
 * Determines the weight-coefficient of any leprechaunning that this familiar may find itself doing
 * Assumes the familiar is nude and thus fails for hatrack & pantsrack
 * For the Mutant Cactus Bud, returns the efficacy-multiplier instead
 *
 * @param familiar The familiar whose leprechaun multiplier you're interested in
 * @returns Weight-coefficient
 */

function findLeprechaunMultiplier(familiar) {
  if (familiar === $familiar(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["Mutant Cactus Bud"])))) {
    return numericModifier(familiar, "Leprechaun Effectiveness", 1, $item.none);
  }

  if (familiar === $familiar(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["Reanimated Reanimator"])))) return 0;
  var meatBonus = numericModifier(familiar, "Meat Drop", 1, $item.none);
  if (meatBonus === 0) return 0;
  return Math.pow(Math.sqrt(meatBonus / 2 + 55 / 4 + 3) - Math.sqrt(55) / 2, 2);
}
/**
 * Determines the weight-coefficient of any baby gravy fairying that this familiar may find itself doing
 * Assumes the familiar is nude and thus fails for hatrack & pantsrack
 * For the Mutant Fire Ant, returns the efficacy-multiplier instead
 *
 * @param familiar The familiar whose fairy multiplier you're interested in
 * @returns Weight-coefficient
 */

function findFairyMultiplier(familiar) {
  if (familiar === $familiar(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["Mutant Fire Ant"])))) {
    return numericModifier(familiar, "Fairy Effectiveness", 1, $item.none);
  }

  if (familiar === $familiar(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["Reanimated Reanimator"])))) return 0;
  var itemBonus = numericModifier(familiar, "Item Drop", 1, $item.none);
  if (itemBonus === 0) return 0;
  return Math.pow(Math.sqrt(itemBonus + 55 / 4 + 3) - Math.sqrt(55) / 2, 2);
}
var holidayWanderers = new Map([["El Dia De Los Muertos Borrachos", (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$monsters */ .fr)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["Novia Cad\xE1ver, Novio Cad\xE1ver, Padre Cad\xE1ver, Persona Inocente Cad\xE1ver"])))], ["Feast of Boris", (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$monsters */ .fr)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["Candied Yam Golem, Malevolent Tofurkey, Possessed Can of Cranberry Sauce, Stuffing Golem"])))], ["Talk Like a Pirate Day", (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$monsters */ .fr)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["ambulatory pirate, migratory pirate, peripatetic pirate"])))]]);
/**
 * Get today's holiday wanderers
 *
 * @returns List of holiday wanderer Monsters
 */

function getTodaysHolidayWanderers() {
  return flat(holiday().split("/").map(holiday => {
    var _holidayWanderers$get;

    return (_holidayWanderers$get = holidayWanderers.get(holiday)) !== null && _holidayWanderers$get !== void 0 ? _holidayWanderers$get : [];
  }));
}
/**
 * Determines whether or not we can safely call visitUrl(), based on whether we're in a fight, multi-fight, choice, etc
 *
 * @returns Whether urls can be safely visited
 */

function canVisitUrl() {
  if (currentRound()) {
    logger.debug("Current round is ".concat(currentRound(), "; you're in combat."));
    return false;
  }

  if (inMultiFight()) {
    logger.debug("You're in a multifight.");
    return false;
  }

  if (choiceFollowsFight()) {
    logger.debug("A choice follows this fight.");
    return false;
  }

  if (handlingChoice()) {
    logger.debug("You're currently in a choice adventure");
    return false;
  }

  return true;
}
/**
 * Calculate damage taken from a specific element after factoring in resistance
 *
 * @param baseDamage Base damage
 * @param element Element
 * @returns damage after factoring in resistances
 */

function damageTakenByElement(baseDamage, element) {
  if (baseDamage < 0) return 1;
  var res = elementalResistance(element);
  return Math.max(1, Math.ceil(baseDamage - baseDamage * res / 100));
}
var telescopeStats = new Map([["standing around flexing their muscles and using grip exercisers", (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$stat */ .Ri)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["Muscle"])))], ["sitting around playing chess and solving complicated-looking logic puzzles", (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$stat */ .Ri)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["Mysticality"])))], ["all wearing sunglasses and dancing", (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$stat */ .Ri)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["Moxie"])))]]);
var telescopeElements = new Map([["people, all of whom appear to be on fire", (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$element */ .SS)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["hot"])))], ["people, surrounded by a cloud of eldritch mist", (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$element */ .SS)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["spooky"])))], ["greasy-looking people furtively skulking around", (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$element */ .SS)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["sleaze"])))], ["people, surrounded by garbage and clouds of flies", (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$element */ .SS)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["stench"])))], ["people, clustered around a group of igloos", (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$element */ .SS)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["cold"])))]]);
var hedgeTrap1 = new Map([["smoldering bushes on the outskirts of a hedge maze", (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$element */ .SS)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["hot"])))], ["creepy-looking black bushes on the outskirts of a hedge maze", (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$element */ .SS)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["spooky"])))], ["purplish, greasy-looking hedges", (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$element */ .SS)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["sleaze"])))], ["nasty-looking, dripping green bushes on the outskirts of a hedge maze", (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$element */ .SS)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["stench"])))], ["frost-rimed bushes on the outskirts of a hedge maze", (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$element */ .SS)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["cold"])))]]);
var hedgeTrap2 = new Map([["smoke rising from deeper within the maze", (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$element */ .SS)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["hot"])))], ["a miasma of eldritch vapors rising from deeper within the maze", (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$element */ .SS)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["spooky"])))], ["a greasy purple cloud hanging over the center of the maze", (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$element */ .SS)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["sleaze"])))], ["a cloud of green gas hovering over the maze", (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$element */ .SS)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["stench"])))], ["wintry mists rising from deeper within the maze", (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$element */ .SS)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["cold"])))]]);
var hedgeTrap3 = new Map([["with lava slowly oozing out of it", (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$element */ .SS)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["hot"])))], ["surrounded by creepy black mist", (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$element */ .SS)(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["spooky"])))], ["that occasionally vomits out a greasy ball of hair", (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$element */ .SS)(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["sleaze"])))], ["disgorging a really surprising amount of sewage", (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$element */ .SS)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["stench"])))], ["occasionally disgorging a bunch of ice cubes", (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$element */ .SS)(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["cold"])))]]);
/**
 * Get information from telescope
 *
 * @returns An object with all information the telescope gives you about the sorceress's contests and maze
 */

function telescope() {
  return {
    statContest: telescopeStats.get(get("telescope1")),
    elementContest: telescopeElements.get(get("telescope2")),
    hedge1: hedgeTrap1.get(get("telescope3")),
    hedge2: hedgeTrap2.get(get("telescope4")),
    hedge3: hedgeTrap3.get(get("telescope5"))
  };
}
/**
 * Visit the desc_x.php page for a given thing
 *
 * @param thing Thing to examine
 * @returns Contents of desc_x.php page
 */

function examine(thing) {
  var url = thing instanceof Item ? "desc_item.php?whichitem=".concat(thing.descid) : thing instanceof Familiar ? "desc_familiar.php?which=".concat(toInt(thing)) : thing instanceof Effect ? "desc_effect.php?whicheffect=".concat(thing.descid) : "desc_skill.php?whichskill=".concat(toInt(thing));
  return visitUrl(url);
}
/**
 * Picks an option based on your primestat
 *
 * @param options An object keyed by stat; it must either contain all stats, or have a `default` parameter.
 * @returns The option corresponding to your primestat.
 */

var byStat = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .makeByXFunction */ .Qg)(() => (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myPrimestat)().toString());
/**
 * Picks an option based on your player class
 *
 * @param options An object keyed by player class; it must either contain all classes, or have a `default` parameter.
 * @returns The option corresponding to your player class.
 */

var byClass = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .makeByXFunction */ .Qg)(() => (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myClass)().toString());
/**
 * Use an item with visitUrl instead of `use`; this is sometimes useful
 *
 * @param item The item you want to use
 * @returns The html of the resulting page
 */

function directlyUse(item) {
  return visitUrl("inv_use.php?which=3&whichitem=".concat(toInt(item), "&pwd"));
}
/**
 * Empty a slot, or unequip all instances of a given equipped item
 *
 * @param thing The slot or item in question
 * @returns Whether we succeeded completely--`false` if we unequip some but not all instances of the item.
 */

function unequip(thing) {
  if (thing instanceof Slot) return equip(thing, $item.none);
  var failedSlots = Slot.all().filter(s => {
    // Filter the slot out if it doesn't contain the relevant item
    if (equippedItem(s) !== thing) return false; // Filter the slot out if we succeed at unequipping it

    return !unequip(thing); // This leaves only slots that do contain the item but that we failed to unequip
  });
  if (failedSlots.length) logger.debug("Failed to unequip ".concat(thing, " from slots ").concat(failedSlots.join(", ")));
  return failedSlots.length === 0;
}

/***/ }),

/***/ 685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export LogLevels */
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(664);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
var _defaultHandlers;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var LogLevels;

(function (LogLevels) {
  LogLevels[LogLevels["NONE"] = 0] = "NONE";
  LogLevels[LogLevels["ERROR"] = 1] = "ERROR";
  LogLevels[LogLevels["WARNING"] = 2] = "WARNING";
  LogLevels[LogLevels["INFO"] = 3] = "INFO";
  LogLevels[LogLevels["DEBUG"] = 4] = "DEBUG";
})(LogLevels || (LogLevels = {}));

var defaultHandlers = (_defaultHandlers = {}, _defineProperty(_defaultHandlers, LogLevels.INFO, message => {
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.printHtml)("<b>[Libram Info]</b> ".concat(message));
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.logprint)("[Libram] ".concat(message));
  return;
}), _defineProperty(_defaultHandlers, LogLevels.WARNING, message => {
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.printHtml)("<span style=\"background: orange; color: white;\"><b>[Libram Warning]</b> ".concat(message, "</span>"));
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.logprint)("[Libram] ".concat(message));
  return;
}), _defineProperty(_defaultHandlers, LogLevels.ERROR, error => {
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.printHtml)("<span style=\"background: red; color: white;\"><b>[Libram Error]</b> ".concat(error.toString(), "</span>"));
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.logprint)("[Libram] ".concat(error));
  return;
}), _defineProperty(_defaultHandlers, LogLevels.DEBUG, message => {
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.printHtml)("<span style=\"background: red; color: white;\"><b>[Libram Debug]</b> ".concat(message, "</span>"));
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.logprint)("[Libram] ".concat(message));
  return;
}), _defaultHandlers);

var Logger = /*#__PURE__*/function () {
  function Logger() {
    _classCallCheck(this, Logger);

    _defineProperty(this, "handlers", defaultHandlers);
  }

  _createClass(Logger, [{
    key: "level",
    get: function get() {
      return Logger.currentLevel;
    }
  }, {
    key: "setLevel",
    value: function setLevel(level) {
      Logger.currentLevel = level;
    }
  }, {
    key: "setHandler",
    value: function setHandler(level, callback) {
      this.handlers[level] = callback;
    } // eslint-disable-next-line @typescript-eslint/no-explicit-any

  }, {
    key: "log",
    value: function log(level, message) {
      if (this.level >= level) this.handlers[level](message);
    }
  }, {
    key: "info",
    value: function info(message) {
      this.log(LogLevels.INFO, message);
    }
  }, {
    key: "warning",
    value: function warning(message) {
      this.log(LogLevels.WARNING, message);
    }
  }, {
    key: "error",
    value: function error(message) {
      this.log(LogLevels.ERROR, message);
    }
  }, {
    key: "debug",
    value: function debug(message) {
      this.log(LogLevels.DEBUG, message);
    }
  }]);

  return Logger;
}();

_defineProperty(Logger, "currentLevel", LogLevels.ERROR);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Logger());

/***/ }),

/***/ 376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nb": () => (/* binding */ Requirement)
/* harmony export */ });
/* unused harmony exports mergeMaximizeOptions, setDefaultMaximizeOptions, modeableItems, modeableState, getCurrentModes, applyModes, maximizeCached, clearMaximizerCache */
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(664);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(685);
/* harmony import */ var _template_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(678);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(588);
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





/**
 * Merges a partial set of maximizer options onto a full set maximizer options. We merge via overriding for all boolean properties and for onlySlot, and concat all other array properties.
 *
 * @param defaultOptions MaximizeOptions to use as a "base."
 * @param addendums Options to attempt to merge onto defaultOptions.
 * @returns Merged maximizer options
 */

function mergeMaximizeOptions(defaultOptions, addendums) {
  var _addendums$updateOnFa, _addendums$updateOnCa, _addendums$useOutfitC, _addendums$forceEquip, _addendums$preventEqu, _addendums$bonusEquip, _addendums$onlySlot, _addendums$preventSlo, _addendums$forceUpdat, _addendums$modes;

  return {
    updateOnFamiliarChange: (_addendums$updateOnFa = addendums.updateOnFamiliarChange) !== null && _addendums$updateOnFa !== void 0 ? _addendums$updateOnFa : defaultOptions.updateOnFamiliarChange,
    updateOnCanEquipChanged: (_addendums$updateOnCa = addendums.updateOnCanEquipChanged) !== null && _addendums$updateOnCa !== void 0 ? _addendums$updateOnCa : defaultOptions.updateOnCanEquipChanged,
    useOutfitCaching: (_addendums$useOutfitC = addendums.useOutfitCaching) !== null && _addendums$useOutfitC !== void 0 ? _addendums$useOutfitC : defaultOptions.useOutfitCaching,
    forceEquip: [].concat(_toConsumableArray(defaultOptions.forceEquip), _toConsumableArray((_addendums$forceEquip = addendums.forceEquip) !== null && _addendums$forceEquip !== void 0 ? _addendums$forceEquip : [])),
    preventEquip: [].concat(_toConsumableArray(defaultOptions.preventEquip), _toConsumableArray((_addendums$preventEqu = addendums.preventEquip) !== null && _addendums$preventEqu !== void 0 ? _addendums$preventEqu : [])).filter(item => {
      var _addendums$forceEquip2;

      return !defaultOptions.forceEquip.includes(item) && !((_addendums$forceEquip2 = addendums.forceEquip) !== null && _addendums$forceEquip2 !== void 0 && _addendums$forceEquip2.includes(item));
    }),
    bonusEquip: new Map([].concat(_toConsumableArray(defaultOptions.bonusEquip), _toConsumableArray((_addendums$bonusEquip = addendums.bonusEquip) !== null && _addendums$bonusEquip !== void 0 ? _addendums$bonusEquip : []))),
    onlySlot: (_addendums$onlySlot = addendums.onlySlot) !== null && _addendums$onlySlot !== void 0 ? _addendums$onlySlot : defaultOptions.onlySlot,
    preventSlot: [].concat(_toConsumableArray(defaultOptions.preventSlot), _toConsumableArray((_addendums$preventSlo = addendums.preventSlot) !== null && _addendums$preventSlo !== void 0 ? _addendums$preventSlo : [])),
    forceUpdate: (_addendums$forceUpdat = addendums.forceUpdate) !== null && _addendums$forceUpdat !== void 0 ? _addendums$forceUpdat : defaultOptions.forceUpdate,
    modes: _objectSpread(_objectSpread({}, defaultOptions.modes), (_addendums$modes = addendums.modes) !== null && _addendums$modes !== void 0 ? _addendums$modes : {})
  };
}
var defaultMaximizeOptions = {
  updateOnFamiliarChange: true,
  updateOnCanEquipChanged: true,
  useOutfitCaching: true,
  forceEquip: [],
  preventEquip: [],
  bonusEquip: new Map(),
  onlySlot: [],
  preventSlot: [],
  forceUpdate: false,
  modes: {}
};
/**
 *
 * @param options Default options for each maximizer run.
 * @param options.updateOnFamiliarChange Re-run the maximizer if familiar has changed. Default true.
 * @param options.updateOnCanEquipChanged Re-run the maximizer if stats have changed what can be equipped. Default true.
 * @param options.forceEquip Equipment to force-equip ("equip X").
 * @param options.preventEquip Equipment to prevent equipping ("-equip X").
 * @param options.bonusEquip Equipment to apply a bonus to ("200 bonus X").
 */

function setDefaultMaximizeOptions(options) {
  Object.assign(defaultMaximizeOptions, options);
}
var modeableCommands = ["backupcamera", "umbrella", "snowsuit", "edpiece", "retrocape", "parka"];
var modeableItems = {
  backupcamera: (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$item */ .xr)(_templateObject || (_templateObject = _taggedTemplateLiteral(["backup camera"]))),
  umbrella: (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$item */ .xr)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["unbreakable umbrella"]))),
  snowsuit: (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$item */ .xr)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Snow Suit"]))),
  edpiece: (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$item */ .xr)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["The Crown of Ed the Undying"]))),
  retrocape: (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$item */ .xr)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"]))),
  parka: (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$item */ .xr)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["Jurassic Parka"])))
};
var modeableState = {
  backupcamera: () => (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)("backupCameraMode"),
  umbrella: () => (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)("umbrellaState"),
  snowsuit: () => (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)("snowsuit"),
  edpiece: () => (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)("edPiece"),
  retrocape: () => (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)("retroCapeSuperhero") + " " + (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)("retroCapeWashingInstructions"),
  parka: () => (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)("parkaMode")
};
/**
 * Get set of current modes for modeables
 *
 * @returns Set of modes
 */

function getCurrentModes() {
  var modes = {};

  var _iterator = _createForOfIteratorHelper(modeableCommands),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;

      if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEquipped)(modeableItems[key])) {
        modes[key] = modeableState[key]();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return modes;
}
/**
 * Apply set of modes
 *
 * @param modes Modes to apply
 */

function applyModes(modes) {
  var _iterator2 = _createForOfIteratorHelper(modeableCommands),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var command = _step2.value;

      if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEquipped)(modeableItems[command]) && modes[command] !== undefined) {
        if (modeableState[command]() !== modes[command]) {
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)(command + " " + modes[command]);
        }
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
} // Subset of slots that are valid for caching.

var cachedSlots = (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$slots */ .ei)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["hat, weapon, off-hand, back, shirt, pants, acc1, acc2, acc3, familiar"])));

var CacheEntry = function CacheEntry(equipment, rider, familiar, canEquipItemCount, modes) {
  _classCallCheck(this, CacheEntry);

  _defineProperty(this, "equipment", void 0);

  _defineProperty(this, "rider", void 0);

  _defineProperty(this, "familiar", void 0);

  _defineProperty(this, "canEquipItemCount", void 0);

  _defineProperty(this, "modes", void 0);

  this.equipment = equipment;
  this.rider = rider;
  this.familiar = familiar;
  this.canEquipItemCount = canEquipItemCount;
  this.modes = modes;
};

var _outfitSlots = /*#__PURE__*/new WeakMap();

var _useHistory = /*#__PURE__*/new WeakMap();

var _maxSize = /*#__PURE__*/new WeakMap();

var OutfitLRUCache = /*#__PURE__*/function () {
  // Current outfits allocated
  // Array of indices into #outfitSlots in order of use. Most recent at the front.
  function OutfitLRUCache(maxSize) {
    _classCallCheck(this, OutfitLRUCache);

    _outfitSlots.set(this, {
      writable: true,
      value: []
    });

    _useHistory.set(this, {
      writable: true,
      value: []
    });

    _maxSize.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _maxSize, maxSize);
  }

  _createClass(OutfitLRUCache, [{
    key: "checkConsistent",
    value: function checkConsistent() {
      if (_classPrivateFieldGet(this, _useHistory).length !== _classPrivateFieldGet(this, _outfitSlots).length || !_toConsumableArray(_classPrivateFieldGet(this, _useHistory)).sort().every((value, index) => value === index)) {
        throw new Error("Outfit cache consistency failed.");
      }
    }
  }, {
    key: "promote",
    value: function promote(index) {
      _classPrivateFieldSet(this, _useHistory, [index].concat(_toConsumableArray(_classPrivateFieldGet(this, _useHistory).filter(i => i !== index))));

      this.checkConsistent();
    }
  }, {
    key: "get",
    value: function get(key) {
      var index = _classPrivateFieldGet(this, _outfitSlots).indexOf(key);

      if (index < 0) return undefined;
      this.promote(index);
      return "".concat(OutfitLRUCache.OUTFIT_PREFIX, " ").concat(index);
    }
  }, {
    key: "insert",
    value: function insert(key) {
      var lastUseIndex = undefined;

      if (_classPrivateFieldGet(this, _outfitSlots).length >= _classPrivateFieldGet(this, _maxSize)) {
        lastUseIndex = _classPrivateFieldGet(this, _useHistory).pop();

        if (lastUseIndex === undefined) {
          throw new Error("Outfit cache consistency failed.");
        }

        _classPrivateFieldGet(this, _useHistory).splice(0, 0, lastUseIndex);

        _classPrivateFieldGet(this, _outfitSlots)[lastUseIndex] = key;
        this.checkConsistent();
        return "".concat(OutfitLRUCache.OUTFIT_PREFIX, " ").concat(lastUseIndex);
      } else {
        var index = _classPrivateFieldGet(this, _outfitSlots).push(key) - 1;

        _classPrivateFieldGet(this, _useHistory).splice(0, 0, index);

        this.checkConsistent();
        return "".concat(OutfitLRUCache.OUTFIT_PREFIX, " ").concat(index);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      _classPrivateFieldSet(this, _outfitSlots, []);

      _classPrivateFieldSet(this, _useHistory, []);
    }
  }]);

  return OutfitLRUCache;
}();
/**
 * Save current equipment as KoL-native outfit.
 *
 * @param name Name of new outfit.
 */


_defineProperty(OutfitLRUCache, "OUTFIT_PREFIX", "Script Outfit");

function saveOutfit(name) {
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("outfit save ".concat(name));
} // Objective cache entries.


var cachedObjectives = {}; // Outfit cache entries. Keep 6 by default to avoid cluttering list.

var outfitCache = new OutfitLRUCache(6); // Cache to prevent rescanning all items unnecessarily

var cachedStats = [0, 0, 0];
var cachedCanEquipItemCount = 0;
/**
 * Count the number of unique items that can be equipped.
 *
 * @returns The count of unique items.
 */

function canEquipItemCount() {
  var stats = (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$stats */ .gw)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["Muscle, Mysticality, Moxie"]))).map(stat => Math.min((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myBasestat)(stat), 300));

  if (stats.every((value, index) => value === cachedStats[index])) {
    return cachedCanEquipItemCount;
  }

  cachedStats = stats;
  cachedCanEquipItemCount = kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item.all().filter(item => (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.canEquip)(item)).length;
  return cachedCanEquipItemCount;
}
/**
 * Checks the objective cache for a valid entry.
 *
 * @param cacheKey The cache key to check.
 * @param options Set of maximizer options
 * @returns A valid CacheEntry or null.
 */


function checkCache(cacheKey, options) {
  var entry = cachedObjectives[cacheKey];

  if (!entry) {
    return null;
  }

  if (options.updateOnFamiliarChange && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myFamiliar)() !== entry.familiar) {
    _logger__WEBPACK_IMPORTED_MODULE_2__/* .default.warning */ .Z.warning("Equipment found in maximize cache but familiar is different.");
    return null;
  }

  if (options.updateOnCanEquipChanged && entry.canEquipItemCount !== canEquipItemCount()) {
    _logger__WEBPACK_IMPORTED_MODULE_2__/* .default.warning */ .Z.warning("Equipment found in maximize cache but equippable item list is out of date.");
    return null;
  }

  return entry;
}
/**
 * Applies equipment that was found in the cache.
 *
 * @param entry The CacheEntry to apply
 * @param options Set of maximizer options
 */


function applyCached(entry, options) {
  var outfitName = options.useOutfitCaching ? outfitCache.get(entry) : undefined;

  if (outfitName) {
    if (!(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.isWearingOutfit)(outfitName)) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.outfit)(outfitName);
    }

    var familiarEquip = entry.equipment.get((0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$slot */ .Jh)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["familiar"]))));
    if (familiarEquip) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)((0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$slot */ .Jh)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["familiar"]))), familiarEquip);
  } else {
    var _iterator3 = _createForOfIteratorHelper(entry.equipment),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _step3$value = _slicedToArray(_step3.value, 2),
            slot = _step3$value[0],
            item = _step3$value[1];

        if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equippedItem)(slot) !== item && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(item) > 0) {
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)(slot, item);
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    if (verifyCached(entry) && options.useOutfitCaching) {
      var _outfitName = outfitCache.insert(entry);

      _logger__WEBPACK_IMPORTED_MODULE_2__/* .default.info */ .Z.info("Saving equipment to outfit ".concat(_outfitName, "."));
      saveOutfit(_outfitName);
    }
  }

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equippedAmount)((0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$item */ .xr)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["Crown of Thrones"])))) > 0 && entry.rider.get((0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$item */ .xr)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["Crown of Thrones"]))))) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.enthroneFamiliar)(entry.rider.get((0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$item */ .xr)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["Crown of Thrones"])))) || _template_string__WEBPACK_IMPORTED_MODULE_1__/* .$familiar.none */ .HP.none);
  }

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equippedAmount)((0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$item */ .xr)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["Buddy Bjorn"])))) > 0 && entry.rider.get((0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$item */ .xr)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["Buddy Bjorn"]))))) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.bjornifyFamiliar)(entry.rider.get((0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$item */ .xr)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["Buddy Bjorn"])))) || _template_string__WEBPACK_IMPORTED_MODULE_1__/* .$familiar.none */ .HP.none);
  }

  applyModes(_objectSpread(_objectSpread({}, entry.modes), options.modes));
}

var slotStructure = [(0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$slots */ .ei)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["hat"]))), (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$slots */ .ei)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["back"]))), (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$slots */ .ei)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["shirt"]))), (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$slots */ .ei)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["weapon, off-hand"]))), (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$slots */ .ei)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["pants"]))), (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$slots */ .ei)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["acc1, acc2, acc3"]))), (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$slots */ .ei)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["familiar"])))];
/**
 * Verifies that a CacheEntry was applied successfully.
 *
 * @param entry The CacheEntry to verify
 * @param warn Whether to warn if the cache could not be applied
 * @returns If all desired equipment was appliedn in the correct slots.
 */

function verifyCached(entry) {
  var warn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var success = true;

  var _iterator4 = _createForOfIteratorHelper(slotStructure),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var slotGroup = _step4.value;
      var desiredSlots = slotGroup.map(slot => {
        var _entry$equipment$get;

        return [slot, (_entry$equipment$get = entry.equipment.get(slot)) !== null && _entry$equipment$get !== void 0 ? _entry$equipment$get : null];
      }).filter(_ref => {
        var _ref2 = _slicedToArray(_ref, 2),
            item = _ref2[1];

        return item !== null;
      });
      var desiredSet = desiredSlots.map(_ref3 => {
        var _ref4 = _slicedToArray(_ref3, 2),
            item = _ref4[1];

        return item;
      });
      var equippedSet = desiredSlots.map(_ref5 => {
        var _ref6 = _slicedToArray(_ref5, 1),
            slot = _ref6[0];

        return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equippedItem)(slot);
      });

      if (!(0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .setEqual */ .$x)(desiredSet, equippedSet)) {
        if (warn) {
          _logger__WEBPACK_IMPORTED_MODULE_2__/* .default.warning */ .Z.warning("Failed to apply cached ".concat(desiredSet.join(", "), " in ").concat(slotGroup.join(", "), "."));
        }

        success = false;
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equippedAmount)((0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$item */ .xr)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["Crown of Thrones"])))) > 0 && entry.rider.get((0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$item */ .xr)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["Crown of Thrones"]))))) {
    if (entry.rider.get((0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$item */ .xr)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["Crown of Thrones"])))) !== (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myEnthronedFamiliar)()) {
      if (warn) {
        _logger__WEBPACK_IMPORTED_MODULE_2__/* .default.warning */ .Z.warning("Failed to apply ".concat(entry.rider.get((0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$item */ .xr)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["Crown of Thrones"])))), " in ").concat((0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$item */ .xr)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["Crown of Thrones"]))), "."));
      }

      success = false;
    }
  }

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equippedAmount)((0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$item */ .xr)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["Buddy Bjorn"])))) > 0 && entry.rider.get((0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$item */ .xr)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["Buddy Bjorn"]))))) {
    if (entry.rider.get((0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$item */ .xr)(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["Buddy Bjorn"])))) !== (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myBjornedFamiliar)()) {
      if (warn) {
        _logger__WEBPACK_IMPORTED_MODULE_2__/* .default.warning */ .Z.warning("Failed to apply".concat(entry.rider.get((0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$item */ .xr)(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["Buddy Bjorn"])))), " in ").concat((0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$item */ .xr)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["Buddy Bjorn"]))), "."));
      }

      success = false;
    }
  }

  return success;
}
/**
 * Save current equipment to the objective cache.
 *
 * @param cacheKey The cache key to save.
 * @param options Set of maximizer options
 */


function saveCached(cacheKey, options) {
  var equipment = new Map();
  var rider = new Map();

  var _iterator5 = _createForOfIteratorHelper(cachedSlots),
      _step5;

  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var _slot2 = _step5.value;
      equipment.set(_slot2, (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equippedItem)(_slot2));
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equippedAmount)((0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$item */ .xr)(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["card sleeve"])))) > 0) {
    equipment.set((0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$slot */ .Jh)(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["card-sleeve"]))), (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equippedItem)((0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$slot */ .Jh)(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["card-sleeve"])))));
  }

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equippedAmount)((0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$item */ .xr)(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["Crown of Thrones"])))) > 0) {
    rider.set((0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$item */ .xr)(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["Crown of Thrones"]))), (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myEnthronedFamiliar)());
  }

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equippedAmount)((0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$item */ .xr)(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["Buddy Bjorn"])))) > 0) {
    rider.set((0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$item */ .xr)(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["Buddy Bjorn"]))), (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myBjornedFamiliar)());
  }

  if (options.preventSlot && options.preventSlot.length > 0) {
    var _iterator6 = _createForOfIteratorHelper(options.preventSlot),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var slot = _step6.value;
        equipment.delete(slot);
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }

    if (options.preventSlot.includes((0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$slot */ .Jh)(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["buddy-bjorn"]))))) {
      rider.delete((0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$item */ .xr)(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["Buddy Bjorn"]))));
    }

    if (options.preventSlot.includes((0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$slot */ .Jh)(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["crown-of-thrones"]))))) {
      rider.delete((0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$item */ .xr)(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["Crown of Thrones"]))));
    }
  }

  if (options.onlySlot && options.onlySlot.length > 0) {
    var _iterator7 = _createForOfIteratorHelper(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Slot.all()),
        _step7;

    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var _slot = _step7.value;

        if (!options.onlySlot.includes(_slot)) {
          equipment.delete(_slot);
        }
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }

    if (!options.onlySlot.includes((0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$slot */ .Jh)(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["buddy-bjorn"]))))) {
      rider.delete((0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$item */ .xr)(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["Buddy Bjorn"]))));
    }

    if (!options.onlySlot.includes((0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$slot */ .Jh)(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["crown-of-thrones"]))))) {
      rider.delete((0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$item */ .xr)(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["Crown of Thrones"]))));
    }
  }

  var entry = new CacheEntry(equipment, rider, (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myFamiliar)(), canEquipItemCount(), _objectSpread(_objectSpread({}, getCurrentModes()), options.modes));
  cachedObjectives[cacheKey] = entry;

  if (options.useOutfitCaching) {
    var outfitName = outfitCache.insert(entry);
    _logger__WEBPACK_IMPORTED_MODULE_2__/* .default.info */ .Z.info("Saving equipment to outfit ".concat(outfitName, "."));
    saveOutfit(outfitName);
  }
}
/**
 * Run the maximizer, but only if the objective and certain pieces of game state haven't changed since it was last run.
 *
 * @param objectives Objectives to maximize for.
 * @param options Options for this run of the maximizer.
 * @param options.updateOnFamiliarChange Re-run the maximizer if familiar has changed. Default true.
 * @param options.updateOnCanEquipChanged Re-run the maximizer if stats have changed what can be equipped. Default true.
 * @param options.forceEquip Equipment to force-equip ("equip X").
 * @param options.preventEquip Equipment to prevent equipping ("-equip X").
 * @param options.bonusEquip Equipment to apply a bonus to ("200 bonus X").
 * @returns Whether the maximize call succeeded.
 */


function maximizeCached(objectives) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fullOptions = mergeMaximizeOptions(defaultMaximizeOptions, options);
  var forceEquip = fullOptions.forceEquip,
      preventEquip = fullOptions.preventEquip,
      bonusEquip = fullOptions.bonusEquip,
      onlySlot = fullOptions.onlySlot,
      preventSlot = fullOptions.preventSlot,
      forceUpdate = fullOptions.forceUpdate; // Sort each group in objective to ensure consistent ordering in string

  var objective = _toConsumableArray(new Set([].concat(_toConsumableArray(objectives.sort()), _toConsumableArray(forceEquip.map(item => "equip ".concat(item)).sort()), _toConsumableArray(preventEquip.map(item => "-equip ".concat(item)).sort()), _toConsumableArray(onlySlot.map(slot => "".concat(slot)).sort()), _toConsumableArray(preventSlot.map(slot => "-".concat(slot)).sort()), _toConsumableArray(Array.from(bonusEquip.entries()).filter(_ref7 => {
    var _ref8 = _slicedToArray(_ref7, 2),
        bonus = _ref8[1];

    return bonus !== 0;
  }).map(_ref9 => {
    var _ref10 = _slicedToArray(_ref9, 2),
        item = _ref10[0],
        bonus = _ref10[1];

    return "".concat(Math.round(bonus * 100) / 100, " bonus ").concat(item);
  }).sort())))).join(", "); // Items equipped in slots not touched by the maximizer must be in the cache key


  var untouchedSlots = cachedSlots.filter(slot => preventSlot.includes(slot) || onlySlot.length > 0 && !onlySlot.includes(slot));
  var cacheKey = [objective].concat(_toConsumableArray(untouchedSlots.map(slot => "".concat(slot, ":").concat((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equippedItem)(slot))).sort())).join("; ");
  var cacheEntry = checkCache(cacheKey, fullOptions);

  if (cacheEntry && !forceUpdate) {
    if (verifyCached(cacheEntry, false)) return true;
    _logger__WEBPACK_IMPORTED_MODULE_2__/* .default.info */ .Z.info("Equipment found in maximize cache, equipping...");
    applyCached(cacheEntry, fullOptions);

    if (verifyCached(cacheEntry)) {
      _logger__WEBPACK_IMPORTED_MODULE_2__/* .default.info */ .Z.info("Equipped cached ".concat(cacheKey));
      return true;
    }

    _logger__WEBPACK_IMPORTED_MODULE_2__/* .default.warning */ .Z.warning("Maximize cache application failed, maximizing...");
  }

  var result = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.maximize)(objective, false);
  saveCached(cacheKey, fullOptions);
  return result;
}

var _maximizeParameters = /*#__PURE__*/new WeakMap();

var _maximizeOptions = /*#__PURE__*/new WeakMap();

var Requirement = /*#__PURE__*/function () {
  /**
   * A convenient way of combining maximization parameters and options
   *
   * @param maximizeParameters Parameters you're attempting to maximize
   * @param maximizeOptions Object potentially containing forceEquips, bonusEquips, preventEquips, and preventSlots
   */
  function Requirement(maximizeParameters, maximizeOptions) {
    _classCallCheck(this, Requirement);

    _maximizeParameters.set(this, {
      writable: true,
      value: void 0
    });

    _maximizeOptions.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _maximizeParameters, maximizeParameters);

    _classPrivateFieldSet(this, _maximizeOptions, maximizeOptions);
  }

  _createClass(Requirement, [{
    key: "maximizeParameters",
    get: function get() {
      return _classPrivateFieldGet(this, _maximizeParameters);
    }
  }, {
    key: "maximizeOptions",
    get: function get() {
      return _classPrivateFieldGet(this, _maximizeOptions);
    }
    /**
     * Merges two requirements, concanating relevant arrays. Typically used in static form.
     *
     * @param other Requirement to merge with.
     */

  }, {
    key: "merge",
    value: function merge(other) {
      var _optionsA$forceEquip, _other$maximizeOption, _optionsA$preventEqui, _other$maximizeOption3, _optionsA$bonusEquip$, _optionsA$bonusEquip, _optionsB$bonusEquip$, _optionsB$bonusEquip, _optionsA$onlySlot, _optionsB$onlySlot, _optionsA$preventSlot, _optionsB$preventSlot;

      var optionsA = this.maximizeOptions;
      var optionsB = other.maximizeOptions;
      return new Requirement([].concat(_toConsumableArray(this.maximizeParameters), _toConsumableArray(other.maximizeParameters)), {
        updateOnFamiliarChange: optionsA.updateOnFamiliarChange || other.maximizeOptions.updateOnFamiliarChange,
        updateOnCanEquipChanged: optionsA.updateOnCanEquipChanged || other.maximizeOptions.updateOnCanEquipChanged,
        forceEquip: [].concat(_toConsumableArray((_optionsA$forceEquip = optionsA.forceEquip) !== null && _optionsA$forceEquip !== void 0 ? _optionsA$forceEquip : []), _toConsumableArray((_other$maximizeOption = other.maximizeOptions.forceEquip) !== null && _other$maximizeOption !== void 0 ? _other$maximizeOption : [])).filter(x => {
          var _other$maximizeOption2;

          return !((_other$maximizeOption2 = other.maximizeOptions.preventEquip) !== null && _other$maximizeOption2 !== void 0 && _other$maximizeOption2.includes(x));
        }),
        preventEquip: [].concat(_toConsumableArray((_optionsA$preventEqui = optionsA.preventEquip) !== null && _optionsA$preventEqui !== void 0 ? _optionsA$preventEqui : []), _toConsumableArray((_other$maximizeOption3 = other.maximizeOptions.preventEquip) !== null && _other$maximizeOption3 !== void 0 ? _other$maximizeOption3 : [])).filter(x => {
          var _other$maximizeOption4;

          return !((_other$maximizeOption4 = other.maximizeOptions.forceEquip) !== null && _other$maximizeOption4 !== void 0 && _other$maximizeOption4.includes(x));
        }),
        bonusEquip: new Map([].concat(_toConsumableArray((_optionsA$bonusEquip$ = (_optionsA$bonusEquip = optionsA.bonusEquip) === null || _optionsA$bonusEquip === void 0 ? void 0 : _optionsA$bonusEquip.entries()) !== null && _optionsA$bonusEquip$ !== void 0 ? _optionsA$bonusEquip$ : []), _toConsumableArray((_optionsB$bonusEquip$ = (_optionsB$bonusEquip = optionsB.bonusEquip) === null || _optionsB$bonusEquip === void 0 ? void 0 : _optionsB$bonusEquip.entries()) !== null && _optionsB$bonusEquip$ !== void 0 ? _optionsB$bonusEquip$ : []))),
        onlySlot: [].concat(_toConsumableArray((_optionsA$onlySlot = optionsA.onlySlot) !== null && _optionsA$onlySlot !== void 0 ? _optionsA$onlySlot : []), _toConsumableArray((_optionsB$onlySlot = optionsB.onlySlot) !== null && _optionsB$onlySlot !== void 0 ? _optionsB$onlySlot : [])),
        preventSlot: [].concat(_toConsumableArray((_optionsA$preventSlot = optionsA.preventSlot) !== null && _optionsA$preventSlot !== void 0 ? _optionsA$preventSlot : []), _toConsumableArray((_optionsB$preventSlot = optionsB.preventSlot) !== null && _optionsB$preventSlot !== void 0 ? _optionsB$preventSlot : [])),
        forceUpdate: optionsA.forceUpdate || optionsB.forceUpdate
      });
    }
    /**
     * Merges a set of requirements together, starting with an empty requirement.
     *
     * @param allRequirements Requirements to merge
     * @returns Merged requirements
     */

  }, {
    key: "maximize",
    value:
    /**
     * Runs maximizeCached, using the maximizeParameters and maximizeOptions contained by this requirement.
     *
     * @returns Whether the maximize call succeeded.
     */
    function maximize() {
      return maximizeCached(this.maximizeParameters, this.maximizeOptions);
    }
    /**
     * Merges requirements, and then runs maximizeCached on the combined requirement.
     *
     * @param requirements Requirements to maximize on
     */

  }], [{
    key: "merge",
    value: function merge(allRequirements) {
      return allRequirements.reduce((x, y) => x.merge(y), new Requirement([], {}));
    }
  }, {
    key: "maximize",
    value: function maximize() {
      for (var _len = arguments.length, requirements = new Array(_len), _key = 0; _key < _len; _key++) {
        requirements[_key] = arguments[_key];
      }

      Requirement.merge(requirements).maximize();
    }
  }]);

  return Requirement;
}();
/**
 * Clear all outfits cached by the maximizer.
 */

function clearMaximizerCache() {
  outfitCache.clear();

  for (var member in cachedObjectives) {
    delete cachedObjectives[member];
  }
}

/***/ }),

/***/ 409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U2": () => (/* binding */ get)
/* harmony export */ });
/* unused harmony exports mergeModifiers, printModtrace, getTotalModifier */
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(664);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modifierTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(986);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(588);
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/**
 * Get the value of a modifier
 *
 * @param name Modifier name
 * @param subject Subject of modifier
 * @returns Value of modifier
 */

function get(name, subject) {
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .arrayContains */ .IA)(name, _modifierTypes__WEBPACK_IMPORTED_MODULE_2__/* .booleanModifiers */ .JA)) {
    return subject === undefined ? (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.booleanModifier)(name) : (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.booleanModifier)(subject, name);
  }

  if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .arrayContains */ .IA)(name, _modifierTypes__WEBPACK_IMPORTED_MODULE_2__/* .classModifiers */ .eE)) {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.classModifier)(subject, name);
  }

  if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .arrayContains */ .IA)(name, _modifierTypes__WEBPACK_IMPORTED_MODULE_2__/* .effectModifiers */ .pZ)) {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.effectModifier)(subject, name);
  }

  if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .arrayContains */ .IA)(name, _modifierTypes__WEBPACK_IMPORTED_MODULE_2__/* .monsterModifiers */ .B5)) {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.monsterModifier)(subject, name);
  }

  if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .arrayContains */ .IA)(name, _modifierTypes__WEBPACK_IMPORTED_MODULE_2__/* .numericModifiers */ .H8)) {
    return subject === undefined ? (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)(name) : (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)(subject, name);
  }

  if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .arrayContains */ .IA)(name, _modifierTypes__WEBPACK_IMPORTED_MODULE_2__/* .skillModifiers */ .hI)) {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.skillModifier)(subject, name);
  }

  if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .arrayContains */ .IA)(name, _modifierTypes__WEBPACK_IMPORTED_MODULE_2__/* .stringModifiers */ .N0)) {
    return subject === undefined ? (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.stringModifier)(name) : (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.stringModifier)(subject, name);
  }

  if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .arrayContains */ .IA)(name, _modifierTypes__WEBPACK_IMPORTED_MODULE_2__/* .statModifiers */ .fg)) {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.statModifier)(subject, name);
  }
}
/**
 * Merge two Modifiers objects into one, summing all numeric modifiers, ||ing all boolean modifiers, and otherwise letting the second object overwrite the first.
 *
 * @param modifiers1 Modifiers objects to be merged onto.
 * @param modifiers2 Modifiers object to merge.
 * @returns A single Modifiers object obtained by merging.
 */

function pairwiseMerge(modifiers1, modifiers2) {
  var returnValue = _objectSpread(_objectSpread({}, modifiers1), modifiers2);

  for (var modifier in modifiers1) {
    if (Array.from(Object.values(modifiers2)).includes(modifier)) {
      if (arrayContains(modifier, numericModifiers)) {
        var _modifiers1$modifier, _modifiers2$modifier;

        returnValue[modifier] = ((_modifiers1$modifier = modifiers1[modifier]) !== null && _modifiers1$modifier !== void 0 ? _modifiers1$modifier : 0) + ((_modifiers2$modifier = modifiers2[modifier]) !== null && _modifiers2$modifier !== void 0 ? _modifiers2$modifier : 0);
      }

      if (arrayContains(modifier, booleanModifiers)) {
        var _modifiers1$modifier2, _modifiers2$modifier2;

        returnValue[modifier] = ((_modifiers1$modifier2 = modifiers1[modifier]) !== null && _modifiers1$modifier2 !== void 0 ? _modifiers1$modifier2 : false) || ((_modifiers2$modifier2 = modifiers2[modifier]) !== null && _modifiers2$modifier2 !== void 0 ? _modifiers2$modifier2 : false);
      }
    }
  }

  return returnValue;
}
/**
 * Merge arbitrarily many Modifiers objects into one, summing all numeric modifiers, and ||ing all boolean modifiers.
 *
 * @param modifierss Modifiers objects to be merged together.
 * @returns A single Modifiers object obtained by merging.
 */


function mergeModifiers() {
  for (var _len = arguments.length, modifierss = new Array(_len), _key = 0; _key < _len; _key++) {
    modifierss[_key] = arguments[_key];
  }

  return modifierss.reduce((a, b) => pairwiseMerge(a, b), {});
}
/**
 * Prints the modtrace to the log.
 * Example: printModtrace("Meat Drop") or printModtrace(["Item Drop", "Booze Drop"])
 *
 * @param inputModifiers A string (or string[]) containing the modtrace lookup term(s).
 * @param baseModifier A string where all the info about modifiers in the string[] array can be grabbed with this one lookup term. (Automatically generated in most cases)
 * @param componentColor The print color for the sum returned for each input modifier
 * @param totalColor The print color for the total sum over every input modifier
 * @returns void
 */

function printModtrace(inputModifiers, // the user's list of modifiers to look up
baseModifier) {
  var _htmlOutput$match, _htmlOutput$match2;

  var componentColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "purple";
  var totalColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "blue";
  if (typeof inputModifiers === "string") return printModtrace([inputModifiers], inputModifiers);else if (inputModifiers.length === 0) return;else if (!baseModifier) {
    return inputModifiers.filter(mod1 => !inputModifiers.some(mod2 => mod2 !== mod1 && mod1.includes(mod2))).forEach(baseMod => printModtrace(inputModifiers.filter(mod => mod.includes(baseMod)), baseMod));
  }
  var htmlOutput = cliExecuteOutput("modtrace ".concat(baseModifier)); // The list of matched modifiers that mafia returns

  var modtraceModifiers = Array.from((_htmlOutput$match = htmlOutput.match(RegExp(/(>)(.*?)(<\/td>)/g))) !== null && _htmlOutput$match !== void 0 ? _htmlOutput$match : []).map(s => s.slice(1, -5)).slice(2);

  if (!modtraceModifiers.some(modifier => modifier.toLowerCase() === baseModifier.toLowerCase())) {
    return print("Could not find exact string match of ".concat(baseModifier, " in ").concat(inputModifiers.toString()), "red");
  }

  var initialVal = baseModifier.toLowerCase() === "familiar weight" ? (() => {
    var wt = familiarWeight(myFamiliar());
    print("[Familiar Weight] Base weight (".concat(wt, ")"));
    return wt;
  })() : 0;
  var modifierVals = new Map(modtraceModifiers.map(modifier => [modifier, initialVal])); // Maps modifier name to its value

  var lowerCaseModifiers = inputModifiers.map(modifier => modifier.toLowerCase());
  Array.from((_htmlOutput$match2 = htmlOutput.match(RegExp(/<tr>(.*?)<\/tr>/g))) !== null && _htmlOutput$match2 !== void 0 ? _htmlOutput$match2 : []).slice(1).map(s => s.slice(4, -5)).forEach(s => {
    var _s$replace$match;

    var rowArr = Array.from((_s$replace$match = s.replace(RegExp(/><\/td>/g), ">0</td>").match(RegExp(/(>)(.*?)(<\/td>)/g))) !== null && _s$replace$match !== void 0 ? _s$replace$match : []).map(s => s.slice(1, -5));
    var rowName = rowArr[1];
    rowArr.slice(2).filter((e, idx) => idx % 2 === 0).forEach((e, idx) => {
      var _modifierVals$get;

      var val = parseFloat(e);
      modifierVals.set(modtraceModifiers[idx], ((_modifierVals$get = modifierVals.get(modtraceModifiers[idx])) !== null && _modifierVals$get !== void 0 ? _modifierVals$get : 0) + val);

      if (val !== 0 && lowerCaseModifiers.includes(modtraceModifiers[idx].toLowerCase())) {
        print("[".concat(modtraceModifiers[idx], "] ").concat(rowName, " (").concat(val.toFixed(1), ")"));
      }
    });
  });
  var total = sum(modtraceModifiers, modifier => {
    if (lowerCaseModifiers.includes(modifier.toLowerCase())) {
      var _modifierVals$get2;

      var modVal = (_modifierVals$get2 = modifierVals.get(modifier)) !== null && _modifierVals$get2 !== void 0 ? _modifierVals$get2 : 0;

      if (have($effect(_templateObject || (_templateObject = _taggedTemplateLiteral(["Bow-Legged Swagger"])))) && modifier.includes("Weapon Damage")) {
        print("[".concat(modifier, "] Bow-Legged Swagger (").concat(modVal.toFixed(1), ")"));
        modVal *= 2;
      }

      print("".concat(modifier, " => ").concat(modVal.toFixed(1)), componentColor);
      return modVal;
    } else return 0;
  });
  print("Total ".concat(baseModifier, ": ").concat(total.toFixed(1)), totalColor);
}
/**
 * Take the sum of a modifier over an array of Skills, Effects, and Items
 *
 * @param modifier A NumericModifier that we want to find the total value of
 * @param subjects A rested array of Skills, Effects, and Items that we want to find the total value of
 * @returns The sum of the appropriate modifier for all of the subjects
 */

function getTotalModifier(modifier) {
  for (var _len2 = arguments.length, subjects = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    subjects[_key2 - 1] = arguments[_key2];
  }

  return sum(subjects, subject => get(modifier, subject));
}

/***/ }),

/***/ 986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JA": () => (/* binding */ booleanModifiers),
/* harmony export */   "eE": () => (/* binding */ classModifiers),
/* harmony export */   "H8": () => (/* binding */ numericModifiers),
/* harmony export */   "pZ": () => (/* binding */ effectModifiers),
/* harmony export */   "B5": () => (/* binding */ monsterModifiers),
/* harmony export */   "hI": () => (/* binding */ skillModifiers),
/* harmony export */   "fg": () => (/* binding */ statModifiers),
/* harmony export */   "N0": () => (/* binding */ stringModifiers)
/* harmony export */ });
// THIS FILE IS AUTOMATICALLY GENERATED. See tools/parseModifiers.ts for more information
var booleanModifiers = ["Softcore Only", "Single Equip", "Never Fumble", "Weakens Monster", "Free Pull", "Variable", "Nonstackable Watch", "Cold Immunity", "Hot Immunity", "Sleaze Immunity", "Spooky Immunity", "Stench Immunity", "Cold Vulnerability", "Hot Vulnerability", "Sleaze Vulnerability", "Spooky Vulnerability", "Stench Vulnerability", "Moxie Controls MP", "Moxie May Control MP", "Four Songs", "Adventure Underwater", "Underwater Familiar", "Generic", "Unarmed", "No Pull", "Lasts Until Rollover", "Attacks Can't Miss", "Pirate", "Breakable", "Drops Items", "Drops Meat"];
var classModifiers = ["Class"];
var numericModifiers = ["Familiar Weight", "Monster Level", "Combat Rate", "Initiative", "Experience", "Item Drop", "Meat Drop", "Damage Absorption", "Damage Reduction", "Cold Resistance", "Hot Resistance", "Sleaze Resistance", "Spooky Resistance", "Stench Resistance", "Mana Cost", "Moxie", "Moxie Percent", "Muscle", "Muscle Percent", "Mysticality", "Mysticality Percent", "Maximum HP", "Maximum HP Percent", "Maximum MP", "Maximum MP Percent", "Weapon Damage", "Ranged Damage", "Spell Damage", "Spell Damage Percent", "Cold Damage", "Hot Damage", "Sleaze Damage", "Spooky Damage", "Stench Damage", "Cold Spell Damage", "Hot Spell Damage", "Sleaze Spell Damage", "Spooky Spell Damage", "Stench Spell Damage", "Underwater Combat Rate", "Fumble", "HP Regen Min", "HP Regen Max", "MP Regen Min", "MP Regen Max", "Adventures", "Familiar Weight Percent", "Weapon Damage Percent", "Ranged Damage Percent", "Stackable Mana Cost", "Hobo Power", "Base Resting HP", "Resting HP Percent", "Bonus Resting HP", "Base Resting MP", "Resting MP Percent", "Bonus Resting MP", "Critical Hit Percent", "PvP Fights", "Volleyball", "Sombrero", "Leprechaun", "Fairy", "Meat Drop Penalty", "Hidden Familiar Weight", "Item Drop Penalty", "Initiative Penalty", "Food Drop", "Booze Drop", "Hat Drop", "Weapon Drop", "Offhand Drop", "Shirt Drop", "Pants Drop", "Accessory Drop", "Volleyball Effectiveness", "Sombrero Effectiveness", "Leprechaun Effectiveness", "Fairy Effectiveness", "Familiar Weight Cap", "Slime Resistance", "Slime Hates It", "Spell Critical Percent", "Muscle Experience", "Mysticality Experience", "Moxie Experience", "Effect Duration", "Candy Drop", "DB Combat Damage", "Sombrero Bonus", "Familiar Experience", "Sporadic Meat Drop", "Sporadic Item Drop", "Meat Bonus", "Pickpocket Chance", "Combat Mana Cost", "Muscle Experience Percent", "Mysticality Experience Percent", "Moxie Experience Percent", "Minstrel Level", "Muscle Limit", "Mysticality Limit", "Moxie Limit", "Song Duration", "Prismatic Damage", "Smithsness", "Supercold Resistance", "Reduce Enemy Defense", "Pool Skill", "Surgeonosity", "Familiar Damage", "Gear Drop", "Maximum Hooch", "Water Level", "Crimbot Outfit Power", "Familiar Tuning Muscle", "Familiar Tuning Mysticality", "Familiar Tuning Moxie", "Random Monster Modifiers", "Luck", "Othello Skill", "Disco Style", "Rollover Effect Duration", "Sixgun Damage", "Fishing Skill", "Additional Song", "Sprinkle Drop", "Absorb Adventures", "Absorb Stats", "Rubee Drop", "Kruegerand Drop", "WarBear Armor Penetration", "Clowniness", "Maximum PP", "Plumber Power", "Drippy Damage", "Drippy Resistance", "Energy", "Scrap", "Familiar Action Bonus", "Water"];
var effectModifiers = ["Effect", "Rollover Effect"];
var monsterModifiers = ["Avatar"];
var skillModifiers = ["Skill"];
var statModifiers = ["Plumber Stat"];
var stringModifiers = ["Intrinsic Effect", "Equalize", "Wiki Name", "Modifiers", "Outfit", "Stat Tuning", "Equips On", "Familiar Effect", "Jiggle", "Equalize Muscle", "Equalize Mysticality", "Equalize Moxie", "Floor Buffed Muscle", "Floor Buffed Mysticality", "Floor Buffed Moxie"];

/***/ }),

/***/ 347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U2": () => (/* binding */ get),
/* harmony export */   "Jr": () => (/* binding */ PropertiesManager)
/* harmony export */ });
/* unused harmony exports getString, getCommaSeparated, getBoolean, getNumber, getBounty, getClass, getCoinmaster, getEffect, getElement, getFamiliar, getItem, getLocation, getMonster, getPhylum, getServant, getSkill, getSlot, getStat, getThrall, set, setProperties, withProperties, withProperty, withChoices, withChoice */
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(664);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _propertyTyping__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(412);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var createPropertyGetter = transform => (property, default_) => {
  var value = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)(property);

  if (default_ !== undefined && value === "") {
    return default_;
  }

  return transform(value, property);
};

var createMafiaClassPropertyGetter = (Type, toType) => createPropertyGetter(value => {
  if (value === "") return null;
  var v = toType(value);
  return v === Type.none ? null : v;
});

var getString = createPropertyGetter(value => value);
var getCommaSeparated = createPropertyGetter(value => value.split(/, ?/));
var getBoolean = createPropertyGetter(value => value === "true");
var getNumber = createPropertyGetter(value => Number(value));
var getBounty = createMafiaClassPropertyGetter(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Bounty, kolmafia__WEBPACK_IMPORTED_MODULE_0__.toBounty);
var getClass = createMafiaClassPropertyGetter(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Class, kolmafia__WEBPACK_IMPORTED_MODULE_0__.toClass);
var getCoinmaster = createMafiaClassPropertyGetter(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Coinmaster, kolmafia__WEBPACK_IMPORTED_MODULE_0__.toCoinmaster);
var getEffect = createMafiaClassPropertyGetter(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Effect, kolmafia__WEBPACK_IMPORTED_MODULE_0__.toEffect);
var getElement = createMafiaClassPropertyGetter(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Element, kolmafia__WEBPACK_IMPORTED_MODULE_0__.toElement);
var getFamiliar = createMafiaClassPropertyGetter(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Familiar, kolmafia__WEBPACK_IMPORTED_MODULE_0__.toFamiliar);
var getItem = createMafiaClassPropertyGetter(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item, kolmafia__WEBPACK_IMPORTED_MODULE_0__.toItem);
var getLocation = createMafiaClassPropertyGetter(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Location, kolmafia__WEBPACK_IMPORTED_MODULE_0__.toLocation);
var getMonster = createMafiaClassPropertyGetter(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Monster, kolmafia__WEBPACK_IMPORTED_MODULE_0__.toMonster);
var getPhylum = createMafiaClassPropertyGetter(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Phylum, kolmafia__WEBPACK_IMPORTED_MODULE_0__.toPhylum);
var getServant = createMafiaClassPropertyGetter(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Servant, kolmafia__WEBPACK_IMPORTED_MODULE_0__.toServant);
var getSkill = createMafiaClassPropertyGetter(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Skill, kolmafia__WEBPACK_IMPORTED_MODULE_0__.toSkill);
var getSlot = createMafiaClassPropertyGetter(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Slot, kolmafia__WEBPACK_IMPORTED_MODULE_0__.toSlot);
var getStat = createMafiaClassPropertyGetter(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Stat, kolmafia__WEBPACK_IMPORTED_MODULE_0__.toStat);
var getThrall = createMafiaClassPropertyGetter(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Thrall, kolmafia__WEBPACK_IMPORTED_MODULE_0__.toThrall);
/**
 * Gets the value of a mafia property, either built in or custom
 *
 * @param property Name of the property
 * @param _default Default value for the property to take if not set
 * @returns Value of the mafia property
 */

function get(property, _default) {
  var value = getString(property); // Handle known properties.

  if ((0,_propertyTyping__WEBPACK_IMPORTED_MODULE_1__/* .isBooleanProperty */ .j1)(property)) {
    var _getBoolean;

    return (_getBoolean = getBoolean(property, _default)) !== null && _getBoolean !== void 0 ? _getBoolean : false;
  } else if ((0,_propertyTyping__WEBPACK_IMPORTED_MODULE_1__/* .isNumericProperty */ .OY)(property)) {
    var _getNumber;

    return (_getNumber = getNumber(property, _default)) !== null && _getNumber !== void 0 ? _getNumber : 0;
  } else if ((0,_propertyTyping__WEBPACK_IMPORTED_MODULE_1__/* .isNumericOrStringProperty */ .jc)(property)) {
    return value.match(/^\d+$/) ? parseInt(value) : value;
  } else if ((0,_propertyTyping__WEBPACK_IMPORTED_MODULE_1__/* .isLocationProperty */ .Ph)(property)) {
    return getLocation(property, _default);
  } else if ((0,_propertyTyping__WEBPACK_IMPORTED_MODULE_1__/* .isMonsterProperty */ .M1)(property)) {
    return getMonster(property, _default);
  } else if ((0,_propertyTyping__WEBPACK_IMPORTED_MODULE_1__/* .isFamiliarProperty */ .mP)(property)) {
    return getFamiliar(property, _default);
  } else if ((0,_propertyTyping__WEBPACK_IMPORTED_MODULE_1__/* .isStatProperty */ .AM)(property)) {
    return getStat(property, _default);
  } else if ((0,_propertyTyping__WEBPACK_IMPORTED_MODULE_1__/* .isPhylumProperty */ .eI)(property)) {
    return getPhylum(property, _default);
  } else if ((0,_propertyTyping__WEBPACK_IMPORTED_MODULE_1__/* .isStringProperty */ .Oz)(property)) {
    return value;
  } // Not a KnownProperty from here on out.


  if (_default instanceof kolmafia__WEBPACK_IMPORTED_MODULE_0__.Location) {
    return getLocation(property, _default);
  } else if (_default instanceof kolmafia__WEBPACK_IMPORTED_MODULE_0__.Monster) {
    return getMonster(property, _default);
  } else if (_default instanceof kolmafia__WEBPACK_IMPORTED_MODULE_0__.Familiar) {
    return getFamiliar(property, _default);
  } else if (_default instanceof kolmafia__WEBPACK_IMPORTED_MODULE_0__.Stat) {
    return getStat(property, _default);
  } else if (_default instanceof kolmafia__WEBPACK_IMPORTED_MODULE_0__.Phylum) {
    return getPhylum(property, _default);
  } else if (typeof _default === "boolean") {
    return value === "true" ? true : value === "false" ? false : _default;
  } else if (typeof _default === "number") {
    return value === "" ? _default : parseInt(value);
  } else if (value === "") {
    return _default === undefined ? "" : _default;
  } else {
    return value;
  }
}
/**
 * Sets the value of a mafia property, either built in or custom
 *
 * @param property Name of the property
 * @param value Value to give the property
 */

function _set(property, value) {
  var stringValue = value === null ? "" : value.toString();
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.setProperty)(property, stringValue);
}
/**
 * Sets the value of a set of mafia properties
 *
 * @param properties Set of properties
 */



function setProperties(properties) {
  for (var _i = 0, _Object$entries = Object.entries(properties); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        prop = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    _set(prop, value);
  }
}
/**
 * Carries out a callback during which a set of properties will be set as supplied
 *
 * @param properties Properties to set during callback
 * @param callback Callback to execute with set properties
 * @returns Return value of the supplied callback
 */

function withProperties(properties, callback) {
  var propertiesBackup = Object.fromEntries(Object.entries(properties).map(_ref => {
    var _ref2 = _slicedToArray(_ref, 1),
        prop = _ref2[0];

    return [prop, get(prop)];
  }));
  setProperties(properties);

  try {
    return callback();
  } finally {
    setProperties(propertiesBackup);
  }
}
/**
 * Carries out a callback during which a property will be set as supplied
 *
 * @param property Property to set during callback
 * @param value Value to set property during callback
 * @param callback Callback to execute with set properties
 * @returns Return value of the supplied callback
 */

function withProperty(property, value, callback) {
  return withProperties(_defineProperty({}, property, value), callback);
}
/**
 * Carries out a callback during which a set of choices will be handled as supplied
 *
 * @param choices Choices to set during callback
 * @param callback Callback to execute with set choices
 * @returns Return value of the supplied callback
 */

function withChoices(choices, callback) {
  var properties = Object.fromEntries(Object.entries(choices).map(_ref3 => {
    var _ref4 = _slicedToArray(_ref3, 2),
        choice = _ref4[0],
        option = _ref4[1];

    return ["choiceAdventure".concat(choice), option];
  }));
  return withProperties(properties, callback);
}
/**
 * Carries out a callback during which a choice will be handled as supplied
 *
 * @param choice Choice to set during callback
 * @param value How to handle choice during callback
 * @param callback Callback to execute with set properties
 * @returns Return value of the supplied callback
 */

function withChoice(choice, value, callback) {
  return withChoices(_defineProperty({}, choice, value), callback);
}
var PropertiesManager = /*#__PURE__*/function () {
  function PropertiesManager() {
    _classCallCheck(this, PropertiesManager);

    _defineProperty(this, "properties", {});
  }

  _createClass(PropertiesManager, [{
    key: "storedValues",
    get: function get() {
      return this.properties;
    }
    /**
     * Sets a collection of properties to the given values, storing the old values.
     *
     * @param propertiesToSet A Properties object, keyed by property name.
     */

  }, {
    key: "set",
    value: function set(propertiesToSet) {
      for (var _i2 = 0, _Object$entries2 = Object.entries(propertiesToSet); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
            propertyName = _Object$entries2$_i[0],
            propertyValue = _Object$entries2$_i[1];

        if (this.properties[propertyName] === undefined) {
          this.properties[propertyName] = get(propertyName);
        }

        _set(propertyName, propertyValue);
      }
    }
    /**
     * Sets a collection of choice adventure properties to the given values, storing the old values.
     *
     * @param choicesToSet An object keyed by choice adventure number.
     */

  }, {
    key: "setChoices",
    value: function setChoices(choicesToSet) {
      this.set(Object.fromEntries(Object.entries(choicesToSet).map(_ref5 => {
        var _ref6 = _slicedToArray(_ref5, 2),
            choiceNumber = _ref6[0],
            choiceValue = _ref6[1];

        return ["choiceAdventure".concat(choiceNumber), choiceValue];
      })));
    }
    /**
     * Sets a single choice adventure property to the given value, storing the old value.
     *
     * @param choiceToSet The number of the choice adventure to set the property for.
     * @param value The value to assign to that choice adventure.
     */

  }, {
    key: "setChoice",
    value: function setChoice(choiceToSet, value) {
      this.setChoices(_defineProperty({}, choiceToSet, value));
    }
    /**
     * Resets the given properties to their original stored value. Does not delete entries from the manager.
     *
     * @param properties Collection of properties to reset.
     */

  }, {
    key: "reset",
    value: function reset() {
      for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {
        properties[_key] = arguments[_key];
      }

      for (var _i3 = 0, _properties = properties; _i3 < _properties.length; _i3++) {
        var property = _properties[_i3];
        var value = this.properties[property];

        if (value) {
          _set(property, value);
        }
      }
    }
    /**
     * Iterates over all stored values, setting each property back to its original stored value. Does not delete entries from the manager.
     */

  }, {
    key: "resetAll",
    value: function resetAll() {
      setProperties(this.properties);
    }
    /**
     * Stops storing the original values of inputted properties.
     *
     * @param properties Properties for the manager to forget.
     */

  }, {
    key: "clear",
    value: function clear() {
      for (var _len2 = arguments.length, properties = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        properties[_key2] = arguments[_key2];
      }

      for (var _i4 = 0, _properties2 = properties; _i4 < _properties2.length; _i4++) {
        var property = _properties2[_i4];

        if (this.properties[property]) {
          delete this.properties[property];
        }
      }
    }
    /**
     * Clears all properties.
     */

  }, {
    key: "clearAll",
    value: function clearAll() {
      this.properties = {};
    }
    /**
     * Increases a numeric property to the given value if necessary.
     *
     * @param property The numeric property we want to potentially raise.
     * @param value The minimum value we want that property to have.
     * @returns Whether we needed to change the property.
     */

  }, {
    key: "setMinimumValue",
    value: function setMinimumValue(property, value) {
      if (get(property, 0) < value) {
        this.set(_defineProperty({}, property, value));
        return true;
      }

      return false;
    }
    /**
     * Decrease a numeric property to the given value if necessary.
     *
     * @param property The numeric property we want to potentially lower.
     * @param value The maximum value we want that property to have.
     * @returns Whether we needed to change the property.
     */

  }, {
    key: "setMaximumValue",
    value: function setMaximumValue(property, value) {
      if (get(property, 0) > value) {
        this.set(_defineProperty({}, property, value));
        return true;
      }

      return false;
    }
    /**
     * Creates a new PropertiesManager with identical stored values to this one.
     *
     * @returns A new PropertiesManager, with identical stored values to this one.
     */

  }, {
    key: "clone",
    value: function clone() {
      var newGuy = new PropertiesManager();
      newGuy.properties = this.storedValues;
      return newGuy;
    }
    /**
     * Clamps a numeric property, modulating it up or down to fit within a specified range
     *
     * @param property The numeric property to clamp
     * @param min The lower bound for what we want the property to be allowed to be.
     * @param max The upper bound for what we want the property to be allowed to be.
     * @returns Whether we ended up changing the property or not.
     */

  }, {
    key: "clamp",
    value: function clamp(property, min, max) {
      if (max < min) return false;
      var start = get(property);
      this.setMinimumValue(property, min);
      this.setMaximumValue(property, max);
      return start !== get(property);
    }
    /**
     * Determines whether this PropertiesManager has identical stored values to another.
     *
     * @param other The PropertiesManager to compare to this one.
     * @returns Whether their StoredValues are identical.
     */

  }, {
    key: "equals",
    value: function equals(other) {
      var thisProps = Object.entries(this.storedValues);
      var otherProps = new Map(Object.entries(other.storedValues));
      if (thisProps.length !== otherProps.size) return false;

      for (var _i5 = 0, _thisProps = thisProps; _i5 < _thisProps.length; _i5++) {
        var _thisProps$_i = _slicedToArray(_thisProps[_i5], 2),
            propertyName = _thisProps$_i[0],
            propertyValue = _thisProps$_i[1];

        if (otherProps.get(propertyName) === propertyValue) return false;
      }

      return true;
    }
    /**
     * Merges a PropertiesManager onto this one, letting the input win in the event that both PropertiesManagers have a value stored.
     *
     * @param other The PropertiesManager to be merged onto this one.
     * @returns A new PropertiesManager with stored values from both its parents.
     */

  }, {
    key: "merge",
    value: function merge(other) {
      var newGuy = new PropertiesManager();
      newGuy.properties = _objectSpread(_objectSpread({}, this.properties), other.properties);
      return newGuy;
    }
    /**
     * Merges an arbitrary collection of PropertiesManagers, letting the rightmost PropertiesManager win in the event of verlap.
     *
     * @param mergees The PropertiesManagers to merge together.
     * @returns A PropertiesManager that is just an amalgam of all the constituents.
     */

  }], [{
    key: "merge",
    value: function merge() {
      for (var _len3 = arguments.length, mergees = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        mergees[_key3] = arguments[_key3];
      }

      if (mergees.length === 0) return new PropertiesManager();
      return mergees.reduce((a, b) => a.merge(b));
    }
  }]);

  return PropertiesManager;
}();

/***/ }),

/***/ 419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XM": () => (/* binding */ booleanProperties),
/* harmony export */   "bE": () => (/* binding */ numericProperties),
/* harmony export */   "mD": () => (/* binding */ monsterProperties),
/* harmony export */   "ru": () => (/* binding */ locationProperties),
/* harmony export */   "tx": () => (/* binding */ stringProperties),
/* harmony export */   "PJ": () => (/* binding */ numericOrStringProperties),
/* harmony export */   "rv": () => (/* binding */ familiarProperties),
/* harmony export */   "$v": () => (/* binding */ statProperties),
/* harmony export */   "aP": () => (/* binding */ phylumProperties)
/* harmony export */ });
/** THIS FILE IS AUTOMATICALLY GENERATED. See tools/parseDefaultProperties.ts for more information */
var booleanProperties = ["abortOnChoiceWhenNotInChoice", "addChatCommandLine", "addCreationQueue", "addStatusBarToFrames", "allowCloseableDesktopTabs", "allowNegativeTally", "allowNonMoodBurning", "allowSummonBurning", "autoHighlightOnFocus", "broadcastEvents", "cacheMallSearches", "chatBeep", "chatLinksUseRelay", "compactChessboard", "copyAsHTML", "customizedTabs", "debugBuy", "debugConsequences", "debugFoxtrotRemoval", "debugPathnames", "gapProtection", "gitInstallDependencies", "gitShowCommitMessages", "gitUpdateOnLogin", "greenScreenProtection", "guiUsesOneWindow", "hideServerDebugText", "logAcquiredItems", "logBattleAction", "logBrowserInteractions", "logChatMessages", "logChatRequests", "logCleanedHTML", "logDecoratedResponses", "logFamiliarActions", "logGainMessages", "logReadableHTML", "logPreferenceChange", "logMonsterHealth", "logReverseOrder", "logStatGains", "logStatusEffects", "logStatusOnLogin", "macroDebug", "macroLens", "mementoListActive", "mergeHobopolisChat", "printStackOnAbort", "proxySet", "relayAddSounds", "relayAddsCustomCombat", "relayAddsDiscoHelper", "relayAddsGraphicalCLI", "relayAddsQuickScripts", "relayAddsRestoreLinks", "relayAddsUpArrowLinks", "relayAddsUseLinks", "relayAddsWikiLinks", "relayAllowRemoteAccess", "relayBrowserOnly", "relayCacheUncacheable", "relayFormatsChatText", "relayHidesJunkMallItems", "relayMaintainsEffects", "relayMaintainsHealth", "relayMaintainsMana", "relayOverridesImages", "relayRunsAfterAdventureScript", "relayRunsBeforeBattleScript", "relayRunsBeforePVPScript", "relayScriptButtonFirst", "relayTextualizesEffects", "relayTrimsZapList", "relayUsesInlineLinks", "relayUsesIntegratedChat", "relayWarnOnRecoverFailure", "removeMalignantEffects", "saveSettingsOnSet", "sharePriceData", "showAllRequests", "showExceptionalRequests", "stealthLogin", "svnInstallDependencies", "svnShowCommitMessages", "svnUpdateOnLogin", "switchEquipmentForBuffs", "syncAfterSvnUpdate", "useChatToolbar", "useContactsFrame", "useDevProxyServer", "useDockIconBadge", "useHugglerChannel", "useImageCache", "useLastUserAgent", "useSystemTrayIcon", "useTabbedChatFrame", "useToolbars", "useCachedVolcanoMaps", "useZoneComboBox", "verboseSpeakeasy", "verboseFloundry", "wrapLongLines", "_gitUpdated", "_svnRepoFileFetched", "_svnUpdated", "antagonisticSnowmanKitAvailable", "arcadeGameHints", "armoryUnlocked", "autoForbidIgnoringStores", "autoCraft", "autoQuest", "autoEntangle", "autoGarish", "autoManaRestore", "autoFillMayoMinder", "autoPinkyRing", "autoPlantHardcore", "autoPlantSoftcore", "autoPotionID", "autoRepairBoxServants", "autoSatisfyWithCloset", "autoSatisfyWithCoinmasters", "autoSatisfyWithMall", "autoSatisfyWithNPCs", "autoSatisfyWithStash", "autoSatisfyWithStorage", "autoSetConditions", "autoSteal", "autoTuxedo", "backupCameraReverserEnabled", "badMoonEncounter01", "badMoonEncounter02", "badMoonEncounter03", "badMoonEncounter04", "badMoonEncounter05", "badMoonEncounter06", "badMoonEncounter07", "badMoonEncounter08", "badMoonEncounter09", "badMoonEncounter10", "badMoonEncounter11", "badMoonEncounter12", "badMoonEncounter13", "badMoonEncounter14", "badMoonEncounter15", "badMoonEncounter16", "badMoonEncounter17", "badMoonEncounter18", "badMoonEncounter19", "badMoonEncounter20", "badMoonEncounter21", "badMoonEncounter22", "badMoonEncounter23", "badMoonEncounter24", "badMoonEncounter25", "badMoonEncounter26", "badMoonEncounter27", "badMoonEncounter28", "badMoonEncounter29", "badMoonEncounter30", "badMoonEncounter31", "badMoonEncounter32", "badMoonEncounter33", "badMoonEncounter34", "badMoonEncounter35", "badMoonEncounter36", "badMoonEncounter37", "badMoonEncounter38", "badMoonEncounter39", "badMoonEncounter40", "badMoonEncounter41", "badMoonEncounter42", "badMoonEncounter43", "badMoonEncounter44", "badMoonEncounter45", "badMoonEncounter46", "badMoonEncounter47", "badMoonEncounter48", "barrelShrineUnlocked", "bigBrotherRescued", "blackBartsBootyAvailable", "bondAdv", "bondBeach", "bondBeat", "bondBooze", "bondBridge", "bondDesert", "bondDR", "bondDrunk1", "bondDrunk2", "bondHoney", "bondHP", "bondInit", "bondItem1", "bondItem2", "bondItem3", "bondJetpack", "bondMartiniDelivery", "bondMartiniPlus", "bondMartiniTurn", "bondMeat", "bondMox1", "bondMox2", "bondMPregen", "bondMus1", "bondMus2", "bondMys1", "bondMys2", "bondSpleen", "bondStat", "bondStat2", "bondStealth", "bondStealth2", "bondSymbols", "bondWar", "bondWeapon2", "bondWpn", "booPeakLit", "bootsCharged", "breakfastCompleted", "burrowgrubHiveUsed", "calzoneOfLegendEaten", "canteenUnlocked", "chaosButterflyThrown", "chatbotScriptExecuted", "chateauAvailable", "chatLiterate", "chatServesUpdates", "checkJackassHardcore", "checkJackassSoftcore", "clanAttacksEnabled", "coldAirportAlways", "considerShadowNoodles", "controlRoomUnlock", "concertVisited", "controlPanel1", "controlPanel2", "controlPanel3", "controlPanel4", "controlPanel5", "controlPanel6", "controlPanel7", "controlPanel8", "controlPanel9", "corralUnlocked", "dailyDungeonDone", "dampOldBootPurchased", "daycareOpen", "deepDishOfLegendEaten", "demonSummoned", "dinseyAudienceEngagement", "dinseyGarbagePirate", "dinseyRapidPassEnabled", "dinseyRollercoasterNext", "dinseySafetyProtocolsLoose", "doghouseBoarded", "dontStopForCounters", "drippingHallUnlocked", "drippyShieldUnlocked", "edUsedLash", "eldritchFissureAvailable", "eldritchHorrorAvailable", "essenceOfAnnoyanceAvailable", "essenceOfBearAvailable", "expressCardUsed", "falloutShelterChronoUsed", "falloutShelterCoolingTankUsed", "fireExtinguisherBatHoleUsed", "fireExtinguisherChasmUsed", "fireExtinguisherCyrptUsed", "fireExtinguisherDesertUsed", "fireExtinguisherHaremUsed", "fistTeachingsHaikuDungeon", "fistTeachingsPokerRoom", "fistTeachingsBarroomBrawl", "fistTeachingsConservatory", "fistTeachingsBatHole", "fistTeachingsFunHouse", "fistTeachingsMenagerie", "fistTeachingsSlums", "fistTeachingsFratHouse", "fistTeachingsRoad", "fistTeachingsNinjaSnowmen", "flickeringPixel1", "flickeringPixel2", "flickeringPixel3", "flickeringPixel4", "flickeringPixel5", "flickeringPixel6", "flickeringPixel7", "flickeringPixel8", "frAlways", "frCemetaryUnlocked", "friarsBlessingReceived", "frMountainsUnlocked", "frSwampUnlocked", "frVillageUnlocked", "frWoodUnlocked", "getawayCampsiteUnlocked", "ghostPencil1", "ghostPencil2", "ghostPencil3", "ghostPencil4", "ghostPencil5", "ghostPencil6", "ghostPencil7", "ghostPencil8", "ghostPencil9", "gingerAdvanceClockUnlocked", "gingerBlackmailAccomplished", "gingerbreadCityAvailable", "gingerExtraAdventures", "gingerNegativesDropped", "gingerSewersUnlocked", "gingerSubwayLineUnlocked", "gingerRetailUnlocked", "glitchItemAvailable", "grabCloversHardcore", "grabCloversSoftcore", "guideToSafariAvailable", "guyMadeOfBeesDefeated", "hallowienerDefiledNook", "hallowienerGuanoJunction", "hallowienerKnollGym", "hallowienerMadnessBakery", "hallowienerMiddleChamber", "hallowienerOvergrownLot", "hallowienerSkeletonStore", "hallowienerSmutOrcs", "hallowienerSonofaBeach", "hallowienerVolcoino", "hardcorePVPWarning", "harvestBatteriesHardcore", "harvestBatteriesSoftcore", "hasAutumnaton", "hasBartender", "hasChef", "hasCocktailKit", "hasCosmicBowlingBall", "hasDetectiveSchool", "hasMaydayContract", "hasOven", "hasRange", "hasShaker", "hasSushiMat", "haveBoxingDaydreamHardcore", "haveBoxingDaydreamSoftcore", "hermitHax0red", "holidayHalsBookAvailable", "horseryAvailable", "hotAirportAlways", "implementGlitchItem", "intenseCurrents", "itemBoughtPerAscension637", "itemBoughtPerAscension8266", "itemBoughtPerAscension10790", "itemBoughtPerAscension10794", "itemBoughtPerAscension10795", "itemBoughtPerCharacter6423", "itemBoughtPerCharacter6428", "itemBoughtPerCharacter6429", "kingLiberated", "lastPirateInsult1", "lastPirateInsult2", "lastPirateInsult3", "lastPirateInsult4", "lastPirateInsult5", "lastPirateInsult6", "lastPirateInsult7", "lastPirateInsult8", "lawOfAveragesAvailable", "leafletCompleted", "libraryCardUsed", "lockPicked", "logBastilleBattalionBattles", "loginRecoveryHardcore", "loginRecoverySoftcore", "lovebugsUnlocked", "loveTunnelAvailable", "lowerChamberUnlock", "madnessBakeryAvailable", "makePocketWishesHardcore", "makePocketWishesSoftcore", "manualOfNumberologyAvailable", "mappingMonsters", "mapToAnemoneMinePurchased", "mapToKokomoAvailable", "mapToMadnessReefPurchased", "mapToTheDiveBarPurchased", "mapToTheMarinaraTrenchPurchased", "mapToTheSkateParkPurchased", "maraisBeaverUnlock", "maraisCorpseUnlock", "maraisDarkUnlock", "maraisVillageUnlock", "maraisWildlifeUnlock", "maraisWizardUnlock", "maximizerAlwaysCurrent", "maximizerCreateOnHand", "maximizerCurrentMallPrices", "maximizerFoldables", "maximizerIncludeAll", "maximizerNoAdventures", "middleChamberUnlock", "milkOfMagnesiumActive", "moonTuned", "neverendingPartyAlways", "oasisAvailable", "odeBuffbotCheck", "oilPeakLit", "oscusSodaUsed", "outrageousSombreroUsed", "overgrownLotAvailable", "ownsSpeakeasy", "pathedSummonsHardcore", "pathedSummonsSoftcore", "pizzaOfLegendEaten", "popularTartUnlocked", "potatoAlarmClockUsed", "prAlways", "prayedForGlamour", "prayedForProtection", "prayedForVigor", "primaryLabCheerCoreGrabbed", "pyramidBombUsed", "ROMOfOptimalityAvailable", "rageGlandVented", "readManualHardcore", "readManualSoftcore", "relayShowSpoilers", "relayShowWarnings", "rememberDesktopSize", "restUsingChateau", "restUsingCampAwayTent", "requireBoxServants", "requireSewerTestItems", "safePickpocket", "schoolOfHardKnocksDiplomaAvailable", "scriptCascadingMenus", "serverAddsCustomCombat", "SHAWARMAInitiativeUnlocked", "showForbiddenStores", "showGainsPerUnit", "showIgnoringStorePrices", "showNoSummonOnly", "showTurnFreeOnly", "skeletonStoreAvailable", "sleazeAirportAlways", "snojoAvailable", "sortByEffect", "sortByRoom", "spacegateAlways", "spacegateVaccine1", "spacegateVaccine2", "spacegateVaccine3", "spaceInvaderDefeated", "spelunkyHints", "spiceMelangeUsed", "spookyAirportAlways", "stenchAirportAlways", "stopForFixedWanderer", "stopForUltraRare", "styxPixieVisited", "superconductorDefeated", "suppressInappropriateNags", "suppressPowerPixellation", "suppressMallPriceCacheMessages", "telegraphOfficeAvailable", "telescopeLookedHigh", "timeTowerAvailable", "trackLightsOut", "uneffectWithHotTub", "universalSeasoningActive", "universalSeasoningAvailable", "useBookOfEverySkillHardcore", "useBookOfEverySkillSoftcore", "useCrimboToysHardcore", "useCrimboToysSoftcore", "verboseMaximizer", "visitLoungeHardcore", "visitLoungeSoftcore", "visitRumpusHardcore", "visitRumpusSoftcore", "voteAlways", "wildfireBarrelCaulked", "wildfireDusted", "wildfireFracked", "wildfirePumpGreased", "wildfireSprinkled", "yearbookCameraPending", "youRobotScavenged", "_affirmationCookieEaten", "_affirmationHateUsed", "_airFryerUsed", "_akgyxothUsed", "_alienAnimalMilkUsed", "_alienPlantPodUsed", "_allYearSucker", "_aprilShower", "_armyToddlerCast", "_authorsInkUsed", "_baconMachineUsed", "_bagOfCandy", "_bagOfCandyUsed", "_bagOTricksUsed", "_ballastTurtleUsed", "_ballInACupUsed", "_ballpit", "_barrelPrayer", "_bastilleLastBattleWon", "_beachCombing", "_bendHellUsed", "_blankoutUsed", "_bonersSummoned", "_bookOfEverySkillUsed", "_borrowedTimeUsed", "_bowleggedSwaggerUsed", "_bowlFullOfJellyUsed", "_boxOfHammersUsed", "_brainPreservationFluidUsed", "_brassDreadFlaskUsed", "_cameraUsed", "_canSeekBirds", "_carboLoaded", "_cargoPocketEmptied", "_ceciHatUsed", "_chateauDeskHarvested", "_chateauMonsterFought", "_chibiChanged", "_chronerCrossUsed", "_chronerTriggerUsed", "_chubbyAndPlumpUsed", "_circleDrumUsed", "_clanFortuneBuffUsed", "_claraBellUsed", "_coalPaperweightUsed", "_cocoaDispenserUsed", "_cocktailShakerUsed", "_coldAirportToday", "_coldOne", "_communismUsed", "_confusingLEDClockUsed", "_controlPanelUsed", "_cookbookbatRecipeDrops", "_corruptedStardustUsed", "_cosmicSixPackConjured", "_crappyCameraUsed", "_creepyVoodooDollUsed", "_crimboTraining", "_crimboTree", "_cursedKegUsed", "_cursedMicrowaveUsed", "_dailyDungeonMalwareUsed", "_darkChocolateHeart", "_daycareFights", "_daycareNap", "_daycareSpa", "_daycareToday", "_defectiveTokenChecked", "_defectiveTokenUsed", "_dinseyGarbageDisposed", "_discoKnife", "_distentionPillUsed", "_dnaHybrid", "_docClocksThymeCocktailDrunk", "_drippingHallDoor1", "_drippingHallDoor2", "_drippingHallDoor3", "_drippingHallDoor4", "_drippyCaviarUsed", "_drippyNuggetUsed", "_drippyPilsnerUsed", "_drippyPlumUsed", "_drippyWineUsed", "_eldritchHorrorEvoked", "_eldritchTentacleFought", "_entauntaunedToday", "_envyfishEggUsed", "_essentialTofuUsed", "_etchedHourglassUsed", "_eternalCarBatteryUsed", "_everfullGlassUsed", "_eyeAndATwistUsed", "_fancyChessSetUsed", "_falloutShelterSpaUsed", "_fancyHotDogEaten", "_farmerItemsCollected", "_favoriteBirdVisited", "_firedJokestersGun", "_fireExtinguisherRefilled", "_fireStartingKitUsed", "_fireworksShop", "_fireworksShopHatBought", "_fireworksShopEquipmentBought", "_fireworkUsed", "_fishyPipeUsed", "_floundryItemCreated", "_floundryItemUsed", "_freePillKeeperUsed", "_frToday", "_fudgeSporkUsed", "_garbageItemChanged", "_gingerBiggerAlligators", "_gingerbreadCityToday", "_gingerbreadClockAdvanced", "_gingerbreadClockVisited", "_gingerbreadColumnDestroyed", "_gingerbreadMobHitUsed", "_glennGoldenDiceUsed", "_glitchItemImplemented", "_gnollEyeUsed", "_governmentPerDiemUsed", "_grimBuff", "_guildManualUsed", "_guzzlrQuestAbandoned", "_hardKnocksDiplomaUsed", "_hippyMeatCollected", "_hobbyHorseUsed", "_holidayFunUsed", "_holoWristCrystal", "_hotAirportToday", "_hungerSauceUsed", "_hyperinflatedSealLungUsed", "_iceHotelRoomsRaided", "_iceSculptureUsed", "_incredibleSelfEsteemCast", "_infernoDiscoVisited", "_internetDailyDungeonMalwareBought", "_internetGallonOfMilkBought", "_internetPlusOneBought", "_internetPrintScreenButtonBought", "_internetViralVideoBought", "_interviewIsabella", "_interviewMasquerade", "_interviewVlad", "_inquisitorsUnidentifiableObjectUsed", "_ironicMoustache", "_jackassPlumberGame", "_jarlsCheeseSummoned", "_jarlsCreamSummoned", "_jarlsDoughSummoned", "_jarlsEggsSummoned", "_jarlsFruitSummoned", "_jarlsMeatSummoned", "_jarlsPotatoSummoned", "_jarlsVeggiesSummoned", "_jingleBellUsed", "_jukebox", "_kgbFlywheelCharged", "_kgbLeftDrawerUsed", "_kgbOpened", "_kgbRightDrawerUsed", "_kolConSixPackUsed", "_kolhsCutButNotDried", "_kolhsIsskayLikeAnAshtray", "_kolhsPoeticallyLicenced", "_kolhsSchoolSpirited", "_kudzuSaladEaten", "_lastCombatWon", "_latteBanishUsed", "_latteCopyUsed", "_latteDrinkUsed", "_legendaryBeat", "_licenseToChillUsed", "_lodestoneUsed", "_lookingGlass", "_loveTunnelToday", "_loveTunnelUsed", "_luckyGoldRingVolcoino", "_lunchBreak", "_lupineHormonesUsed", "_lyleFavored", "_madLiquorDrunk", "_madTeaParty", "_mafiaMiddleFingerRingUsed", "_managerialManipulationUsed", "_mansquitoSerumUsed", "_maydayDropped", "_mayoDeviceRented", "_mayoTankSoaked", "_meatballMachineUsed", "_meatifyMatterUsed", "_milkOfMagnesiumUsed", "_mimeArmyShotglassUsed", "_missGravesVermouthDrunk", "_missileLauncherUsed", "_molehillMountainUsed", "_momFoodReceived", "_mrBurnsgerEaten", "_muffinOrderedToday", "_mushroomGardenVisited", "_neverendingPartyToday", "_newYouQuestCompleted", "_olympicSwimmingPool", "_olympicSwimmingPoolItemFound", "_overflowingGiftBasketUsed", "_partyHard", "_pastaAdditive", "_perfectFreezeUsed", "_perfectlyFairCoinUsed", "_petePartyThrown", "_peteRiotIncited", "_photocopyUsed", "_pickyTweezersUsed", "_pingPongGame", "_pirateBellowUsed", "_pirateForkUsed", "_pixelOrbUsed", "_plumbersMushroomStewEaten", "_pneumaticityPotionUsed", "_portableSteamUnitUsed", "_pottedTeaTreeUsed", "_prToday", "_psychoJarFilled", "_psychoJarUsed", "_psychokineticHugUsed", "_rainStickUsed", "_redwoodRainStickUsed", "_requestSandwichSucceeded", "_rhinestonesAcquired", "_seaJellyHarvested", "_setOfJacksUsed", "_sewingKitUsed", "_sexChanged", "_shadowAffinityToday", "_shadowForestLooted", "_shrubDecorated", "_silverDreadFlaskUsed", "_sitCourseCompleted", "_skateBuff1", "_skateBuff2", "_skateBuff3", "_skateBuff4", "_skateBuff5", "_sleazeAirportToday", "_sobrieTeaUsed", "_softwareGlitchTurnReceived", "_spacegateMurderbot", "_spacegateRuins", "_spacegateSpant", "_spacegateToday", "_spacegateVaccine", "_spaghettiBreakfast", "_spaghettiBreakfastEaten", "_spinmasterLatheVisited", "_spinningWheel", "_spookyAirportToday", "_stabonicScrollUsed", "_steelyEyedSquintUsed", "_stenchAirportToday", "_stinkyCheeseBanisherUsed", "_strangeStalagmiteUsed", "_streamsCrossed", "_stuffedPocketwatchUsed", "_styxSprayUsed", "_summonAnnoyanceUsed", "_summonCarrotUsed", "_summonResortPassUsed", "_sweetToothUsed", "_syntheticDogHairPillUsed", "_tacoFlierUsed", "_telegraphOfficeToday", "_templeHiddenPower", "_tempuraAirUsed", "_thesisDelivered", "_timeSpinnerReplicatorUsed", "_toastSummoned", "_tonicDjinn", "_treasuryEliteMeatCollected", "_treasuryHaremMeatCollected", "_trivialAvocationsGame", "_tryptophanDartUsed", "_turtlePowerCast", "_twelveNightEnergyUsed", "_ultraMegaSourBallUsed", "_victorSpoilsUsed", "_villainLairCanLidUsed", "_villainLairColorChoiceUsed", "_villainLairDoorChoiceUsed", "_villainLairFirecrackerUsed", "_villainLairSymbologyChoiceUsed", "_villainLairWebUsed", "_vmaskBanisherUsed", "_voraciTeaUsed", "_volcanoItemRedeemed", "_volcanoSuperduperheatedMetal", "_voteToday", "_VYKEACafeteriaRaided", "_VYKEALoungeRaided", "_walfordQuestStartedToday", "_warbearBankUsed", "_warbearBreakfastMachineUsed", "_warbearGyrocopterUsed", "_warbearSodaMachineUsed", "_wildfireBarrelHarvested", "_witchessBuff", "_workshedItemUsed", "_zombieClover", "_preventScurvy", "lockedItem4637", "lockedItem4638", "lockedItem4639", "lockedItem4646", "lockedItem4647", "unknownRecipe3542", "unknownRecipe3543", "unknownRecipe3544", "unknownRecipe3545", "unknownRecipe3546", "unknownRecipe3547", "unknownRecipe3548", "unknownRecipe3749", "unknownRecipe3751", "unknownRecipe4172", "unknownRecipe4173", "unknownRecipe4174", "unknownRecipe5060", "unknownRecipe5061", "unknownRecipe5062", "unknownRecipe5063", "unknownRecipe5064", "unknownRecipe5066", "unknownRecipe5067", "unknownRecipe5069", "unknownRecipe5070", "unknownRecipe5072", "unknownRecipe5073", "unknownRecipe5670", "unknownRecipe5671", "unknownRecipe6501", "unknownRecipe6564", "unknownRecipe6565", "unknownRecipe6566", "unknownRecipe6567", "unknownRecipe6568", "unknownRecipe6569", "unknownRecipe6570", "unknownRecipe6571", "unknownRecipe6572", "unknownRecipe6573", "unknownRecipe6574", "unknownRecipe6575", "unknownRecipe6576", "unknownRecipe6577", "unknownRecipe6578", "unknownRecipe7752", "unknownRecipe7753", "unknownRecipe7754", "unknownRecipe7755", "unknownRecipe7756", "unknownRecipe7757", "unknownRecipe7758", "unknownRecipe10970", "unknownRecipe10971", "unknownRecipe10972", "unknownRecipe10973", "unknownRecipe10974", "unknownRecipe10975", "unknownRecipe10976", "unknownRecipe10977", "unknownRecipe10978", "unknownRecipe10988", "unknownRecipe10989", "unknownRecipe10990", "unknownRecipe10991", "unknownRecipe10992", "unknownRecipe11000"];
var numericProperties = ["coinMasterIndex", "dailyDeedsVersion", "defaultDropdown1", "defaultDropdown2", "defaultDropdownSplit", "defaultLimit", "fixedThreadPoolSize", "itemManagerIndex", "lastBuffRequestType", "lastGlobalCounterDay", "lastImageCacheClear", "previousUpdateRevision", "relayDelayForSVN", "relaySkillButtonCount", "scriptButtonPosition", "statusDropdown", "svnThreadPoolSize", "toolbarPosition", "_g9Effect", "8BitBonusTurns", "8BitScore", "addingScrolls", "affirmationCookiesEaten", "aminoAcidsUsed", "antagonisticSnowmanKitCost", "ascensionsToday", "asolDeferredPoints", "asolPointsPigSkinner", "asolPointsCheeseWizard", "asolPointsJazzAgent", "autoAbortThreshold", "autoAntidote", "autoBuyPriceLimit", "autumnatonQuestTurn", "availableCandyCredits", "availableDimes", "availableFunPoints", "availableQuarters", "availableStoreCredits", "availableSwagger", "averageSwagger", "awolMedicine", "awolPointsBeanslinger", "awolPointsCowpuncher", "awolPointsSnakeoiler", "awolDeferredPointsBeanslinger", "awolDeferredPointsCowpuncher", "awolDeferredPointsSnakeoiler", "awolVenom", "bagOTricksCharges", "ballpitBonus", "bankedKarma", "bartenderTurnsUsed", "basementMallPrices", "basementSafetyMargin", "batmanFundsAvailable", "batmanBonusInitialFunds", "batmanTimeLeft", "bearSwagger", "beeCounter", "beGregariousCharges", "beGregariousFightsLeft", "birdformCold", "birdformHot", "birdformRoc", "birdformSleaze", "birdformSpooky", "birdformStench", "blackBartsBootyCost", "blackPuddingsDefeated", "blackForestProgress", "blankOutUsed", "bloodweiserDrunk", "bondPoints", "bondVillainsDefeated", "boneAbacusVictories", "booPeakProgress", "borisPoints", "breakableHandling", "breakableHandling1964", "breakableHandling9691", "breakableHandling9692", "breakableHandling9699", "breathitinCharges", "brodenBacteria", "brodenSprinkles", "buffBotMessageDisposal", "buffBotPhilanthropyType", "buffJimmyIngredients", "burnoutsDefeated", "burrowgrubSummonsRemaining", "camelSpit", "camerasUsed", "campAwayDecoration", "candyWitchTurnsUsed", "candyWitchCandyTotal", "carboLoading", "catBurglarBankHeists", "cellarLayout", "charitableDonations", "chasmBridgeProgress", "chefTurnsUsed", "chessboardsCleared", "chibiAlignment", "chibiBirthday", "chibiFitness", "chibiIntelligence", "chibiLastVisit", "chibiSocialization", "chilledToTheBone", "cinchoSaltAndLime", "cinderellaMinutesToMidnight", "cinderellaScore", "cocktailSummons", "commerceGhostCombats", "controlPanelOmega", "cornucopiasOpened", "cosmicBowlingBallReturnCombats", "cozyCounter6332", "cozyCounter6333", "cozyCounter6334", "craftingClay", "craftingLeather", "craftingStraw", "crimbo16BeardChakraCleanliness", "crimbo16BootsChakraCleanliness", "crimbo16BungChakraCleanliness", "crimbo16CrimboHatChakraCleanliness", "crimbo16GutsChakraCleanliness", "crimbo16HatChakraCleanliness", "crimbo16JellyChakraCleanliness", "crimbo16LiverChakraCleanliness", "crimbo16NippleChakraCleanliness", "crimbo16NoseChakraCleanliness", "crimbo16ReindeerChakraCleanliness", "crimbo16SackChakraCleanliness", "crimboTrainingSkill", "crimboTreeDays", "cubelingProgress", "currentExtremity", "currentHedgeMazeRoom", "currentMojoFilters", "currentNunneryMeat", "currentPortalEnergy", "cursedMagnifyingGlassCount", "cyrptAlcoveEvilness", "cyrptCrannyEvilness", "cyrptNicheEvilness", "cyrptNookEvilness", "cyrptTotalEvilness", "darkGyfftePoints", "daycareEquipment", "daycareInstructors", "daycareLastScavenge", "daycareToddlers", "dbNemesisSkill1", "dbNemesisSkill2", "dbNemesisSkill3", "desertExploration", "desktopHeight", "desktopWidth", "dinseyFilthLevel", "dinseyFunProgress", "dinseyNastyBearsDefeated", "dinseySocialJusticeIProgress", "dinseySocialJusticeIIProgress", "dinseyTouristsFed", "dinseyToxicMultiplier", "doctorBagQuestLights", "doctorBagUpgrades", "dreadScroll1", "dreadScroll2", "dreadScroll3", "dreadScroll4", "dreadScroll5", "dreadScroll6", "dreadScroll7", "dreadScroll8", "dripAdventuresSinceAscension", "drippingHallAdventuresSinceAscension", "drippingTreesAdventuresSinceAscension", "drippyBatsUnlocked", "drippyJuice", "drippyOrbsClaimed", "drunkenSwagger", "edDefeatAbort", "edPoints", "eldritchTentaclesFought", "electricKoolAidEaten", "elfGratitude", "encountersUntilDMTChoice", "encountersUntilNEPChoice", "encountersUntilSRChoice", "ensorceleeLevel", "entauntaunedColdRes", "essenceOfAnnoyanceCost", "essenceOfBearCost", "extraRolloverAdventures", "falloutShelterLevel", "familiarSweat", "fingernailsClipped", "fistSkillsKnown", "flyeredML", "fossilB", "fossilD", "fossilN", "fossilP", "fossilS", "fossilW", "fratboysDefeated", "frenchGuardTurtlesFreed", "funGuyMansionKills", "garbageChampagneCharge", "garbageFireProgress", "garbageShirtCharge", "garbageTreeCharge", "garlandUpgrades", "getsYouDrunkTurnsLeft", "ghostPepperTurnsLeft", "gingerDigCount", "gingerLawChoice", "gingerMuscleChoice", "gingerTrainScheduleStudies", "gladiatorBallMovesKnown", "gladiatorBladeMovesKnown", "gladiatorNetMovesKnown", "glitchItemCost", "glitchItemImplementationCount", "glitchItemImplementationLevel", "glitchSwagger", "gloverPoints", "gnasirProgress", "goldenMrAccessories", "gongPath", "gooseDronesRemaining", "goreCollected", "gourdItemCount", "greyYouPoints", "grimoire1Summons", "grimoire2Summons", "grimoire3Summons", "grimstoneCharge", "guardTurtlesFreed", "guideToSafariCost", "guyMadeOfBeesCount", "guzzlrBronzeDeliveries", "guzzlrDeliveryProgress", "guzzlrGoldDeliveries", "guzzlrPlatinumDeliveries", "haciendaLayout", "hallowiener8BitRealm", "hallowienerCoinspiracy", "hareMillisecondsSaved", "hareTurnsUsed", "heavyRainsStartingThunder", "heavyRainsStartingRain", "heavyRainsStartingLightning", "heroDonationBoris", "heroDonationJarlsberg", "heroDonationSneakyPete", "hiddenApartmentProgress", "hiddenBowlingAlleyProgress", "hiddenHospitalProgress", "hiddenOfficeProgress", "hiddenTavernUnlock", "highTopPumped", "hippiesDefeated", "holidayHalsBookCost", "holidaySwagger", "homemadeRobotUpgrades", "homebodylCharges", "hpAutoRecovery", "hpAutoRecoveryTarget", "iceSwagger", "jarlsbergPoints", "jungCharge", "junglePuns", "knownAscensions", "kolhsTotalSchoolSpirited", "lastAnticheeseDay", "lastArcadeAscension", "lastBadMoonReset", "lastBangPotionReset", "lastBattlefieldReset", "lastBeardBuff", "lastBreakfast", "lastCartographyBooPeak", "lastCartographyCastleTop", "lastCartographyDarkNeck", "lastCartographyDefiledNook", "lastCartographyFratHouse", "lastCartographyFratHouseVerge", "lastCartographyGuanoJunction", "lastCartographyHauntedBilliards", "lastCartographyHippyCampVerge", "lastCartographyZeppelinProtesters", "lastCastleGroundUnlock", "lastCastleTopUnlock", "lastCellarReset", "lastChanceThreshold", "lastChasmReset", "lastColosseumRoundWon", "lastCouncilVisit", "lastCounterDay", "lastDesertUnlock", "lastDispensaryOpen", "lastDMTDuplication", "lastDwarfFactoryReset", "lastEVHelmetValue", "lastEVHelmetReset", "lastEmptiedStorage", "lastFilthClearance", "lastGoofballBuy", "lastGuildStoreOpen", "lastGuyMadeOfBeesReset", "lastFratboyCall", "lastFriarCeremonyAscension", "lastFriarElbowNC", "lastFriarHeartNC", "lastFriarNeckNC", "lastHippyCall", "lastIslandUnlock", "lastKeyotronUse", "lastKingLiberation", "lastLightsOutTurn", "lastMushroomPlot", "lastMiningReset", "lastNemesisReset", "lastPaperStripReset", "lastPirateEphemeraReset", "lastPirateInsultReset", "lastPlusSignUnlock", "lastQuartetAscension", "lastQuartetRequest", "lastSecondFloorUnlock", "lastShadowForgeUnlockAdventure", "lastSkateParkReset", "lastStillBeatingSpleen", "lastTavernAscension", "lastTavernSquare", "lastTelescopeReset", "lastTempleAdventures", "lastTempleButtonsUnlock", "lastTempleUnlock", "lastThingWithNoNameDefeated", "lastTowelAscension", "lastTr4pz0rQuest", "lastTrainsetConfiguration", "lastVioletFogMap", "lastVoteMonsterTurn", "lastWartDinseyDefeated", "lastWuTangDefeated", "lastYearbookCameraAscension", "lastZapperWand", "lastZapperWandExplosionDay", "lawOfAveragesCost", "legacyPoints", "libramSummons", "lightsOutAutomation", "louvreDesiredGoal", "louvreGoal", "lovebugsAridDesert", "lovebugsBeachBuck", "lovebugsBooze", "lovebugsChroner", "lovebugsCoinspiracy", "lovebugsCyrpt", "lovebugsFreddy", "lovebugsFunFunds", "lovebugsHoboNickel", "lovebugsItemDrop", "lovebugsMeat", "lovebugsMeatDrop", "lovebugsMoxie", "lovebugsMuscle", "lovebugsMysticality", "lovebugsOilPeak", "lovebugsOrcChasm", "lovebugsPowder", "lovebugsWalmart", "lttQuestDifficulty", "lttQuestStageCount", "manaBurnSummonThreshold", "manaBurningThreshold", "manaBurningTrigger", "manorDrawerCount", "manualOfNumberologyCost", "mapToKokomoCost", "masksUnlocked", "maximizerMRUSize", "maximizerCombinationLimit", "maximizerEquipmentLevel", "maximizerEquipmentScope", "maximizerMaxPrice", "maximizerPriceLevel", "maxManaBurn", "mayflyExperience", "mayoLevel", "meansuckerPrice", "merkinVocabularyMastery", "miniAdvClass", "miniMartinisDrunk", "moleTunnelLevel", "mothershipProgress", "mpAutoRecovery", "mpAutoRecoveryTarget", "munchiesPillsUsed", "mushroomGardenCropLevel", "nextParanormalActivity", "nextQuantumFamiliarOwnerId", "nextQuantumFamiliarTurn", "noobPoints", "noobDeferredPoints", "noodleSummons", "nsContestants1", "nsContestants2", "nsContestants3", "nuclearAutumnPoints", "numericSwagger", "nunsVisits", "oilPeakProgress", "optimalSwagger", "optimisticCandleProgress", "palindomeDudesDefeated", "parasolUsed", "pendingMapReflections", "pingpongSkill", "pirateSwagger", "plantingDay", "plumberBadgeCost", "plumberCostumeCost", "plumberPoints", "poolSharkCount", "poolSkill", "primaryLabGooIntensity", "prismaticSummons", "procrastinatorLanguageFluency", "promptAboutCrafting", "puzzleChampBonus", "pyramidPosition", "rockinRobinProgress", "ROMOfOptimalityCost", "quantumPoints", "reagentSummons", "reanimatorArms", "reanimatorLegs", "reanimatorSkulls", "reanimatorWeirdParts", "reanimatorWings", "recentLocations", "redSnapperProgress", "relayPort", "relocatePygmyJanitor", "relocatePygmyLawyer", "rumpelstiltskinTurnsUsed", "rumpelstiltskinKidsRescued", "safariSwagger", "sausageGrinderUnits", "schoolOfHardKnocksDiplomaCost", "schoolSwagger", "scrapbookCharges", "scriptMRULength", "seaodesFound", "SeasoningSwagger", "sexChanges", "shenInitiationDay", "shockingLickCharges", "singleFamiliarRun", "skillBurn3", "skillBurn90", "skillBurn153", "skillBurn154", "skillBurn155", "skillBurn1019", "skillBurn5017", "skillBurn6014", "skillBurn6015", "skillBurn6016", "skillBurn6020", "skillBurn6021", "skillBurn6022", "skillBurn6023", "skillBurn6024", "skillBurn6026", "skillBurn6028", "skillBurn7323", "skillBurn14008", "skillBurn14028", "skillBurn14038", "skillBurn15011", "skillBurn15028", "skillBurn17005", "skillBurn22034", "skillBurn22035", "skillBurn23301", "skillBurn23302", "skillBurn23303", "skillBurn23304", "skillBurn23305", "skillBurn23306", "skillLevel46", "skillLevel47", "skillLevel48", "skillLevel117", "skillLevel118", "skillLevel121", "skillLevel128", "skillLevel134", "skillLevel144", "skillLevel180", "skillLevel188", "skillLevel7254", "slimelingFullness", "slimelingStacksDropped", "slimelingStacksDue", "smoresEaten", "smutOrcNoncombatProgress", "sneakyPetePoints", "snojoMoxieWins", "snojoMuscleWins", "snojoMysticalityWins", "sourceAgentsDefeated", "sourceEnlightenment", "sourceInterval", "sourcePoints", "sourceTerminalGram", "sourceTerminalPram", "sourceTerminalSpam", "spaceBabyLanguageFluency", "spacePirateLanguageFluency", "spelunkyNextNoncombat", "spelunkySacrifices", "spelunkyWinCount", "spookyPuttyCopiesMade", "statbotUses", "sugarCounter4178", "sugarCounter4179", "sugarCounter4180", "sugarCounter4181", "sugarCounter4182", "sugarCounter4183", "sugarCounter4191", "summonAnnoyanceCost", "sweat", "tacoDanCocktailSauce", "tacoDanFishMeat", "tavernLayout", "telescopeUpgrades", "tempuraSummons", "timeSpinnerMedals", "timesRested", "tomeSummons", "totalCharitableDonations", "trainsetPosition", "turtleBlessingTurns", "twinPeakProgress", "twoCRSPoints", "unicornHornInflation", "universalSeasoningCost", "usable1HWeapons", "usable1xAccs", "usable2HWeapons", "usable3HWeapons", "usableAccessories", "usableHats", "usableOffhands", "usableOther", "usablePants", "usableShirts", "valueOfAdventure", "valueOfInventory", "valueOfStill", "valueOfTome", "vintnerCharge", "vintnerWineLevel", "violetFogGoal", "walfordBucketProgress", "warehouseProgress", "welcomeBackAdv", "whetstonesUsed", "wolfPigsEvicted", "wolfTurnsUsed", "writingDesksDefeated", "xoSkeleltonXProgress", "xoSkeleltonOProgress", "yearbookCameraAscensions", "yearbookCameraUpgrades", "youRobotBody", "youRobotBottom", "youRobotLeft", "youRobotPoints", "youRobotRight", "youRobotTop", "zeppelinProtestors", "zigguratLianas", "zombiePoints", "_absintheDrops", "_abstractionDropsCrown", "_aguaDrops", "_xenomorphCharge", "_ancestralRecallCasts", "_antihangoverBonus", "_astralDrops", "_autumnatonQuests", "_backUpUses", "_badlyRomanticArrows", "_badgerCharge", "_balefulHowlUses", "_banderRunaways", "_bastilleCheese", "_bastilleGames", "_bastilleGameTurn", "_bastilleLastCheese", "_beanCannonUses", "_bearHugs", "_beerLensDrops", "_bellydancerPickpockets", "_benettonsCasts", "_birdsSoughtToday", "_boomBoxFights", "_boomBoxSongsLeft", "_bootStomps", "_boxingGloveArrows", "_brickoEyeSummons", "_brickoFights", "_campAwayCloudBuffs", "_campAwaySmileBuffs", "_candySummons", "_captainHagnkUsed", "_carnieCandyDrops", "_carrotNoseDrops", "_catBurglarCharge", "_catBurglarHeistsComplete", "_cheerleaderSteam", "_chestXRayUsed", "_chibiAdventures", "_chipBags", "_chocolateCigarsUsed", "_chocolateCoveredPingPongBallsUsed", "_chocolateSculpturesUsed", "_chocolatesUsed", "_chronolithActivations", "_chronolithNextCost", "_cinchUsed", "_cinchoRests", "_clanFortuneConsultUses", "_clipartSummons", "_cloversPurchased", "_coldMedicineConsults", "_coldMedicineEquipmentTaken", "_companionshipCasts", "_cookbookbatCrafting", "_cosmicBowlingSkillsUsed", "_crimbo21ColdResistance", "_dailySpecialPrice", "_daycareGymScavenges", "_daycareRecruits", "_deckCardsDrawn", "_deluxeKlawSummons", "_demandSandwich", "_detectiveCasesCompleted", "_disavowed", "_dnaPotionsMade", "_donhosCasts", "_dreamJarDrops", "_drunkPygmyBanishes", "_edDefeats", "_edLashCount", "_elronsCasts", "_enamorangs", "_energyCollected", "_expertCornerCutterUsed", "_favorRareSummons", "_feastUsed", "_feelinTheRhythm", "_feelPrideUsed", "_feelExcitementUsed", "_feelHatredUsed", "_feelLonelyUsed", "_feelNervousUsed", "_feelEnvyUsed", "_feelDisappointedUsed", "_feelSuperiorUsed", "_feelLostUsed", "_feelNostalgicUsed", "_feelPeacefulUsed", "_fingertrapArrows", "_fireExtinguisherCharge", "_fragrantHerbsUsed", "_freeBeachWalksUsed", "_frButtonsPressed", "_fudgeWaspFights", "_gapBuffs", "_garbageFireDrops", "_garbageFireDropsCrown", "_genieFightsUsed", "_genieWishesUsed", "_gibbererAdv", "_gibbererCharge", "_gingerbreadCityTurns", "_glarkCableUses", "_glitchMonsterFights", "_gnomeAdv", "_godLobsterFights", "_goldenMoneyCharge", "_gongDrops", "_gothKidCharge", "_gothKidFights", "_greyYouAdventures", "_grimBrotherCharge", "_grimFairyTaleDrops", "_grimFairyTaleDropsCrown", "_grimoireConfiscatorSummons", "_grimoireGeekySummons", "_grimstoneMaskDrops", "_grimstoneMaskDropsCrown", "_grooseCharge", "_grooseDrops", "_grubbyWoolDrops", "_guzzlrDeliveries", "_guzzlrGoldDeliveries", "_guzzlrPlatinumDeliveries", "_hareAdv", "_hareCharge", "_highTopPumps", "_hipsterAdv", "_hoardedCandyDropsCrown", "_hoboUnderlingSummons", "_holoWristDrops", "_holoWristProgress", "_hotAshesDrops", "_hotJellyUses", "_hotTubSoaks", "_humanMuskUses", "_iceballUses", "_inigosCasts", "_jerksHealthMagazinesUsed", "_jiggleCheese", "_jiggleCream", "_jiggleLife", "_jiggleSteak", "_jitbCharge", "_juneCleaverFightsLeft", "_juneCleaverEncounters", "_juneCleaverStench", "_juneCleaverSpooky", "_juneCleaverSleaze", "_juneCleaverHot", "_juneCleaverCold", "_juneCleaverSkips", "_jungDrops", "_kgbClicksUsed", "_kgbDispenserUses", "_kgbTranquilizerDartUses", "_klawSummons", "_kloopCharge", "_kloopDrops", "_kolhsAdventures", "_kolhsSavedByTheBell", "_lastDailyDungeonRoom", "_lastSausageMonsterTurn", "_lastZomboEye", "_latteRefillsUsed", "_leafblowerML", "_legionJackhammerCrafting", "_llamaCharge", "_longConUsed", "_lovebugsBeachBuck", "_lovebugsChroner", "_lovebugsCoinspiracy", "_lovebugsFreddy", "_lovebugsFunFunds", "_lovebugsHoboNickel", "_lovebugsWalmart", "_loveChocolatesUsed", "_lynyrdSnareUses", "_machineTunnelsAdv", "_macrometeoriteUses", "_mafiaThumbRingAdvs", "_mayflowerDrops", "_mayflySummons", "_mediumSiphons", "_meteoriteAdesUsed", "_meteorShowerUses", "_micrometeoriteUses", "_miniMartiniDrops", "_monkeyPawWishesUsed", "_monstersMapped", "_mushroomGardenFights", "_nanorhinoCharge", "_navelRunaways", "_neverendingPartyFreeTurns", "_newYouQuestSharpensDone", "_newYouQuestSharpensToDo", "_nextColdMedicineConsult", "_nextQuantumAlignment", "_nightmareFuelCharges", "_noobSkillCount", "_nuclearStockpileUsed", "_oilExtracted", "_olfactionsUsed", "_optimisticCandleDropsCrown", "_oreDropsCrown", "_otoscopeUsed", "_oysterEggsFound", "_pantsgivingBanish", "_pantsgivingCount", "_pantsgivingCrumbs", "_pantsgivingFullness", "_pasteDrops", "_peteJukeboxFixed", "_peteJumpedShark", "_petePeeledOut", "_pieDrops", "_piePartsCount", "_pixieCharge", "_pocketProfessorLectures", "_poisonArrows", "_pokeGrowFertilizerDrops", "_poolGames", "_powderedGoldDrops", "_powderedMadnessUses", "_powerfulGloveBatteryPowerUsed", "_powerPillDrops", "_powerPillUses", "_precisionCasts", "_radlibSummons", "_raindohCopiesMade", "_rapidPrototypingUsed", "_raveStealCount", "_reflexHammerUsed", "_resolutionAdv", "_resolutionRareSummons", "_riftletAdv", "_robinEggDrops", "_roboDrops", "_rogueProgramCharge", "_romanticFightsLeft", "_saberForceMonsterCount", "_saberForceUses", "_saberMod", "_saltGrainsConsumed", "_sandwormCharge", "_saplingsPlanted", "_sausageFights", "_sausagesEaten", "_sausagesMade", "_sealFigurineUses", "_sealScreeches", "_sealsSummoned", "_shadowBricksUsed", "_shadowRiftCombats", "_shatteringPunchUsed", "_shortOrderCookCharge", "_shrubCharge", "_sloppyDinerBeachBucks", "_smilesOfMrA", "_smithsnessSummons", "_snojoFreeFights", "_snojoParts", "_snokebombUsed", "_snowconeSummons", "_snowglobeDrops", "_snowSuitCount", "_sourceTerminalDigitizeMonsterCount", "_sourceTerminalDigitizeUses", "_sourceTerminalDuplicateUses", "_sourceTerminalEnhanceUses", "_sourceTerminalExtrudes", "_sourceTerminalPortscanUses", "_spaceFurDropsCrown", "_spacegatePlanetIndex", "_spacegateTurnsLeft", "_spaceJellyfishDrops", "_speakeasyDrinksDrunk", "_speakeasyFreeFights", "_spelunkerCharges", "_spelunkingTalesDrops", "_spikolodonSpikeUses", "_spookyJellyUses", "_stackLumpsUses", "_steamCardDrops", "_stickerSummons", "_stinkyCheeseCount", "_stressBallSqueezes", "_sugarSummons", "_sweatOutSomeBoozeUsed", "_taffyRareSummons", "_taffyYellowSummons", "_thanksgettingFoodsEaten", "_thingfinderCasts", "_thinknerdPackageDrops", "_thorsPliersCrafting", "_timeHelmetAdv", "_timeSpinnerMinutesUsed", "_tokenDrops", "_transponderDrops", "_turkeyBlastersUsed", "_turkeyBooze", "_turkeyMuscle", "_turkeyMyst", "_turkeyMoxie", "_unaccompaniedMinerUsed", "_unconsciousCollectiveCharge", "_universalSeasoningsUsed", "_universeCalculated", "_universeImploded", "_usedReplicaBatoomerang", "_vampyreCloakeFormUses", "_villainLairProgress", "_vitachocCapsulesUsed", "_vmaskAdv", "_voidFreeFights", "_volcanoItem1", "_volcanoItem2", "_volcanoItem3", "_volcanoItemCount1", "_volcanoItemCount2", "_volcanoItemCount3", "_voteFreeFights", "_VYKEACompanionLevel", "_warbearAutoAnvilCrafting", "_waxGlobDrops", "_whiteRiceDrops", "_witchessFights", "_xoHugsUsed", "_yellowPixelDropsCrown", "_zapCount", "_zombieSmashPocketsUsed"];
var monsterProperties = ["beGregariousMonster", "cameraMonster", "chateauMonster", "clumsinessGroveBoss", "crappyCameraMonster", "crudeMonster", "enamorangMonster", "envyfishMonster", "glacierOfJerksBoss", "iceSculptureMonster", "lastCopyableMonster", "longConMonster", "maelstromOfLoversBoss", "makeFriendsMonster", "merkinLockkeyMonster", "monkeyPointMonster", "motifMonster", "nosyNoseMonster", "olfactedMonster", "photocopyMonster", "rainDohMonster", "romanticTarget", "rufusDesiredEntity", "screencappedMonster", "spookyPuttyMonster", "stenchCursedMonster", "superficiallyInterestedMonster", "waxMonster", "yearbookCameraTarget", "_gallapagosMonster", "_jiggleCreamedMonster", "_latteMonster", "_nanorhinoBanishedMonster", "_newYouQuestMonster", "_relativityMonster", "_saberForceMonster", "_sourceTerminalDigitizeMonster", "_voteMonster"];
var locationProperties = ["autumnatonQuestLocation", "currentJunkyardLocation", "doctorBagQuestLocation", "ghostLocation", "guzzlrQuestLocation", "nextSpookyravenElizabethRoom", "nextSpookyravenStephenRoom", "sourceOracleTarget", "_floundryBassLocation", "_floundryCarpLocation", "_floundryCodLocation", "_floundryHatchetfishLocation", "_floundryTroutLocation", "_floundryTunaLocation", "_sotParcelLocation"];
var stringProperties = ["autoLogin", "browserBookmarks", "chatFontSize", "combatHotkey0", "combatHotkey1", "combatHotkey2", "combatHotkey3", "combatHotkey4", "combatHotkey5", "combatHotkey6", "combatHotkey7", "combatHotkey8", "combatHotkey9", "commandLineNamespace", "dailyDeedsOptions", "defaultBorderColor", "displayName", "externalEditor", "getBreakfast", "headerStates", "highlightList", "http.proxyHost", "http.proxyPassword", "http.proxyPort", "http.proxyUser", "https.proxyHost", "https.proxyPassword", "https.proxyPort", "https.proxyUser", "initialDesktop", "initialFrames", "lastRelayUpdate", "lastUserAgent", "lastUsername", "logPreferenceChangeFilter", "loginScript", "loginServerName", "loginWindowLogo", "logoutScript", "previousNotifyList", "previousUpdateVersion", "saveState", "saveStateActive", "scriptList", "swingLookAndFeel", "userAgent", "8BitColor", "afterAdventureScript", "autoOlfact", "autoPutty", "autumnatonUpgrades", "backupCameraMode", "banishedMonsters", "banishingShoutMonsters", "batmanStats", "batmanZone", "batmanUpgrades", "battleAction", "beachHeadsUnlocked", "beforePVPScript", "betweenBattleScript", "boomBoxSong", "breakfastAlways", "breakfastHardcore", "breakfastSoftcore", "buffBotCasting", "buyScript", "cargoPocketsEmptied", "cargoPocketScraps", "chatbotScript", "chatPlayerScript", "chibiName", "choiceAdventureScript", "chosenTrip", "clanFortuneReply1", "clanFortuneReply2", "clanFortuneReply3", "clanFortuneWord1", "clanFortuneWord2", "clanFortuneWord3", "commerceGhostItem", "counterScript", "copperheadClubHazard", "crimbotChassis", "crimbotArm", "crimbotPropulsion", "crystalBallPredictions", "csServicesPerformed", "currentAstralTrip", "currentDistillateMods", "currentEasyBountyItem", "currentHardBountyItem", "currentHippyStore", "currentJunkyardTool", "currentLlamaForm", "currentMood", "currentPVPSeason", "currentPvpVictories", "currentSpecialBountyItem", "currentSITSkill", "customCombatScript", "cyrusAdjectives", "defaultFlowerLossMessage", "defaultFlowerWinMessage", "demonName1", "demonName2", "demonName3", "demonName4", "demonName5", "demonName6", "demonName7", "demonName8", "demonName9", "demonName10", "demonName11", "demonName12", "demonName13", "dinseyGatorStenchDamage", "dinseyRollercoasterStats", "doctorBagQuestItem", "dolphinItem", "duckAreasCleared", "duckAreasSelected", "edPiece", "enamorangMonsterTurn", "ensorcelee", "EVEDirections", "extraCosmeticModifiers", "familiarScript", "forbiddenStores", "gameProBossSpecialPower", "gooseReprocessed", "grimoireSkillsHardcore", "grimoireSkillsSoftcore", "grimstoneMaskPath", "guzzlrQuestClient", "guzzlrQuestBooze", "guzzlrQuestTier", "harvestGardenHardcore", "harvestGardenSoftcore", "hpAutoRecoveryItems", "invalidBuffMessage", "jickSwordModifier", "juneCleaverQueue", "kingLiberatedScript", "lassoTraining", "lastAdventure", "lastBangPotion819", "lastBangPotion820", "lastBangPotion821", "lastBangPotion822", "lastBangPotion823", "lastBangPotion824", "lastBangPotion825", "lastBangPotion826", "lastBangPotion827", "lastChanceBurn", "lastChessboard", "lastCombatEnvironments", "lastDwarfDiceRolls", "lastDwarfDigitRunes", "lastDwarfEquipmentRunes", "lastDwarfFactoryItem118", "lastDwarfFactoryItem119", "lastDwarfFactoryItem120", "lastDwarfFactoryItem360", "lastDwarfFactoryItem361", "lastDwarfFactoryItem362", "lastDwarfFactoryItem363", "lastDwarfFactoryItem364", "lastDwarfFactoryItem365", "lastDwarfFactoryItem910", "lastDwarfFactoryItem3199", "lastDwarfOfficeItem3208", "lastDwarfOfficeItem3209", "lastDwarfOfficeItem3210", "lastDwarfOfficeItem3211", "lastDwarfOfficeItem3212", "lastDwarfOfficeItem3213", "lastDwarfOfficeItem3214", "lastDwarfOreRunes", "lastDwarfHopper1", "lastDwarfHopper2", "lastDwarfHopper3", "lastDwarfHopper4", "lastEncounter", "lastMacroError", "lastMessageId", "lastPaperStrip3144", "lastPaperStrip4138", "lastPaperStrip4139", "lastPaperStrip4140", "lastPaperStrip4141", "lastPaperStrip4142", "lastPaperStrip4143", "lastPaperStrip4144", "lastPirateEphemera", "lastPorkoBoard", "lastPorkoPayouts", "lastPorkoExpected", "lastSlimeVial3885", "lastSlimeVial3886", "lastSlimeVial3887", "lastSlimeVial3888", "lastSlimeVial3889", "lastSlimeVial3890", "lastSlimeVial3891", "lastSlimeVial3892", "lastSlimeVial3893", "lastSlimeVial3894", "lastSlimeVial3895", "lastSlimeVial3896", "latteIngredients", "latteModifier", "latteUnlocks", "libramSkillsHardcore", "libramSkillsSoftcore", "louvreOverride", "lovePotion", "lttQuestName", "maximizerList", "maximizerMRUList", "mayoInMouth", "mayoMinderSetting", "merkinQuestPath", "mineLayout1", "mineLayout2", "mineLayout3", "mineLayout4", "mineLayout5", "mineLayout6", "mpAutoRecoveryItems", "muffinOnOrder", "nextAdventure", "nextDistillateMods", "nextQuantumFamiliarName", "nextQuantumFamiliarOwner", "nsChallenge2", "nsChallenge3", "nsChallenge4", "nsChallenge5", "nsTowerDoorKeysUsed", "oceanAction", "oceanDestination", "parkaMode", "pastaThrall1", "pastaThrall2", "pastaThrall3", "pastaThrall4", "pastaThrall5", "pastaThrall6", "pastaThrall7", "pastaThrall8", "peteMotorbikeTires", "peteMotorbikeGasTank", "peteMotorbikeHeadlight", "peteMotorbikeCowling", "peteMotorbikeMuffler", "peteMotorbikeSeat", "pieStuffing", "plantingDate", "plantingLength", "plantingScript", "plumberCostumeWorn", "pokefamBoosts", "postAscensionScript", "preAscensionScript", "retroCapeSuperhero", "retroCapeWashingInstructions", "questClumsinessGrove", "questDoctorBag", "questECoBucket", "questESlAudit", "questESlBacteria", "questESlCheeseburger", "questESlCocktail", "questESlDebt", "questESlFish", "questESlMushStash", "questESlSalt", "questESlSprinkles", "questESpEVE", "questESpJunglePun", "questESpGore", "questESpClipper", "questESpFakeMedium", "questESpSerum", "questESpSmokes", "questESpOutOfOrder", "questEStFishTrash", "questEStGiveMeFuel", "questEStNastyBears", "questEStSocialJusticeI", "questEStSocialJusticeII", "questEStSuperLuber", "questEStWorkWithFood", "questEStZippityDooDah", "questEUNewYou", "questF01Primordial", "questF02Hyboria", "questF03Future", "questF04Elves", "questF05Clancy", "questG01Meatcar", "questG02Whitecastle", "questG03Ego", "questG04Nemesis", "questG05Dark", "questG06Delivery", "questG07Myst", "questG08Moxie", "questG09Muscle", "questGlacierOfJerks", "questGuzzlr", "questI01Scapegoat", "questI02Beat", "questL02Larva", "questL03Rat", "questL04Bat", "questL05Goblin", "questL06Friar", "questL07Cyrptic", "questL08Trapper", "questL09Topping", "questL10Garbage", "questL11MacGuffin", "questL11Black", "questL11Business", "questL11Curses", "questL11Desert", "questL11Doctor", "questL11Manor", "questL11Palindome", "questL11Pyramid", "questL11Ron", "questL11Shen", "questL11Spare", "questL11Worship", "questL12War", "questL12HippyFrat", "questL13Final", "questL13Warehouse", "questLTTQuestByWire", "questM01Untinker", "questM02Artist", "questM03Bugbear", "questM05Toot", "questM06Gourd", "questM07Hammer", "questM08Baker", "questM09Rocks", "questM10Azazel", "questM11Postal", "questM12Pirate", "questM13Escape", "questM14Bounty", "questM15Lol", "questM16Temple", "questM17Babies", "questM18Swamp", "questM19Hippy", "questM20Necklace", "questM21Dance", "questM22Shirt", "questM23Meatsmith", "questM24Doc", "questM25Armorer", "questM26Oracle", "questMaelstromOfLovers", "questPAGhost", "questRufus", "questS01OldGuy", "questS02Monkees", "raveCombo1", "raveCombo2", "raveCombo3", "raveCombo4", "raveCombo5", "raveCombo6", "recoveryScript", "relayCounters", "royalty", "rufusDesiredArtifact", "rufusDesiredItems", "rufusQuestTarget", "rufusQuestType", "scriptMRUList", "seahorseName", "shadowLabyrinthGoal", "shadowRiftIngress", "shenQuestItem", "shrubGarland", "shrubGifts", "shrubLights", "shrubTopper", "sideDefeated", "sidequestArenaCompleted", "sidequestFarmCompleted", "sidequestJunkyardCompleted", "sidequestLighthouseCompleted", "sidequestNunsCompleted", "sidequestOrchardCompleted", "skateParkStatus", "snowsuit", "sourceTerminalChips", "sourceTerminalEducate1", "sourceTerminalEducate2", "sourceTerminalEnquiry", "sourceTerminalEducateKnown", "sourceTerminalEnhanceKnown", "sourceTerminalEnquiryKnown", "sourceTerminalExtrudeKnown", "spadingData", "spadingScript", "speakeasyName", "spelunkyStatus", "spelunkyUpgrades", "spookyravenRecipeUsed", "stationaryButton1", "stationaryButton2", "stationaryButton3", "stationaryButton4", "stationaryButton5", "streamCrossDefaultTarget", "sweetSynthesisBlacklist", "telescope1", "telescope2", "telescope3", "telescope4", "telescope5", "testudinalTeachings", "textColors", "thanksMessage", "tomeSkillsHardcore", "tomeSkillsSoftcore", "trackVoteMonster", "trainsetConfiguration", "trapperOre", "umbrellaState", "umdLastObtained", "vintnerWineEffect", "vintnerWineName", "vintnerWineType", "violetFogLayout", "volcanoMaze1", "volcanoMaze2", "volcanoMaze3", "volcanoMaze4", "volcanoMaze5", "walfordBucketItem", "warProgress", "watchedPreferences", "workteaClue", "yourFavoriteBird", "yourFavoriteBirdMods", "youRobotCPUUpgrades", "_bastilleBoosts", "_bastilleChoice1", "_bastilleChoice2", "_bastilleChoice3", "_bastilleCurrentStyles", "_bastilleEnemyCastle", "_bastilleEnemyName", "_bastilleLastBattleResults", "_bastilleLastEncounter", "_bastilleStats", "_beachHeadsUsed", "_beachLayout", "_beachMinutes", "_birdOfTheDay", "_birdOfTheDayMods", "_bittycar", "_campAwaySmileBuffSign", "_cloudTalkMessage", "_cloudTalkSmoker", "_coatOfPaintModifier", "_dailySpecial", "_deckCardsSeen", "_feastedFamiliars", "_floristPlantsUsed", "_frAreasUnlocked", "_frHoursLeft", "_frMonstersKilled", "_horsery", "_horseryCrazyMox", "_horseryCrazyMus", "_horseryCrazyMys", "_horseryCrazyName", "_horseryCurrentName", "_horseryDarkName", "_horseryNormalName", "_horseryPaleName", "_jickJarAvailable", "_jiggleCheesedMonsters", "_lastCombatStarted", "_lastPirateRealmIsland", "_locketMonstersFought", "_mummeryMods", "_mummeryUses", "_newYouQuestSkill", "_noHatModifier", "_pantogramModifier", "_pottedPowerPlant", "_questESp", "_questPartyFair", "_questPartyFairProgress", "_questPartyFairQuest", "_roboDrinks", "_roninStoragePulls", "_sotParcelReturned  false", "_spacegateAnimalLife", "_spacegateCoordinates", "_spacegateGear", "_spacegateHazards", "_spacegateIntelligentLife", "_spacegatePlanetName", "_spacegatePlantLife", "_stolenAccordions", "_tempRelayCounters", "_timeSpinnerFoodAvailable", "_unknownEasyBountyItem", "_unknownHardBountyItem", "_unknownSpecialBountyItem", "_untakenEasyBountyItem", "_untakenHardBountyItem", "_untakenSpecialBountyItem", "_userMods", "_villainLairColor", "_villainLairKey", "_voteLocal1", "_voteLocal2", "_voteLocal3", "_voteLocal4", "_voteMonster1", "_voteMonster2", "_voteModifier", "_VYKEACompanionType", "_VYKEACompanionRune", "_VYKEACompanionName"];
var numericOrStringProperties = ["statusEngineering", "statusGalley", "statusMedbay", "statusMorgue", "statusNavigation", "statusScienceLab", "statusSonar", "statusSpecialOps", "statusWasteProcessing", "choiceAdventure2", "choiceAdventure3", "choiceAdventure4", "choiceAdventure5", "choiceAdventure6", "choiceAdventure7", "choiceAdventure8", "choiceAdventure9", "choiceAdventure10", "choiceAdventure11", "choiceAdventure12", "choiceAdventure14", "choiceAdventure15", "choiceAdventure16", "choiceAdventure17", "choiceAdventure18", "choiceAdventure19", "choiceAdventure20", "choiceAdventure21", "choiceAdventure22", "choiceAdventure23", "choiceAdventure24", "choiceAdventure25", "choiceAdventure26", "choiceAdventure27", "choiceAdventure28", "choiceAdventure29", "choiceAdventure40", "choiceAdventure41", "choiceAdventure42", "choiceAdventure45", "choiceAdventure46", "choiceAdventure47", "choiceAdventure71", "choiceAdventure72", "choiceAdventure73", "choiceAdventure74", "choiceAdventure75", "choiceAdventure76", "choiceAdventure77", "choiceAdventure86", "choiceAdventure87", "choiceAdventure88", "choiceAdventure89", "choiceAdventure90", "choiceAdventure91", "choiceAdventure105", "choiceAdventure106", "choiceAdventure107", "choiceAdventure108", "choiceAdventure109", "choiceAdventure110", "choiceAdventure111", "choiceAdventure112", "choiceAdventure113", "choiceAdventure114", "choiceAdventure115", "choiceAdventure116", "choiceAdventure117", "choiceAdventure118", "choiceAdventure120", "choiceAdventure123", "choiceAdventure125", "choiceAdventure126", "choiceAdventure127", "choiceAdventure129", "choiceAdventure131", "choiceAdventure132", "choiceAdventure135", "choiceAdventure136", "choiceAdventure137", "choiceAdventure138", "choiceAdventure139", "choiceAdventure140", "choiceAdventure141", "choiceAdventure142", "choiceAdventure143", "choiceAdventure144", "choiceAdventure145", "choiceAdventure146", "choiceAdventure147", "choiceAdventure148", "choiceAdventure149", "choiceAdventure151", "choiceAdventure152", "choiceAdventure153", "choiceAdventure154", "choiceAdventure155", "choiceAdventure156", "choiceAdventure157", "choiceAdventure158", "choiceAdventure159", "choiceAdventure160", "choiceAdventure161", "choiceAdventure162", "choiceAdventure163", "choiceAdventure164", "choiceAdventure165", "choiceAdventure166", "choiceAdventure167", "choiceAdventure168", "choiceAdventure169", "choiceAdventure170", "choiceAdventure171", "choiceAdventure172", "choiceAdventure177", "choiceAdventure178", "choiceAdventure180", "choiceAdventure181", "choiceAdventure182", "choiceAdventure184", "choiceAdventure185", "choiceAdventure186", "choiceAdventure187", "choiceAdventure188", "choiceAdventure189", "choiceAdventure191", "choiceAdventure197", "choiceAdventure198", "choiceAdventure199", "choiceAdventure200", "choiceAdventure201", "choiceAdventure202", "choiceAdventure203", "choiceAdventure204", "choiceAdventure205", "choiceAdventure206", "choiceAdventure207", "choiceAdventure208", "choiceAdventure211", "choiceAdventure212", "choiceAdventure213", "choiceAdventure214", "choiceAdventure215", "choiceAdventure216", "choiceAdventure217", "choiceAdventure218", "choiceAdventure219", "choiceAdventure220", "choiceAdventure221", "choiceAdventure222", "choiceAdventure223", "choiceAdventure224", "choiceAdventure225", "choiceAdventure230", "choiceAdventure272", "choiceAdventure273", "choiceAdventure276", "choiceAdventure277", "choiceAdventure278", "choiceAdventure279", "choiceAdventure280", "choiceAdventure281", "choiceAdventure282", "choiceAdventure283", "choiceAdventure284", "choiceAdventure285", "choiceAdventure286", "choiceAdventure287", "choiceAdventure288", "choiceAdventure289", "choiceAdventure290", "choiceAdventure291", "choiceAdventure292", "choiceAdventure293", "choiceAdventure294", "choiceAdventure295", "choiceAdventure296", "choiceAdventure297", "choiceAdventure298", "choiceAdventure299", "choiceAdventure302", "choiceAdventure303", "choiceAdventure304", "choiceAdventure305", "choiceAdventure306", "choiceAdventure307", "choiceAdventure308", "choiceAdventure309", "choiceAdventure310", "choiceAdventure311", "choiceAdventure317", "choiceAdventure318", "choiceAdventure319", "choiceAdventure320", "choiceAdventure321", "choiceAdventure322", "choiceAdventure326", "choiceAdventure327", "choiceAdventure328", "choiceAdventure329", "choiceAdventure330", "choiceAdventure331", "choiceAdventure332", "choiceAdventure333", "choiceAdventure334", "choiceAdventure335", "choiceAdventure336", "choiceAdventure337", "choiceAdventure338", "choiceAdventure339", "choiceAdventure340", "choiceAdventure341", "choiceAdventure342", "choiceAdventure343", "choiceAdventure344", "choiceAdventure345", "choiceAdventure346", "choiceAdventure347", "choiceAdventure348", "choiceAdventure349", "choiceAdventure350", "choiceAdventure351", "choiceAdventure352", "choiceAdventure353", "choiceAdventure354", "choiceAdventure355", "choiceAdventure356", "choiceAdventure357", "choiceAdventure358", "choiceAdventure360", "choiceAdventure361", "choiceAdventure362", "choiceAdventure363", "choiceAdventure364", "choiceAdventure365", "choiceAdventure366", "choiceAdventure367", "choiceAdventure372", "choiceAdventure376", "choiceAdventure387", "choiceAdventure388", "choiceAdventure389", "choiceAdventure390", "choiceAdventure391", "choiceAdventure392", "choiceAdventure393", "choiceAdventure395", "choiceAdventure396", "choiceAdventure397", "choiceAdventure398", "choiceAdventure399", "choiceAdventure400", "choiceAdventure401", "choiceAdventure402", "choiceAdventure403", "choiceAdventure423", "choiceAdventure424", "choiceAdventure425", "choiceAdventure426", "choiceAdventure427", "choiceAdventure428", "choiceAdventure429", "choiceAdventure430", "choiceAdventure431", "choiceAdventure432", "choiceAdventure433", "choiceAdventure435", "choiceAdventure438", "choiceAdventure439", "choiceAdventure442", "choiceAdventure444", "choiceAdventure445", "choiceAdventure446", "choiceAdventure447", "choiceAdventure448", "choiceAdventure449", "choiceAdventure451", "choiceAdventure452", "choiceAdventure453", "choiceAdventure454", "choiceAdventure455", "choiceAdventure456", "choiceAdventure457", "choiceAdventure458", "choiceAdventure460", "choiceAdventure461", "choiceAdventure462", "choiceAdventure463", "choiceAdventure464", "choiceAdventure465", "choiceAdventure467", "choiceAdventure468", "choiceAdventure469", "choiceAdventure470", "choiceAdventure471", "choiceAdventure472", "choiceAdventure473", "choiceAdventure474", "choiceAdventure475", "choiceAdventure477", "choiceAdventure478", "choiceAdventure480", "choiceAdventure483", "choiceAdventure484", "choiceAdventure485", "choiceAdventure486", "choiceAdventure488", "choiceAdventure489", "choiceAdventure490", "choiceAdventure491", "choiceAdventure496", "choiceAdventure497", "choiceAdventure502", "choiceAdventure503", "choiceAdventure504", "choiceAdventure505", "choiceAdventure506", "choiceAdventure507", "choiceAdventure509", "choiceAdventure510", "choiceAdventure511", "choiceAdventure512", "choiceAdventure513", "choiceAdventure514", "choiceAdventure515", "choiceAdventure517", "choiceAdventure518", "choiceAdventure519", "choiceAdventure521", "choiceAdventure522", "choiceAdventure523", "choiceAdventure527", "choiceAdventure528", "choiceAdventure529", "choiceAdventure530", "choiceAdventure531", "choiceAdventure532", "choiceAdventure533", "choiceAdventure534", "choiceAdventure535", "choiceAdventure536", "choiceAdventure538", "choiceAdventure539", "choiceAdventure542", "choiceAdventure543", "choiceAdventure544", "choiceAdventure546", "choiceAdventure548", "choiceAdventure549", "choiceAdventure550", "choiceAdventure551", "choiceAdventure552", "choiceAdventure553", "choiceAdventure554", "choiceAdventure556", "choiceAdventure557", "choiceAdventure558", "choiceAdventure559", "choiceAdventure560", "choiceAdventure561", "choiceAdventure562", "choiceAdventure563", "choiceAdventure564", "choiceAdventure565", "choiceAdventure566", "choiceAdventure567", "choiceAdventure568", "choiceAdventure569", "choiceAdventure571", "choiceAdventure572", "choiceAdventure573", "choiceAdventure574", "choiceAdventure575", "choiceAdventure576", "choiceAdventure577", "choiceAdventure578", "choiceAdventure579", "choiceAdventure581", "choiceAdventure582", "choiceAdventure583", "choiceAdventure584", "choiceAdventure594", "choiceAdventure595", "choiceAdventure596", "choiceAdventure597", "choiceAdventure598", "choiceAdventure599", "choiceAdventure600", "choiceAdventure603", "choiceAdventure604", "choiceAdventure616", "choiceAdventure634", "choiceAdventure640", "choiceAdventure654", "choiceAdventure655", "choiceAdventure656", "choiceAdventure657", "choiceAdventure658", "choiceAdventure664", "choiceAdventure669", "choiceAdventure670", "choiceAdventure671", "choiceAdventure672", "choiceAdventure673", "choiceAdventure674", "choiceAdventure675", "choiceAdventure676", "choiceAdventure677", "choiceAdventure678", "choiceAdventure679", "choiceAdventure681", "choiceAdventure683", "choiceAdventure684", "choiceAdventure685", "choiceAdventure686", "choiceAdventure687", "choiceAdventure688", "choiceAdventure689", "choiceAdventure690", "choiceAdventure691", "choiceAdventure692", "choiceAdventure693", "choiceAdventure694", "choiceAdventure695", "choiceAdventure696", "choiceAdventure697", "choiceAdventure698", "choiceAdventure700", "choiceAdventure701", "choiceAdventure705", "choiceAdventure706", "choiceAdventure707", "choiceAdventure708", "choiceAdventure709", "choiceAdventure710", "choiceAdventure711", "choiceAdventure712", "choiceAdventure713", "choiceAdventure714", "choiceAdventure715", "choiceAdventure716", "choiceAdventure717", "choiceAdventure721", "choiceAdventure725", "choiceAdventure729", "choiceAdventure733", "choiceAdventure737", "choiceAdventure741", "choiceAdventure745", "choiceAdventure749", "choiceAdventure753", "choiceAdventure771", "choiceAdventure778", "choiceAdventure780", "choiceAdventure781", "choiceAdventure783", "choiceAdventure784", "choiceAdventure785", "choiceAdventure786", "choiceAdventure787", "choiceAdventure788", "choiceAdventure789", "choiceAdventure791", "choiceAdventure793", "choiceAdventure794", "choiceAdventure795", "choiceAdventure796", "choiceAdventure797", "choiceAdventure803", "choiceAdventure805", "choiceAdventure808", "choiceAdventure809", "choiceAdventure813", "choiceAdventure815", "choiceAdventure830", "choiceAdventure832", "choiceAdventure833", "choiceAdventure834", "choiceAdventure835", "choiceAdventure837", "choiceAdventure838", "choiceAdventure839", "choiceAdventure840", "choiceAdventure841", "choiceAdventure842", "choiceAdventure851", "choiceAdventure852", "choiceAdventure853", "choiceAdventure854", "choiceAdventure855", "choiceAdventure856", "choiceAdventure857", "choiceAdventure858", "choiceAdventure866", "choiceAdventure873", "choiceAdventure875", "choiceAdventure876", "choiceAdventure877", "choiceAdventure878", "choiceAdventure879", "choiceAdventure880", "choiceAdventure881", "choiceAdventure882", "choiceAdventure888", "choiceAdventure889", "choiceAdventure918", "choiceAdventure919", "choiceAdventure920", "choiceAdventure921", "choiceAdventure923", "choiceAdventure924", "choiceAdventure925", "choiceAdventure926", "choiceAdventure927", "choiceAdventure928", "choiceAdventure929", "choiceAdventure930", "choiceAdventure931", "choiceAdventure932", "choiceAdventure940", "choiceAdventure941", "choiceAdventure942", "choiceAdventure943", "choiceAdventure944", "choiceAdventure945", "choiceAdventure946", "choiceAdventure950", "choiceAdventure955", "choiceAdventure957", "choiceAdventure958", "choiceAdventure959", "choiceAdventure960", "choiceAdventure961", "choiceAdventure962", "choiceAdventure963", "choiceAdventure964", "choiceAdventure965", "choiceAdventure966", "choiceAdventure970", "choiceAdventure973", "choiceAdventure974", "choiceAdventure975", "choiceAdventure976", "choiceAdventure977", "choiceAdventure979", "choiceAdventure980", "choiceAdventure981", "choiceAdventure982", "choiceAdventure983", "choiceAdventure988", "choiceAdventure989", "choiceAdventure993", "choiceAdventure998", "choiceAdventure1000", "choiceAdventure1003", "choiceAdventure1005", "choiceAdventure1006", "choiceAdventure1007", "choiceAdventure1008", "choiceAdventure1009", "choiceAdventure1010", "choiceAdventure1011", "choiceAdventure1012", "choiceAdventure1013", "choiceAdventure1015", "choiceAdventure1016", "choiceAdventure1017", "choiceAdventure1018", "choiceAdventure1019", "choiceAdventure1020", "choiceAdventure1021", "choiceAdventure1022", "choiceAdventure1023", "choiceAdventure1026", "choiceAdventure1027", "choiceAdventure1028", "choiceAdventure1029", "choiceAdventure1030", "choiceAdventure1031", "choiceAdventure1032", "choiceAdventure1033", "choiceAdventure1034", "choiceAdventure1035", "choiceAdventure1036", "choiceAdventure1037", "choiceAdventure1038", "choiceAdventure1039", "choiceAdventure1040", "choiceAdventure1041", "choiceAdventure1042", "choiceAdventure1044", "choiceAdventure1045", "choiceAdventure1046", "choiceAdventure1048", "choiceAdventure1051", "choiceAdventure1052", "choiceAdventure1053", "choiceAdventure1054", "choiceAdventure1055", "choiceAdventure1056", "choiceAdventure1057", "choiceAdventure1059", "choiceAdventure1060", "choiceAdventure1061", "choiceAdventure1062", "choiceAdventure1065", "choiceAdventure1067", "choiceAdventure1068", "choiceAdventure1069", "choiceAdventure1070", "choiceAdventure1071", "choiceAdventure1073", "choiceAdventure1077", "choiceAdventure1080", "choiceAdventure1081", "choiceAdventure1082", "choiceAdventure1083", "choiceAdventure1084", "choiceAdventure1085", "choiceAdventure1091", "choiceAdventure1094", "choiceAdventure1095", "choiceAdventure1096", "choiceAdventure1097", "choiceAdventure1102", "choiceAdventure1106", "choiceAdventure1107", "choiceAdventure1108", "choiceAdventure1110", "choiceAdventure1114", "choiceAdventure1115", "choiceAdventure1116", "choiceAdventure1118", "choiceAdventure1119", "choiceAdventure1120", "choiceAdventure1121", "choiceAdventure1122", "choiceAdventure1123", "choiceAdventure1171", "choiceAdventure1172", "choiceAdventure1173", "choiceAdventure1174", "choiceAdventure1175", "choiceAdventure1193", "choiceAdventure1195", "choiceAdventure1196", "choiceAdventure1197", "choiceAdventure1198", "choiceAdventure1199", "choiceAdventure1202", "choiceAdventure1203", "choiceAdventure1204", "choiceAdventure1205", "choiceAdventure1206", "choiceAdventure1207", "choiceAdventure1208", "choiceAdventure1209", "choiceAdventure1210", "choiceAdventure1211", "choiceAdventure1212", "choiceAdventure1213", "choiceAdventure1214", "choiceAdventure1215", "choiceAdventure1219", "choiceAdventure1222", "choiceAdventure1223", "choiceAdventure1224", "choiceAdventure1225", "choiceAdventure1226", "choiceAdventure1227", "choiceAdventure1228", "choiceAdventure1229", "choiceAdventure1236", "choiceAdventure1237", "choiceAdventure1238", "choiceAdventure1239", "choiceAdventure1240", "choiceAdventure1241", "choiceAdventure1242", "choiceAdventure1243", "choiceAdventure1244", "choiceAdventure1245", "choiceAdventure1246", "choiceAdventure1247", "choiceAdventure1248", "choiceAdventure1249", "choiceAdventure1250", "choiceAdventure1251", "choiceAdventure1252", "choiceAdventure1253", "choiceAdventure1254", "choiceAdventure1255", "choiceAdventure1256", "choiceAdventure1266", "choiceAdventure1280", "choiceAdventure1281", "choiceAdventure1282", "choiceAdventure1283", "choiceAdventure1284", "choiceAdventure1285", "choiceAdventure1286", "choiceAdventure1287", "choiceAdventure1288", "choiceAdventure1289", "choiceAdventure1290", "choiceAdventure1291", "choiceAdventure1292", "choiceAdventure1293", "choiceAdventure1294", "choiceAdventure1295", "choiceAdventure1296", "choiceAdventure1297", "choiceAdventure1298", "choiceAdventure1299", "choiceAdventure1300", "choiceAdventure1301", "choiceAdventure1302", "choiceAdventure1303", "choiceAdventure1304", "choiceAdventure1305", "choiceAdventure1307", "choiceAdventure1310", "choiceAdventure1312", "choiceAdventure1313", "choiceAdventure1314", "choiceAdventure1315", "choiceAdventure1316", "choiceAdventure1317", "choiceAdventure1318", "choiceAdventure1319", "choiceAdventure1321", "choiceAdventure1322", "choiceAdventure1323", "choiceAdventure1324", "choiceAdventure1325", "choiceAdventure1326", "choiceAdventure1327", "choiceAdventure1328", "choiceAdventure1332", "choiceAdventure1333", "choiceAdventure1335", "choiceAdventure1340", "choiceAdventure1341", "choiceAdventure1345", "choiceAdventure1389", "choiceAdventure1392", "choiceAdventure1397", "choiceAdventure1399", "choiceAdventure1405", "choiceAdventure1411", "choiceAdventure1415", "choiceAdventure1427", "choiceAdventure1428", "choiceAdventure1429", "choiceAdventure1430", "choiceAdventure1431", "choiceAdventure1432", "choiceAdventure1433", "choiceAdventure1434", "choiceAdventure1436", "choiceAdventure1460", "choiceAdventure1461", "choiceAdventure1467", "choiceAdventure1468", "choiceAdventure1469", "choiceAdventure1470", "choiceAdventure1471", "choiceAdventure1472", "choiceAdventure1473", "choiceAdventure1474", "choiceAdventure1475", "choiceAdventure1486", "choiceAdventure1487", "choiceAdventure1488", "choiceAdventure1489", "choiceAdventure1491", "choiceAdventure1494"];
var familiarProperties = ["commaFamiliar", "nextQuantumFamiliar", "stillsuitFamiliar"];
var statProperties = ["nsChallenge1", "snojoSetting"];
var phylumProperties = ["dnaSyringe", "locketPhylum", "redSnapperPhylum"];

/***/ }),

/***/ 412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j1": () => (/* binding */ isBooleanProperty),
/* harmony export */   "OY": () => (/* binding */ isNumericProperty),
/* harmony export */   "jc": () => (/* binding */ isNumericOrStringProperty),
/* harmony export */   "Oz": () => (/* binding */ isStringProperty),
/* harmony export */   "Ph": () => (/* binding */ isLocationProperty),
/* harmony export */   "M1": () => (/* binding */ isMonsterProperty),
/* harmony export */   "mP": () => (/* binding */ isFamiliarProperty),
/* harmony export */   "AM": () => (/* binding */ isStatProperty),
/* harmony export */   "eI": () => (/* binding */ isPhylumProperty)
/* harmony export */ });
/* harmony import */ var _propertyTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(419);

var booleanPropertiesSet = new Set(_propertyTypes__WEBPACK_IMPORTED_MODULE_0__/* .booleanProperties */ .XM);
var numericPropertiesSet = new Set(_propertyTypes__WEBPACK_IMPORTED_MODULE_0__/* .numericProperties */ .bE);
var numericOrStringPropertiesSet = new Set(_propertyTypes__WEBPACK_IMPORTED_MODULE_0__/* .numericOrStringProperties */ .PJ);
var stringPropertiesSet = new Set(_propertyTypes__WEBPACK_IMPORTED_MODULE_0__/* .stringProperties */ .tx);
var locationPropertiesSet = new Set(_propertyTypes__WEBPACK_IMPORTED_MODULE_0__/* .locationProperties */ .ru);
var monsterPropertiesSet = new Set(_propertyTypes__WEBPACK_IMPORTED_MODULE_0__/* .monsterProperties */ .mD);
var familiarPropertiesSet = new Set(_propertyTypes__WEBPACK_IMPORTED_MODULE_0__/* .familiarProperties */ .rv);
var statPropertiesSet = new Set(_propertyTypes__WEBPACK_IMPORTED_MODULE_0__/* .statProperties */ .$v);
var phylumPropertiesSet = new Set(_propertyTypes__WEBPACK_IMPORTED_MODULE_0__/* .phylumProperties */ .aP);
/**
 * Determine whether a property has a boolean value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a boolean value
 */

function isBooleanProperty(property) {
  return booleanPropertiesSet.has(property);
}
/**
 * Determine whether a property has a numeric value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a numeric value
 */

function isNumericProperty(property) {
  return numericPropertiesSet.has(property);
}
/**
 * Determine whether a property has a numeric or string value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a numeric or string value
 */

function isNumericOrStringProperty(property) {
  return numericOrStringPropertiesSet.has(property);
}
/**
 * Determine whether a property has a string value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a string value
 */

function isStringProperty(property) {
  return stringPropertiesSet.has(property);
}
/**
 * Determine whether a property has a Location value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a Location value
 */

function isLocationProperty(property) {
  return locationPropertiesSet.has(property);
}
/**
 * Determine whether a property has a Monster value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a Monster value
 */

function isMonsterProperty(property) {
  return monsterPropertiesSet.has(property);
}
/**
 * Determine whether a property has a Familiar value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a Familiar value
 */

function isFamiliarProperty(property) {
  return familiarPropertiesSet.has(property);
}
/**
 * Determine whether a property has a Stat value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a Stat value
 */

function isStatProperty(property) {
  return statPropertiesSet.has(property);
}
/**
 * Determine whether a property has a Phylum value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a Phylum value
 */

function isPhylumProperty(property) {
  return phylumPropertiesSet.has(property);
}

/***/ }),

/***/ 273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hH": () => (/* binding */ currentMode)
/* harmony export */ });
/* unused harmony exports have, currentHero, set, getModifier, tuneToSkill */
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(664);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(347);
/* harmony import */ var _template_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(678);
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var item = (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$item */ .xr)(_templateObject || (_templateObject = _taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"])));
/**
 * Determines whether you have() the Retro Cape.
 *
 * @returns Whether you have the Retro Cape available.
 */

function have() {
  return haveItem(item);
}
var Heroes = {
  vampire: {
    "Muscle Percent": 30,
    "Maximum HP": 50
  },
  heck: {
    "Mysticality Percent": 30,
    "Maximum MP": 50
  },
  robot: {
    "Moxie Percent": 30,
    "Maximum HP": 25,
    "Maximum MP": 25
  }
};
var currentHero = () => get("retroCapeSuperhero");
var currentMode = () => (0,_property__WEBPACK_IMPORTED_MODULE_2__/* .get */ .U2)("retroCapeWashingInstructions");
var modeMap = new Map([[["vampire", "hold"], {
  "Hot Resistance": 3,
  "Cold Resistance": 3,
  "Stench Resistance": 3,
  "Spooky Resistance": 3,
  "Sleaze Resistance": 3
}], [["vampire", "thrill"], {
  "Muscle Experience": 3
}], [["vampire", "kiss"], {
  Skill: (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$skill */ .tm)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Smooch of the Daywalker"])))
}], [["vampire", "kill"], {
  Skill: (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$skill */ .tm)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Slay the Dead"])))
}], [["heck", "thrill"], {
  "Mysticality Experience": 3
}], [["heck", "kiss"], {
  Skill: (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$skill */ .tm)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["Unleash the Devil's Kiss"])))
}], [["robot", "hold"], {
  Skill: (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$skill */ .tm)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["Deploy Robo-Handcuffs"])))
}], [["robot", "thrill"], {
  "Moxie Experience": 3
}], [["robot", "kiss"], {
  Skill: (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$skill */ .tm)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["Blow a Robo-Kiss"])))
}], [["robot", "kill"], {
  Skill: (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$skill */ .tm)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["Precision Shot"])))
}]]);
/**
 * Tunes retro cape to a given setting
 *
 * @param hero The Superhero to set it to
 * @param mode The washing instructions to set it to
 * @returns Whether we successfully tuned the Retro Cape.
 */

function set(hero, mode) {
  if (!have()) return false;
  if (currentHero() === hero && currentMode() === mode) return true;
  cliExecute("retrocape ".concat(hero, " ").concat(mode));
  return currentHero() === hero && currentMode() === mode;
}
/**
 * Returns the expected Modifiers of the Retro Cape for a particular setting
 *
 * @param hero The Superhero setting
 * @param mode The washing instructions setting
 * @returns A Modifiers object describing the Retro Cape were it to be tuned to that setting.
 */

function getModifier() {
  var _modeMap$get;

  var hero = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : currentHero();
  var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentMode();
  return _objectSpread(_objectSpread({}, Heroes[hero]), (_modeMap$get = modeMap.get([hero, mode])) !== null && _modeMap$get !== void 0 ? _modeMap$get : {});
}
var skills = new Map([[(0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$skill */ .tm)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["Smooch of the Daywalker"]))), ["vampire", "kiss"]], [(0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$skill */ .tm)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["Slay the Dead"]))), ["vampire", "kill"]], [(0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$skill */ .tm)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["Unleash the Devil's Kiss"]))), ["heck", "kiss"]], [(0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$skill */ .tm)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["Deploy Robo-Handcuffs"]))), ["robot", "hold"]], [(0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$skill */ .tm)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["Blow a Robo-Kiss"]))), ["robot", "kiss"]], [(0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$skill */ .tm)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["Precision Shot"]))), ["robot", "kill"]]]);
/**
 * Tunes the Retro Cape to allow it to grant a particular skill.
 *
 * @param skill The skill to tune the Retro Cape to.
 * @returns Whether we successfully tuned the cape.
 */

function tuneToSkill(skill) {
  var setting = skills.get(skill);
  if (!setting || !have()) return false;
  set.apply(void 0, _toConsumableArray(setting));
  return [currentHero(), currentMode()].every((element, index) => element === setting[index]);
}

/***/ }),

/***/ 678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_G": () => (/* binding */ $effect),
/* harmony export */   "lh": () => (/* binding */ $effects),
/* harmony export */   "SS": () => (/* binding */ $element),
/* harmony export */   "HP": () => (/* binding */ $familiar),
/* harmony export */   "xr": () => (/* binding */ $item),
/* harmony export */   "vS": () => (/* binding */ $items),
/* harmony export */   "fr": () => (/* binding */ $monsters),
/* harmony export */   "tm": () => (/* binding */ $skill),
/* harmony export */   "nx": () => (/* binding */ $skills),
/* harmony export */   "Jh": () => (/* binding */ $slot),
/* harmony export */   "ei": () => (/* binding */ $slots),
/* harmony export */   "Ri": () => (/* binding */ $stat),
/* harmony export */   "gw": () => (/* binding */ $stats),
/* harmony export */   "ev": () => (/* binding */ $thrall)
/* harmony export */ });
/* unused harmony exports $bounty, $bounties, $class, $classes, $coinmaster, $coinmasters, $elements, $familiars, $location, $locations, $monster, $phylum, $phyla, $servant, $servants, $thralls, $path, $paths */
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(664);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(588);



var concatTemplateString = function concatTemplateString(literals) {
  for (var _len = arguments.length, placeholders = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    placeholders[_key - 1] = arguments[_key];
  }

  return literals.raw.reduce((acc, literal, i) => {
    var _placeholders$i;

    return acc + literal + ((_placeholders$i = placeholders[i]) !== null && _placeholders$i !== void 0 ? _placeholders$i : "");
  }, "");
};

var handleTypeGetError = (Type, error) => {
  var message = "".concat(error);
  var match = message.match(RegExp("Bad ".concat(Type.name.toLowerCase(), " value: .*")));

  if (match) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("".concat(match[0], "; if you're certain that this ").concat(Type.name, " exists and is spelled correctly, please update KoLMafia"), "red");
  } else {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(message);
  }
};

var createSingleConstant = Type => {
  var tagFunction = function tagFunction(literals) {
    for (var _len2 = arguments.length, placeholders = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      placeholders[_key2 - 1] = arguments[_key2];
    }

    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));

    try {
      return Type.get(input);
    } catch (error) {
      handleTypeGetError(Type, error);
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.abort)();
  };

  tagFunction.none = Type.none;
  return tagFunction;
};

var createPluralConstant = Type => {
  var tagFunction = function tagFunction(literals) {
    for (var _len3 = arguments.length, placeholders = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      placeholders[_key3 - 1] = arguments[_key3];
    }

    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));

    if (input === "") {
      return Type.all();
    }

    try {
      return Type.get((0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .splitByCommasWithEscapes */ .ZQ)(input));
    } catch (error) {
      handleTypeGetError(Type, error);
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.abort)();
  };

  tagFunction.all = () => Type.all();

  return tagFunction;
};
/**
 * A Bounty specified by name.
 *
 * @category In-game constant
 */


var $bounty = createSingleConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Bounty);
/**
 * A list of Bounties specified by a comma-separated list of names.
 * For a list of all possible Bounties, leave the template string blank.
 *
 * @category In-game constant
 */

var $bounties = createPluralConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Bounty);
/**
 * A Class specified by name.
 *
 * @category In-game constant
 */

var $class = createSingleConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Class);
/**
 * A list of Classes specified by a comma-separated list of names.
 * For a list of all possible Classes, leave the template string blank.
 *
 * @category In-game constant
 */

var $classes = createPluralConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Class);
/**
 * A Coinmaster specified by name.
 *
 * @category In-game constant
 */

var $coinmaster = createSingleConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Coinmaster);
/**
 * A list of Coinmasters specified by a comma-separated list of names.
 * For a list of all possible Coinmasters, leave the template string blank.
 *
 * @category In-game constant
 */

var $coinmasters = createPluralConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Coinmaster);
/**
 * An Effect specified by name.
 *
 * @category In-game constant
 */

var $effect = createSingleConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Effect);
/**
 * A list of Effects specified by a comma-separated list of names.
 * For a list of all possible Effects, leave the template string blank.
 *
 * @category In-game constant
 */

var $effects = createPluralConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Effect);
/**
 * An Element specified by name.
 *
 * @category In-game constant
 */

var $element = createSingleConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Element);
/**
 * A list of Elements specified by a comma-separated list of names.
 * For a list of all possible Elements, leave the template string blank.
 *
 * @category In-game constant
 */

var $elements = createPluralConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Element);
/**
 * A Familiar specified by name.
 *
 * @category In-game constant
 */

var $familiar = createSingleConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Familiar);
/**
 * A list of Familiars specified by a comma-separated list of names.
 * For a list of all possible Familiars, leave the template string blank.
 *
 * @category In-game constant
 */

var $familiars = createPluralConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Familiar);
/**
 * An Item specified by name.
 *
 * @category In-game constant
 */

var $item = createSingleConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item);
/**
 * A list of Items specified by a comma-separated list of names.
 * For a list of all possible Items, leave the template string blank.
 *
 * @category In-game constant
 */

var $items = createPluralConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item);
/**
 * A Location specified by name.
 *
 * @category In-game constant
 */

var $location = createSingleConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Location);
/**
 * A list of Locations specified by a comma-separated list of names.
 * For a list of all possible Locations, leave the template string blank.
 *
 * @category In-game constant
 */

var $locations = createPluralConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Location);
/**
 * A Monster specified by name.
 *
 * @category In-game constant
 */

var $monster = createSingleConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Monster);
/**
 * A list of Monsters specified by a comma-separated list of names.
 * For a list of all possible Monsters, leave the template string blank.
 *
 * @category In-game constant
 */

var $monsters = createPluralConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Monster);
/**
 * A Phylum specified by name.
 *
 * @category In-game constant
 */

var $phylum = createSingleConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Phylum);
/**
 * A list of Phyla specified by a comma-separated list of names.
 * For a list of all possible Phyla, leave the template string blank.
 *
 * @category In-game constant
 */

var $phyla = createPluralConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Phylum);
/**
 * A Servant specified by name.
 *
 * @category In-game constant
 */

var $servant = createSingleConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Servant);
/**
 * A list of Servants specified by a comma-separated list of names.
 * For a list of all possible Servants, leave the template string blank.
 *
 * @category In-game constant
 */

var $servants = createPluralConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Servant);
/**
 * A Skill specified by name.
 *
 * @category In-game constant
 */

var $skill = createSingleConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Skill);
/**
 * A list of Skills specified by a comma-separated list of names.
 * For a list of all possible Skills, leave the template string blank.
 *
 * @category In-game constant
 */

var $skills = createPluralConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Skill);
/**
 * A Slot specified by name.
 *
 * @category In-game constant
 */

var $slot = createSingleConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Slot);
/**
 * A list of Slots specified by a comma-separated list of names.
 * For a list of all possible Slots, leave the template string blank.
 *
 * @category In-game constant
 */

var $slots = createPluralConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Slot);
/**
 * A Stat specified by name.
 *
 * @category In-game constant
 */

var $stat = createSingleConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Stat);
/**
 * A list of Stats specified by a comma-separated list of names.
 * For a list of all possible Stats, leave the template string blank.
 *
 * @category In-game constant
 */

var $stats = createPluralConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Stat);
/**
 * A Thrall specified by name.
 *
 * @category In-game constant
 */

var $thrall = createSingleConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Thrall);
/**
 * A list of Thralls specified by a comma-separated list of names.
 * For a list of all possible Thralls, leave the template string blank.
 *
 * @category In-game constant
 */

var $thralls = createPluralConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Thrall);
/**
 * A Path specified by name.
 *
 * @category In-game constant
 */

var $path = createSingleConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Path);
/**
 * A list of Paths specified by a comma-separated list of names.
 * For a list of all possible Paths, leave the template string blank.
 *
 * @category In-game constant
 */

var $paths = createPluralConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Path);

/***/ }),

/***/ 588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sm": () => (/* binding */ sum),
/* harmony export */   "IA": () => (/* binding */ arrayContains),
/* harmony export */   "$x": () => (/* binding */ setEqual),
/* harmony export */   "ZQ": () => (/* binding */ splitByCommasWithEscapes),
/* harmony export */   "Qg": () => (/* binding */ makeByXFunction)
/* harmony export */ });
/* unused harmony exports notNull, parseNumber, clamp, chunk, arrayToCountedMap, countedMapToArray, countedMapToString, sumNumbers, invertMap, maxBy, arrayEquals, undelay, flat */
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Type guard against null value
 *
 * @param value Value that can be null
 * @returns Whether the value is not null or... not
 */
function notNull(value) {
  return value !== null;
}
/**
 * Parse string to number, stripping commas
 *
 * @param n Numberical string to parse
 * @returns Numerical value of string
 */

function parseNumber(n) {
  return Number.parseInt(n.replace(/,/g, ""));
}
/**
 * Clamp a number between lower and upper bounds.
 *
 * @param n Number to clamp.
 * @param min Lower bound.
 * @param max Upper bound.
 * @returns Clamped value
 */

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}
/**
 * Split an {@param array} into {@param chunkSize} sized chunks
 *
 * @param array Array to split
 * @param chunkSize Size of chunk
 * @returns Split array
 */

function chunk(array, chunkSize) {
  var result = [];

  for (var i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }

  return result;
}
/**
 * Count distinct values in an array
 *
 * @param array Array of values
 * @returns Map of distinct values to count
 */

function arrayToCountedMap(array) {
  if (!Array.isArray(array)) return array;
  var map = new Map();
  array.forEach(item => {
    map.set(item, (map.get(item) || 0) + 1);
  });
  return map;
}
/**
 * Turn map of distinct values to count into array of values
 *
 * @param map Map to turn into array
 * @returns Array of values
 */

function countedMapToArray(map) {
  var _ref;

  return (_ref = []).concat.apply(_ref, _toConsumableArray(_toConsumableArray(map).map(_ref2 => {
    var _ref3 = _slicedToArray(_ref2, 2),
        item = _ref3[0],
        quantity = _ref3[1];

    return Array(quantity).fill(item);
  })));
}
/**
 * Stringify a counted map
 *
 * @param map Map of counted values
 * @returns String representing map of counted values
 */

function countedMapToString(map) {
  return _toConsumableArray(map).map(_ref4 => {
    var _ref5 = _slicedToArray(_ref4, 2),
        item = _ref5[0],
        quantity = _ref5[1];

    return "".concat(quantity, " x ").concat(item);
  }).join(", ");
}
/**
 * Sum an array of numbers.
 *
 * @param addends Addends to sum.
 * @param x Property or mapping function of addends to sum
 * @returns Sum of numbers
 */

function sum(addends, x) {
  return addends.reduce((subtotal, element) => subtotal + (typeof x === "function" ? x(element) : element[x]), 0);
}
/**
 * Sum array of numbers
 *
 * @param addends Numbers to sum
 * @returns Sum of numbers
 */

function sumNumbers(addends) {
  return sum(addends, x => x);
}
/**
 * Checks if a given item is in a readonly array, acting as a typeguard.
 *
 * @param item Needle
 * @param array Readonly array haystack
 * @returns Whether the item is in the array, and narrows the type of the item.
 */

function arrayContains(item, array) {
  return array.includes(item);
}
/**
 * Checks if two arrays contain the same elements in the same quantity.
 *
 * @param a First array for comparison
 * @param b Second array for comparison
 * @returns Whether the two arrays are equal, irrespective of order.
 */

function setEqual(a, b) {
  var sortedA = _toConsumableArray(a).sort();

  var sortedB = _toConsumableArray(b).sort();

  return a.length === b.length && sortedA.every((item, index) => item === sortedB[index]);
}
/**
 * Reverses keys and values for a given map
 *
 * @param map Map to invert
 * @returns Inverted map
 */

function invertMap(map) {
  var returnValue = new Map();

  var _iterator = _createForOfIteratorHelper(map),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];

      returnValue.set(value, key);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return returnValue;
}
/**
 * Splits a string by commas while also respecting escaping commas with a backslash
 *
 * @param str String to split
 * @returns List of tokens
 */

function splitByCommasWithEscapes(str) {
  var returnValue = [];
  var ignoreNext = false;
  var currentString = "";

  var _iterator2 = _createForOfIteratorHelper(str.split("")),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var char = _step2.value;

      if (char === "\\") {
        ignoreNext = true;
      } else {
        if (char == "," && !ignoreNext) {
          returnValue.push(currentString.trim());
          currentString = "";
        } else {
          currentString += char;
        }

        ignoreNext = false;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  returnValue.push(currentString.trim());
  return returnValue;
}
/**
 * Find the best element of an array, where "best" is defined by some given criteria.
 *
 * @param array The array to traverse and find the best element of.
 * @param optimizer Either a key on the objects we're looking at that corresponds to numerical values, or a function for mapping these objects to numbers. Essentially, some way of assigning value to the elements of the array.
 * @param reverse Make this true to find the worst element of the array, and false to find the best. Defaults to false.
 * @returns Best element by optimizer function
 */

function maxBy(array, optimizer) {
  var reverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (!array.length) throw new Error("Cannot call maxBy on an empty array!");

  if (typeof optimizer === "function") {
    return _toConsumableArray(array).reduce((_ref6, other) => {
      var value = _ref6.value,
          item = _ref6.item;
      var otherValue = optimizer(other);
      return value >= otherValue !== reverse ? {
        value: value,
        item: item
      } : {
        value: otherValue,
        item: other
      };
    }, {
      item: array[0],
      value: optimizer(array[0])
    }).item;
  } else {
    return array.reduce((a, b) => a[optimizer] >= b[optimizer] !== reverse ? a : b);
  }
}
/**
 * Compare arrays shallowly
 *
 * @param left One array to compare
 * @param right The other array to compare
 * @returns Whether the two arrays are shallowly equal
 */

function arrayEquals(left, right) {
  if (left.length !== right.length) return false;
  return left.every((element, index) => element === right[index]);
}
/**
 * Used to collapse a Delayed<T> object into an entity of type "T" as represented by the object.
 *
 * @param delayedObject Object of type Delayed<T> that represents either a value of type T or a function returning a value of type T.
 * @returns The return value of the function, if delayedObject is a function. Otherwise, this returns the original element.
 */

function undelay(delayedObject) {
  return typeof delayedObject === "function" ? delayedObject() : delayedObject;
}
/**
 * Makes a byX function, like byStat or byClass
 *
 * @param source A method for finding your stat, or class, or whatever X is in this context
 * @returns A function akin to byStat or byClass; it accepts an object that either is "complete" in the sense that it has a key for every conceivable value, or contains a `default` parameter. If an inappropriate input is provided, returns undefined.
 */

function makeByXFunction(source) {
  return function (options) {
    var _options$val;

    var val = undelay(source);
    if ("default" in options) return (_options$val = options[val]) !== null && _options$val !== void 0 ? _options$val : options.default;
    return options[val];
  };
}
/**
 * Flattens an array. Basically replacing Array.prototype.flat for which Rhino doesn't yet have an implementation
 *
 * @param arr Array to flatten
 * @param depth Number of layers to flatten by; Infinity for a fully flat array
 * @returns Flattened array
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any

function flat(arr) {
  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;
  var flatArray = [];

  var _iterator3 = _createForOfIteratorHelper(arr),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var item = _step3.value;

      if (Array.isArray(item) && depth > 0) {
        flatArray = flatArray.concat(flat(item, depth - 1));
      } else {
        flatArray.push(item);
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  return flatArray;
}

/***/ }),

/***/ 543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TB": () => (/* binding */ horsery)
/* harmony export */ });
/* unused harmony exports PropertyManager, gingerCandy, kramcoCheck, useDefaultFamiliar, Test, testDone, doTest, ensureInnerElf, fightSausageIfAble, shrug, openSongSlot, ensurePotionEffect, ensureSong, ensureEffect, setClan, setChoice, tryUse, multiFightAutoAttack, heal, advMacroAA, advMacro, horse, convertMilliseconds, fax, questStep, ensureMp, maximizeFamiliar, canCastLibrams, pullIfPossible, ensurePullEffect, inMysClass, inMoxClass, inMusClass, unequip, chefstaves, juneCleave */
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(664);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var libram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(347);
/* harmony import */ var libram__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(678);
/* harmony import */ var libram__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(311);
/* harmony import */ var _outfit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(730);
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _ref, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var PropertyManager = new libram__WEBPACK_IMPORTED_MODULE_2__/* .PropertiesManager */ .Jr();
function gingerCandy() {
  if (!get("_asmo_gingercity")) {
    useFamiliar($familiar(_templateObject || (_templateObject = _taggedTemplateLiteral(["Pair of Stomping Boots"]))));
    equip($slot(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["familiar"]))), $item(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["tiny stillsuit"]))));
    set("choiceAdventure1215", 1);
    set("choiceAdventure1204", 1);
    advMacroAA($location(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["Gingerbread Civic Center"]))), Macro.step("runaway"), 1);
    advMacroAA($location(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["Gingerbread Train Station"]))), Macro.step("runaway"), 4);
    set("_asmo_gingercity", true);
  }
}
function kramcoCheck() {
  var kramcoNumber = 5 + 3 * get("_sausageFights") + Math.pow(Math.max(0, get("_sausageFights") - 5), 3);
  return totalTurnsPlayed() - get("_lastSausageMonsterTurn") + 1 >= kramcoNumber;
}
function useDefaultFamiliar() {
  var canAttack = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  if (!get("_bagOfCandy") && canAttack) {
    useFamiliar($familiar(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["Stocking Mimic"]))));
  } else if (!haveEffect($effect(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["Spit Upon"])))) && !get("csServicesPerformed").split(",").includes("Reduce Gazelle Population")) {
    useFamiliar($familiar(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["Melodramedary"]))));
    equip($slot(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["familiar"]))), $item(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["dromedary drinking helmet"]))));
  } else if (canAttack && !have($item(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["short stack of pancakes"])))) && !have($effect(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["Shortly Stacked"])))) && !get("csServicesPerformed").split(",").includes("Breed More Collies")) {
    useFamiliar($familiar(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["Shorter-Order Cook"]))));
    equip($slot(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["familiar"]))), $item(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["tiny stillsuit"]))));
  } else if (!have($item(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["burning newspaper"])))) && !have($item(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["burning paper crane"]))))) {
    useFamiliar($familiar(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["Garbage Fire"]))));
    equip($slot(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["familiar"]))), $item(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["tiny stillsuit"]))));
  } else {
    useFamiliar($familiar(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["Puck Man"]))));
    equip($slot(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["familiar"]))), $item(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["tiny stillsuit"]))));
  }
}
var Test;

(function (Test) {
  Test[Test["HP"] = 1] = "HP";
  Test[Test["MUS"] = 2] = "MUS";
  Test[Test["MYS"] = 3] = "MYS";
  Test[Test["MOX"] = 4] = "MOX";
  Test[Test["FAMILIAR"] = 5] = "FAMILIAR";
  Test[Test["WEAPON"] = 6] = "WEAPON";
  Test[Test["SPELL"] = 7] = "SPELL";
  Test[Test["NONCOMBAT"] = 8] = "NONCOMBAT";
  Test[Test["ITEM"] = 9] = "ITEM";
  Test[Test["HOT_RES"] = 10] = "HOT_RES";
  Test[Test["COIL_WIRE"] = 11] = "COIL_WIRE";
  Test[Test["DONATE"] = 30] = "DONATE";
})(Test || (Test = {}));

function testDone(testNum) {
  //stolen directly from bean
  print("Checking test ".concat(testNum, "..."));
  var text = visitUrl("council.php");
  return !containsText(text, "<input type=hidden name=option value=".concat(testNum, ">"));
}
function doTest(testNum) {
  //stolen directly from bean
  if (!testDone(testNum)) {
    visitUrl("choice.php?whichchoice=1089&option=".concat(testNum));

    if (!testDone(testNum)) {
      throw 'Failed to do test " + testNum + ". Maybe we are out of turns.';
    }
  } else {
    print("Test ".concat(testNum, " already completed."));
  }
}
function ensureInnerElf() {
  //stolen merely mostly from bean
  if (!have($effect(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["Inner Elf"]))))) {
    setClan(get("asmocs_elfClan", "Hobopolis Vacation Home"));

    try {
      withOutfit(new Outfit({
        acc3: $item(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["Kremlin's Greatest Briefcase"]))),
        familiar: $item(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["tiny stillsuit"])))
      }, $familiar(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["Machine Elf"])))), () => {
        ensureEffect($effect(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["Blood Bubble"]))));
        setChoice(326, 1);
        if (get("_kgbTranquilizerDartUses") >= 3) ensureMp(50);
        advMacro($location(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["The Slime Tube"]))), Macro.trySkill($skill(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["KGB tranquilizer dart"])))).trySkill($skill(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["Snokebomb"])))));
      });
    } finally {
      setClan(get("asmocs_mainClan", "Alliance From Heck"));
    }

    if (!have($effect(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["Inner Elf"]))))) {
      throw "Failed to get effect Inner Elf from Mother Slime.";
    }
  }
}
function fightSausageIfAble(location, macro) {
  if (kramcoCheck()) {
    equip($slot(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["off-hand"]))), $item(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"])))); //useDefaultFamiliar();

    var sausages = get("_sausageFights");
    advMacroAA(location, macro, () => {
      return sausages === get("_sausageFights");
    });

    if (get("lastEncounter") !== "sausage goblin") {
      throw "Did not fight a sausage, but I thought I would. Uh oh!";
    }
  }
}
function shrug(ef) {
  if (haveEffect(ef) > 0) {
    cliExecute("shrug ".concat(ef.name));
  }
} // We have Stevedave's, Ur-Kel's on at all times during leveling (managed via mood); third and fourth slots are variable.

var songSlots = [(0,libram__WEBPACK_IMPORTED_MODULE_3__/* .$effects */ .lh)(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["Stevedave's Shanty of Superiority"]))), (0,libram__WEBPACK_IMPORTED_MODULE_3__/* .$effects */ .lh)(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["Ur-Kel's Aria of Annoyance"]))), (0,libram__WEBPACK_IMPORTED_MODULE_3__/* .$effects */ .lh)(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["Power Ballad of the Arrowsmith, The Magical Mojomuscular Melody, The Moxious Madrigal, Ode to Booze, Jackasses' Symphony of Destruction"]))), (0,libram__WEBPACK_IMPORTED_MODULE_3__/* .$effects */ .lh)(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["Carlweather's Cantata of Confrontation, The Sonata of Sneakiness, Fat Leon's Phat Loot Lyric, Polka of Plenty"])))];

var allKnownSongs = (_ref = []).concat.apply(_ref, songSlots);

var allSongs = kolmafia__WEBPACK_IMPORTED_MODULE_0__.Skill.all().filter(skill => (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toString)(skill.class) === "Accordion Thief" && skill.buff).map(skill => (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toEffect)(skill));
function openSongSlot(song) {
  var _iterator = _createForOfIteratorHelper(songSlots),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var songSlot = _step.value;

      if (songSlot.includes(song)) {
        var _iterator3 = _createForOfIteratorHelper(songSlot),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var shruggable = _step3.value;
            shrug(shruggable);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var _iterator2 = _createForOfIteratorHelper(allSongs),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var badSong = _step2.value;

      if (!allKnownSongs.includes(badSong)) {
        shrug(badSong);
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
function ensurePotionEffect(ef, potion) {
  //stolen directly from bean
  if (!have(ef)) {
    if (availableAmount(potion) === 0) {
      create(1, potion);
    }

    if (!cliExecute(ef.default) || haveEffect(ef) === 0) {
      throw "Failed to get effect ".concat(ef.name, ".");
    }
  } else {
    print("Already have effect ".concat(ef.name, "."));
  }
}
function ensureSong(ef) {
  if (haveEffect(ef) === 0) {
    openSongSlot(ef);

    if (!cliExecute(ef.default) || haveEffect(ef) === 0) {
      throw "Failed to get effect ".concat(ef.name);
    }
  } else {
    print("Already have effect ".concat(ef.name, "."));
  }
}
function ensureEffect(ef) {
  var turns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  //stolen directly from bean
  if (haveEffect(ef) < turns) {
    if (!cliExecute(ef.default) || haveEffect(ef) === 0) {
      throw "Failed to get effect ".concat(ef.name, ".");
    }
  } else {
    print("Already have effect ".concat(ef.name, "."));
  }
}
function setClan(target) {
  //stolen directly from bean
  if (getClanName() !== target) {
    var clanCache = JSON.parse(getProperty("hccs_clanCache") || "{}");

    if (clanCache.target === undefined) {
      var recruiter = visitUrl("clan_signup.php");
      var clanRe = /<option value=([0-9]+)>([^<]+)<\/option>/g;
      var match;

      while ((match = clanRe.exec(recruiter)) !== null) {
        clanCache[match[2]] = match[1];
      }
    }

    setProperty("hccs_clanCache", JSON.stringify(clanCache));
    visitUrl("showclan.php?whichclan=".concat(clanCache[target], "&action=joinclan&confirm=on&pwd"));

    if (getClanName() !== target) {
      throw "failed to switch clans to ".concat(target, ". Did you spell it correctly? Are you whitelisted?");
    }
  }

  return true;
}
function setChoice(adv, choice) {
  PropertyManager.setChoices(_defineProperty({}, adv, choice));
}
function tryUse(quantity, it) {
  //ripped straight from bean
  if (availableAmount(it) > 0) {
    return use(quantity, it);
  } else {
    return false;
  }
}
function multiFightAutoAttack() {
  while (choiceFollowsFight() || inMultiFight()) {
    visitUrl("choice.php");
  }
}
function heal() {
  restoreHp(myMaxhp());
}
function advMacroAA(location, macro) {
  var parameter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var afterCombatAction = arguments.length > 3 ? arguments[3] : undefined;
  var n = 0;

  var condition = () => {
    return typeof parameter === "number" ? n < parameter : parameter();
  };

  macro.setAutoAttack();

  while (condition()) {
    adv1(location, -1, () => {
      return Macro.if_("!pastround 2", macro).abort().toString();
    });
    if (afterCombatAction) afterCombatAction();
    n++;
  }
}
function advMacro(location, macro) {
  var parameter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var afterCombatAction = arguments.length > 3 ? arguments[3] : undefined;
  setAutoAttack(0);
  var n = 0;

  var condition = () => {
    return typeof parameter === "number" ? n < parameter : parameter();
  };

  while (condition()) {
    adv1(location, -1, () => {
      return Macro.if_("!pastround 2", macro).abort().toString();
    });
    if (afterCombatAction) afterCombatAction();
    n++;
  }
}
/* export function mapMacro(location: Location, monster: Monster, macro: Macro): void {
	macro.setAutoAttack();
	useSkill($skill`Map the Monsters`);
	if (!get("mappingMonsters")) throw `I am not actually mapping anything. Weird!`;
	else {
		while (get("mappingMonsters") && !have($effect`Meteor Showered`)) {
			visitUrl(toUrl(location));
			runChoice(1, `heyscriptswhatsupwinkwink=${monster.id}`);
			runCombat(macro.toString());
		}
	}
} */

function horsery() {
  return (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .get */ .U2)("_horsery");
}
function horse(horse) {
  if (!horse.includes("horse")) horse = "".concat(horse, " horse");
  if (horsery() !== horse) cliExecute("horsery ".concat(horse));
}
function convertMilliseconds(milliseconds) {
  var seconds = milliseconds / 1000;
  var minutes = Math.floor(seconds / 60);
  var secondsLeft = seconds - minutes * 60;
  var hours = Math.floor(minutes / 60);
  var minutesLeft = minutes - hours * 60;
  return (hours !== 0 ? "".concat(hours, " hours, ") : "") + (minutesLeft !== 0 ? "".concat(minutesLeft, " minutes, ") : "") + (secondsLeft !== 0 ? "".concat(secondsLeft, " seconds") : "");
}

function checkFax(monster) {
  cliExecute("fax receive");
  if (property.getString("photocopyMonster").toLowerCase() === monster.name.toLowerCase()) return true;
  cliExecute("fax send");
  return false;
}

function fax(monster) {
  if (!get("_photocopyUsed")) {
    if (checkFax(monster)) return;
    chatPrivate("cheesefax", monster.name);

    for (var i = 0; i < 3; i++) {
      wait(10);
      if (checkFax(monster)) return;
    }

    abort("Failed to acquire photocopied ".concat(monster.name, "."));
  }
}
function questStep(questName) {
  var stringStep = property.getString(questName);
  if (stringStep === "unstarted" || stringStep === "") return -1;else if (stringStep === "started") return 0;else if (stringStep === "finished") return 999;else {
    if (stringStep.substring(0, 4) !== "step") {
      throw "Quest state parsing error.";
    }

    return parseInt(stringStep.substring(4), 10);
  }
}
function ensureMp(mp) {
  if (myMp() > mp) return;
  if (mp > myMaxmp()) throw "Insufficient maximum mp!";

  while (have($item(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["magical sausage"])))) || have($item(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["magical sausage casing"])))) && myMp() < mp && get("_sausagesEaten") < 23) {
    retrieveItem($item(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["magical sausage"]))));
    eat($item(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["magical sausage"]))));
  }

  while (have($item(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["psychokinetic energy blob"])))) && myMp() < mp) {
    use($item(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["psychokinetic energy blob"]))));
  }

  if (myMp() < mp) restoreMp(mp);
}
var maximizeFamiliar = (0,libram__WEBPACK_IMPORTED_MODULE_5__/* .have */ .lf)((0,libram__WEBPACK_IMPORTED_MODULE_3__/* .$familiar */ .HP)(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["Disembodied Hand"])))) ? (0,libram__WEBPACK_IMPORTED_MODULE_3__/* .$familiar */ .HP)(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["Disembodied Hand"]))) : (0,libram__WEBPACK_IMPORTED_MODULE_3__/* .$familiar */ .HP)(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["Left-Hand Man"])));
function canCastLibrams() {
  var summonNumber = 1 + get("libramSummons");
  var cost = 1 + summonNumber * (summonNumber - 10) / 2;
  return myMp() >= cost + 100;
}
function pullIfPossible(quantity, it, maxPrice) {
  if (pullsRemaining() > 0) {
    var quantityPull = Math.max(0, quantity - availableAmount(it));

    if (shopAmount(it) > 0) {
      takeShop(Math.min(shopAmount(it), quantityPull), it);
    }

    if (storageAmount(it) < quantityPull) {
      buyUsingStorage(quantityPull - storageAmount(it), it, maxPrice);
    }

    cliExecute("pull ".concat(quantityPull, " ").concat(it.name));
    return true;
  } else return false;
}
function ensurePullEffect(ef, it) {
  if (haveEffect(ef) === 0) {
    if (availableAmount(it) > 0 || pullIfPossible(1, it, 50000)) ensureEffect(ef);
  }
}
function inMysClass() {
  if ($classes(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["Sauceror, Pastamancer"]))).includes(myClass())) {
    return true;
  } else {
    return false;
  }
}
function inMoxClass() {
  if ($classes(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["Accordion Thief, Disco Bandit"]))).includes(myClass())) {
    return true;
  } else {
    return false;
  }
}
function inMusClass() {
  if ($classes(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral(["Seal Clubber, Turtle Tamer"]))).includes(myClass())) {
    return true;
  } else {
    return false;
  }
}
function unequip(item) {
  while (equippedAmount(item) > 0) {
    var slot = Slot.all().find(equipmentSlot => equippedItem(equipmentSlot) === item);
    if (!slot) return;
    equip(slot, $item(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral(["none"]))));
  }
}
var chefstaves = (0,libram__WEBPACK_IMPORTED_MODULE_3__/* .$items */ .vS)(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral(["Staff of Kitchen Royalty, Staff of the Deepest Freeze, Staff of Frozen Lard, Staff of the Peppermint Twist, Staff of the Roaring Hearth"])));
function juneCleave() {
  if (get("_juneCleaverFightsLeft") > 0) return;
  withOutfit(new Outfit({
    weapon: $item(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral(["June cleaver"])))
  }), () => {
    withProperty("recoveryScript", "", () => {
      adv1($location(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral(["Noob Cave"]))), -1, "");
      if (get("lastEncounter") === "Poetic Justice") useSkill($skill(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral(["Tongue of the Walrus"]))));
    });
  });
}

/***/ }),

/***/ 730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports Outfit, OutfitPlan, withOutfit, default, wireOutfit, moxieOutfit, hpOutfit, muscleOutfit, mysticalityOutfit, itemOutfit, hotresOutfit, noncombatOutfit, famweightOutfit, weaponOutfit, spellOutfit */
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(664);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var libram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(678);
/* harmony import */ var libram__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(311);
/* harmony import */ var libram__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(588);
/* harmony import */ var libram__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(409);
/* harmony import */ var libram__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(376);
/* harmony import */ var libram__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(273);
/* harmony import */ var libram_dist_modifierTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(986);
/* harmony import */ var _asmohccs_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(543);
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60, _templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject72, _templateObject73, _templateObject74, _templateObject75, _templateObject76, _templateObject77, _templateObject78, _templateObject79, _templateObject80, _templateObject81, _templateObject82, _templateObject83, _templateObject84, _templateObject85, _templateObject86, _templateObject87, _templateObject88, _templateObject89, _templateObject90, _templateObject91, _templateObject92, _templateObject93, _templateObject94, _templateObject95, _templateObject96, _templateObject97, _templateObject98, _templateObject99, _templateObject100, _templateObject101, _templateObject102, _templateObject103, _templateObject104, _templateObject105, _templateObject106, _templateObject107, _templateObject108, _templateObject109, _templateObject110, _templateObject111, _templateObject112, _templateObject113, _templateObject114, _templateObject115, _templateObject116, _templateObject117, _templateObject118, _templateObject119, _templateObject120, _templateObject121, _templateObject122, _templateObject123, _templateObject124, _templateObject125, _templateObject126, _templateObject127, _templateObject128, _templateObject129, _templateObject130, _templateObject131, _templateObject132, _templateObject133, _templateObject134, _templateObject135, _templateObject136, _templateObject137, _templateObject138, _templateObject139, _templateObject140, _templateObject141, _templateObject142, _templateObject143, _templateObject144, _templateObject145, _templateObject146, _templateObject147, _templateObject148, _templateObject149;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var modeables = {
  backupcamera: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject || (_templateObject = _taggedTemplateLiteral(["backup camera"]))),
  umbrella: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["unbreakable umbrella"]))),
  snowsuit: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Snow Suit"]))),
  edpiece: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["The Crown of Ed the Undying"]))),
  retrocape: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"]))),
  parka: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["Jurassic Parka"])))
};
var outfitSlots = ["weapon", "offhand", "hat", "back", "shirt", "pants", "acc1", "acc2", "acc3", "familiar"];
var Outfit = /*#__PURE__*/function () {
  /**
   * Construct an outfit object, for rapid equipping
   * @param equips Map of what to equip and where
   * @param familiar Optional familiar to use with outfit
   */
  function Outfit(equips, familiar, modes) {
    _classCallCheck(this, Outfit);

    _defineProperty(this, "equips", void 0);

    _defineProperty(this, "familiar", void 0);

    _defineProperty(this, "modes", void 0);

    this.equips = equips;
    this.familiar = familiar;
    this.modes = modes;
  }

  _createClass(Outfit, [{
    key: "dress",
    value: function dress() {
      if (this.familiar) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useFamiliar)(this.familiar);
      var targetEquipment = Object.values(this.equips);
      var accessorySlots = (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$slots */ .ei)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["acc1, acc2, acc3"])));
      var equipmentMap = new Map(Array.from(Object.entries(this.equips)).map(_ref => {
        var _ref2 = _slicedToArray(_ref, 2),
            slotName = _ref2[0],
            equipmentItem = _ref2[1];

        return [(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toSlot)(slotName), equipmentItem];
      }));

      var _iterator = _createForOfIteratorHelper((0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$slots */ .ei)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["weapon, offhand, hat, back, shirt, pants, familiar"])))),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var slot = _step.value;
          if (targetEquipment.includes((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equippedItem)(slot)) && equipmentMap.get(slot) !== (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equippedItem)(slot)) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)(slot, (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["none"]))));
        } //Order is anchored here to prevent DFSS shenanigans

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = _createForOfIteratorHelper((0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$slots */ .ei)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["weapon, offhand, hat, back, shirt, pants, familiar"])))),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _slot = _step2.value;
          var equipment = equipmentMap.get(_slot);

          if (equipment) {
            if (!(0,libram__WEBPACK_IMPORTED_MODULE_3__/* .have */ .lf)(equipment) && (0,libram__WEBPACK_IMPORTED_MODULE_3__/* .getFoldGroup */ ._D)(equipment).some(i => (0,libram__WEBPACK_IMPORTED_MODULE_3__/* .have */ .lf)(i))) {
              (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("fold ".concat(equipment));
            }

            (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)(_slot, equipment);
          }
        } //We don't care what order accessories are equipped in, just that they're equipped

      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var accessoryEquips = accessorySlots.map(slot => equipmentMap.get(slot)).filter(item => item !== undefined);

      var _iterator3 = _createForOfIteratorHelper(accessorySlots),
          _step3;

      try {
        var _loop = function _loop() {
          var slot = _step3.value;
          var toEquip = accessoryEquips.find(equip => (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equippedAmount)(equip) < accessoryEquips.filter(accessory => accessory === equip).length);
          if (!toEquip) return "break";
          var currentEquip = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equippedItem)(slot); //We never want an empty accessory slot

          if (currentEquip === (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["none"]))) || (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equippedAmount)(currentEquip) > accessoryEquips.filter(accessory => accessory === currentEquip).length) {
            (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equip)(slot, toEquip);
          }
        };

        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _ret = _loop();

          if (_ret === "break") break;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      for (var mode in this.modes) {
        if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEquipped)(modeables[mode])) {
          var cmd = this.modes[mode];
          var args = Array.isArray(cmd) ? cmd.join(" ") : cmd;
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("".concat(mode, " ").concat(args));
        }
      }
    }
  }, {
    key: "modifier",
    value: function modifier(mod) {
      if ((0,libram__WEBPACK_IMPORTED_MODULE_4__/* .arrayContains */ .IA)(mod, libram_dist_modifierTypes__WEBPACK_IMPORTED_MODULE_5__/* .numericModifiers */ .H8)) {
        return (0,libram__WEBPACK_IMPORTED_MODULE_4__/* .sum */ .Sm)(Object.values(this.equips), it => (0,libram__WEBPACK_IMPORTED_MODULE_6__/* .get */ .U2)(mod, it));
      } else {
        return Object.values(this.equips).some(it => (0,libram__WEBPACK_IMPORTED_MODULE_6__/* .get */ .U2)(mod, it));
      }
    }
    /**
     * Identical to withOutfit; executes callback function with equipped outfit, and returns to original outfit
     * @param callback Function to execute
     */

  }, {
    key: "with",
    value: function _with(callback) {
      return withOutfit(this, callback);
    }
    /**
     * Saves current outfit as an Outfit
     * @param withFamiliar Option to store current familiar as part of outfit
     */

  }], [{
    key: "current",
    value: function current() {
      var withFamiliar = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var familiar = withFamiliar ? (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myFamiliar)() : undefined;
      var fit = {};

      var _iterator4 = _createForOfIteratorHelper(outfitSlots),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var slotName = _step4.value;
          var slot = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toSlot)(slotName);
          var item = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equippedItem)(slot);
          if (item !== (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["none"])))) fit[slotName] = item;
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      return new Outfit(fit, familiar);
    }
  }]);

  return Outfit;
}();
var OutfitPlan = /*#__PURE__*/function () {
  function OutfitPlan(outline) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, OutfitPlan);

    _defineProperty(this, "outline", void 0);

    _defineProperty(this, "filler", void 0);

    _defineProperty(this, "familiar", void 0);

    _defineProperty(this, "modes", void 0);

    this.outline = outline;
    this.familiar = options.familiar;
    this.filler = options.filler;
    this.modes = options.modes;
  }

  _createClass(OutfitPlan, [{
    key: "build",
    value: function build() {
      var _this = this;

      var fit = {};

      var _iterator5 = _createForOfIteratorHelper(outfitSlots),
          _step5;

      try {
        var _loop2 = function _loop2() {
          var slotName = _step5.value;
          var itemOrItems = _this.outline[slotName];
          if (!itemOrItems) return "continue";
          var itemChoice = Array.isArray(itemOrItems) ? itemOrItems.find(item => ((0,libram__WEBPACK_IMPORTED_MODULE_3__/* .have */ .lf)(item) || (0,libram__WEBPACK_IMPORTED_MODULE_3__/* .getFoldGroup */ ._D)(item).some(i => (0,libram__WEBPACK_IMPORTED_MODULE_3__/* .have */ .lf)(i))) && ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toSlot)(slotName) === (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$slot */ .Jh)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["familiar"]))) || (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.canEquip)(item))) : itemOrItems;
          if (itemChoice) fit[slotName] = itemChoice;
        };

        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var _ret2 = _loop2();

          if (_ret2 === "continue") continue;
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      return new Outfit(fit, this.familiar, this.modes);
    }
  }, {
    key: "dress",
    value: function dress(filler) {
      var fit = this.build();
      fit.dress();

      if (filler) {
        new libram__WEBPACK_IMPORTED_MODULE_7__/* .Requirement */ .nb([], {
          preventSlot: Object.keys(fit).map(s => (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toSlot)(s))
        }).merge(filler).maximize();
      }
    }
  }, {
    key: "with",
    value: function _with(action) {
      return this.build().with(action);
    }
  }, {
    key: "merge",
    value: function merge(other) {
      if (other instanceof OutfitPlan) {
        var _other$familiar, _other$filler$merge, _other$filler, _this$filler, _other$modes, _this$modes;

        var merged = {};

        var _iterator6 = _createForOfIteratorHelper(outfitSlots),
            _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var slot = _step6.value;
            var current = this.outline[slot];
            var alternate = other.outline[slot];

            if (current && alternate) {
              merged[slot] = [alternate, current].flat();
            } else merged[slot] = current !== null && current !== void 0 ? current : alternate;
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }

        return new OutfitPlan(merged, {
          familiar: (_other$familiar = other.familiar) !== null && _other$familiar !== void 0 ? _other$familiar : this.familiar,
          filler: (_other$filler$merge = (_other$filler = other.filler) === null || _other$filler === void 0 ? void 0 : _other$filler.merge((_this$filler = this.filler) !== null && _this$filler !== void 0 ? _this$filler : new libram__WEBPACK_IMPORTED_MODULE_7__/* .Requirement */ .nb([], {}))) !== null && _other$filler$merge !== void 0 ? _other$filler$merge : this.filler,
          modes: _objectSpread(_objectSpread({}, (_other$modes = other.modes) !== null && _other$modes !== void 0 ? _other$modes : {}), (_this$modes = this.modes) !== null && _this$modes !== void 0 ? _this$modes : {})
        });
      } else {
        return this.merge(new OutfitPlan(other));
      }
    }
  }, {
    key: "modifier",
    value: function modifier(mod) {
      if ((0,libram__WEBPACK_IMPORTED_MODULE_4__/* .arrayContains */ .IA)(mod, libram_dist_modifierTypes__WEBPACK_IMPORTED_MODULE_5__/* .numericModifiers */ .H8)) return this.build().modifier(mod);else return this.build().modifier(mod);
    }
  }], [{
    key: "merge",
    value: function merge() {
      for (var _len = arguments.length, mergees = new Array(_len), _key = 0; _key < _len; _key++) {
        mergees[_key] = arguments[_key];
      }

      if (mergees.length === 0) return new OutfitPlan({});
      return mergees.reduce((a, b) => a.merge(b));
    }
  }]);

  return OutfitPlan;
}();
/**
 * Execute callback while wearing given outfit
 * Then return to what you were previously wearing
 * @param outfit Outfit to use
 * @param callback Function to execute
 */

function withOutfit(outfit, callback) {
  var withFamiliar = outfit.familiar !== undefined;
  var cachedOutfit = Outfit.current(withFamiliar);
  outfit.dress();

  try {
    return callback();
  } finally {
    cachedOutfit.dress();
  }
}
function uniform() {
  var defaultUniform = {
    hat: inMoxClass() ? $items(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["very pointy crown, Iunion Crown"]))) : inMysClass() ? $items(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["astral chapeau, Iunion Crown"]))) : $items(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["Daylight Shavings Helmet, Iunion Crown"]))),
    shirt: $items(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["LOV Eardigan, Jurassic Parka, fresh coat of paint"]))),
    pants: get("sweat", 0) < 100 ? $item(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["designer sweatpants"]))) : $items(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["Cargo Cultist Shorts, old sweatpants"]))),
    weapon: get("_juneCleaverFightsLeft") > 0 && get("_juneCleaverEncounters") < 2 ? $item(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["June cleaver"]))) : $item(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))),
    offhand: $items(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["unbreakable umbrella, familiar scrapbook"]))),
    acc1: $items(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["meteorite necklace, hewn moon-rune spoon"]))),
    acc2: $item(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["Beach Comb"]))),
    acc3: $items(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["battle broom, LOV Earrings, Powerful Glove"]))),
    back: $items(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["LOV Epaulettes, unwrapped knock-off retro superhero cape, vampyric cloake"])))
  };

  for (var _len2 = arguments.length, changes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    changes[_key2] = arguments[_key2];
  }

  var alterations = Object.fromEntries(changes.map(change => {
    var _outfitSlots$find;

    var slot = Array.isArray(change) ? change[1] : toSlot(change);
    var slotName = (_outfitSlots$find = outfitSlots.find(element => toSlot(element) === slot)) !== null && _outfitSlots$find !== void 0 ? _outfitSlots$find : abort("invalid slot for outfit");
    var equipment = Array.isArray(change) ? change[0] : change;
    return [slotName, equipment];
  }));
  new OutfitPlan(defaultUniform, {
    modes: {
      umbrella: "broken",
      retrocape: [inMoxClass() ? "robot" : inMusClass() ? "vampire" : "heck", "thrill"],
      parka: "spikolodon"
    }
  }).merge(alterations).dress();
}
var wireOutfit = new OutfitPlan({
  hat: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["Iunion Crown"]))),
  shirt: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["fresh coat of paint"]))),
  pants: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["Cargo Cultist Shorts"]))),
  weapon: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))),
  offhand: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$items */ .vS)(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["Abracandalabra, familiar scrapbook"]))),
  acc1: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["Eight Days a Week Pill Keeper"]))),
  acc2: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["Powerful Glove"]))),
  acc3: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["Guzzlr tablet"])))
});
var moxieOutfit = new OutfitPlan({
  hat: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["very pointy crown"]))),
  shirt: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$items */ .vS)(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["Jurassic Parka, shoe ad T-shirt, fresh coat of paint"]))),
  back: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"]))),
  weapon: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$items */ .vS)(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["Staff of Kitchen Royalty, Fourth of May Cosplay Saber"]))),
  offhand: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["unbreakable umbrella"]))),
  pants: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["Cargo Cultist Shorts"]))),
  acc1: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["Beach Comb"]))),
  acc2: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$items */ .vS)(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["your cowboy boots, \"I Voted!\" sticker"]))),
  acc3: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["Retrospecs"]))),
  familiar: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["miniature crystal ball"])))
}, {
  modes: {
    retrocape: ["robot", libram__WEBPACK_IMPORTED_MODULE_9__/* .currentMode */ .hH()]
  }
});
var hpOutfit = new OutfitPlan({
  hat: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$items */ .vS)(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["extra-wide head candle, wad of used tape"]))),
  weapon: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["dented scepter"]))),
  offhand: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))),
  shirt: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$items */ .vS)(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["Jurassic Parka, shoe ad T-shirt, fresh coat of paint"]))),
  back: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$items */ .vS)(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["vampyric cloake, unwrapped knock-off retro superhero cape"]))),
  pants: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral(["Cargo Cultist Shorts"]))),
  acc1: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral(["Brutal brogues"]))),
  acc2: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral(["Retrospecs"]))),
  acc3: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral(["Kremlin's Greatest Briefcase"]))),
  familiar: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral(["miniature crystal ball"])))
}, {
  modes: {
    retrocape: ["vampire", libram__WEBPACK_IMPORTED_MODULE_9__/* .currentMode */ .hH()],
    parka: "kachungasaur"
  }
});
var muscleOutfit = new OutfitPlan({
  hat: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral(["wad of used tape"]))),
  weapon: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject56 || (_templateObject56 = _taggedTemplateLiteral(["dented scepter"]))),
  offhand: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject57 || (_templateObject57 = _taggedTemplateLiteral(["unbreakable umbrella"]))),
  shirt: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$items */ .vS)(_templateObject58 || (_templateObject58 = _taggedTemplateLiteral(["Jurassic Parka, shoe ad T-shirt, fresh coat of paint"]))),
  back: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject59 || (_templateObject59 = _taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"]))),
  pants: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject60 || (_templateObject60 = _taggedTemplateLiteral(["Cargo Cultist Shorts"]))),
  acc1: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject61 || (_templateObject61 = _taggedTemplateLiteral(["Brutal brogues"]))),
  acc2: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject62 || (_templateObject62 = _taggedTemplateLiteral(["Retrospecs"]))),
  acc3: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject63 || (_templateObject63 = _taggedTemplateLiteral(["Kremlin's Greatest Briefcase"]))),
  familiar: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject64 || (_templateObject64 = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))
}, {
  familiar: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$familiar */ .HP)(_templateObject65 || (_templateObject65 = _taggedTemplateLiteral(["Disembodied Hand"]))),
  modes: {
    retrocape: ["vampire", libram__WEBPACK_IMPORTED_MODULE_9__/* .currentMode */ .hH()]
  }
});
var mysticalityOutfit = new OutfitPlan({
  hat: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$items */ .vS)(_templateObject66 || (_templateObject66 = _taggedTemplateLiteral(["astral chapeau, wad of used tape"]))),
  weapon: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject67 || (_templateObject67 = _taggedTemplateLiteral(["weeping willow wand"]))),
  offhand: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject68 || (_templateObject68 = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))),
  back: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject69 || (_templateObject69 = _taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"]))),
  shirt: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$items */ .vS)(_templateObject70 || (_templateObject70 = _taggedTemplateLiteral(["Jurassic Parka, denim jacket, shoe ad T-shirt, fresh coat of paint"]))),
  pants: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject71 || (_templateObject71 = _taggedTemplateLiteral(["designer sweatpants"]))),
  acc1: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject72 || (_templateObject72 = _taggedTemplateLiteral(["Retrospecs"]))),
  //acc2: $item`codpiece`,
  acc3: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject73 || (_templateObject73 = _taggedTemplateLiteral(["battle broom"]))),
  familiar: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject74 || (_templateObject74 = _taggedTemplateLiteral(["Abracandalabra"])))
}, {
  familiar: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$familiar */ .HP)(_templateObject75 || (_templateObject75 = _taggedTemplateLiteral(["Left-Hand Man"]))),
  modes: {
    retrocape: ["heck", libram__WEBPACK_IMPORTED_MODULE_9__/* .currentMode */ .hH()]
  }
});
var itemOutfit = new OutfitPlan({
  hat: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject76 || (_templateObject76 = _taggedTemplateLiteral(["wad of used tape"]))),
  weapon: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$items */ .vS)(_templateObject77 || (_templateObject77 = _taggedTemplateLiteral(["extra-large utility candle"]))),
  offhand: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$items */ .vS)(_templateObject78 || (_templateObject78 = _taggedTemplateLiteral(["unbreakable umbrella, cursed magnifying glass"]))),
  back: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject79 || (_templateObject79 = _taggedTemplateLiteral(["protonic accelerator pack"]))),
  acc1: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject80 || (_templateObject80 = _taggedTemplateLiteral(["Guzzlr tablet"]))),
  acc2: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject81 || (_templateObject81 = _taggedTemplateLiteral(["gold detective badge"]))),
  acc3: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$items */ .vS)(_templateObject82 || (_templateObject82 = _taggedTemplateLiteral(["your cowboy boots, government-issued night-vision goggles"]))),
  familiar: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject83 || (_templateObject83 = _taggedTemplateLiteral(["li'l ninja costume"])))
}, {
  familiar: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$familiar */ .HP)(_templateObject84 || (_templateObject84 = _taggedTemplateLiteral(["Trick-or-Treating Tot"]))),
  modes: {
    umbrella: "bucket"
  }
});
var hotresOutfit = new OutfitPlan({
  back: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject85 || (_templateObject85 = _taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"]))),
  weapon: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$items */ .vS)(_templateObject86 || (_templateObject86 = _taggedTemplateLiteral(["industrial fire extinguisher, Fourth of May Cosplay Saber"]))),
  offhand: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$items */ .vS)(_templateObject87 || (_templateObject87 = _taggedTemplateLiteral(["meteorite guard, latte lovers member's mug"]))),
  shirt: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject88 || (_templateObject88 = _taggedTemplateLiteral(["Jurassic Parka"]))),
  pants: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject89 || (_templateObject89 = _taggedTemplateLiteral(["designer sweatpants"]))),
  //acc1: $item`your cowboy boots`,
  acc2: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject90 || (_templateObject90 = _taggedTemplateLiteral(["Brutal brogues"]))),
  acc3: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject91 || (_templateObject91 = _taggedTemplateLiteral(["Beach Comb"])))
}, {
  familiar: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$familiar */ .HP)(_templateObject92 || (_templateObject92 = _taggedTemplateLiteral(["Exotic Parrot"]))),
  modes: {
    retrocape: ["vampire", "hold"],
    parka: "pterodactyl"
  }
});
var noncombatOutfit = new OutfitPlan({
  hat: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject93 || (_templateObject93 = _taggedTemplateLiteral(["very pointy crown"]))),
  back: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject94 || (_templateObject94 = _taggedTemplateLiteral(["protonic accelerator pack"]))),
  weapon: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject95 || (_templateObject95 = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))),
  offhand: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$items */ .vS)(_templateObject96 || (_templateObject96 = _taggedTemplateLiteral(["unbreakable umbrella, rope, burning paper crane, familiar scrapbook"]))),
  shirt: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject97 || (_templateObject97 = _taggedTemplateLiteral(["Jurassic Parka"]))),
  pants: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$items */ .vS)(_templateObject98 || (_templateObject98 = _taggedTemplateLiteral(["repaid diaper, Great Wolf's beastly trousers, designer sweatpants"]))),
  acc1: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject99 || (_templateObject99 = _taggedTemplateLiteral(["hewn moon-rune spoon"]))),
  acc2: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$items */ .vS)(_templateObject100 || (_templateObject100 = _taggedTemplateLiteral(["atlas of local maps, Kremlin's Greatest Briefcase"]))),
  acc3: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject101 || (_templateObject101 = _taggedTemplateLiteral(["Brutal brogues"])))
}, {
  familiar: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$familiar */ .HP)(_templateObject102 || (_templateObject102 = _taggedTemplateLiteral(["Disgeist"]))),
  modes: {
    umbrella: "cocoon",
    parka: "pterodactyl"
  }
});
var familiarAndEquip = (0,libram__WEBPACK_IMPORTED_MODULE_3__/* .have */ .lf)((0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$familiar */ .HP)(_templateObject103 || (_templateObject103 = _taggedTemplateLiteral(["Comma Chameleon"])))) ? {
  fam: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$familiar */ .HP)(_templateObject104 || (_templateObject104 = _taggedTemplateLiteral(["Comma Chameleon"]))),
  equip: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject105 || (_templateObject105 = _taggedTemplateLiteral(["none"])))
} : (0,libram__WEBPACK_IMPORTED_MODULE_3__/* .have */ .lf)((0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$familiar */ .HP)(_templateObject106 || (_templateObject106 = _taggedTemplateLiteral(["Doppelshifter"])))) && !(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.inHardcore)() ? {
  fam: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$familiar */ .HP)(_templateObject107 || (_templateObject107 = _taggedTemplateLiteral(["Doppelshifter"]))),
  equip: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject108 || (_templateObject108 = _taggedTemplateLiteral(["tiny costume wardrobe"])))
} : (0,libram__WEBPACK_IMPORTED_MODULE_3__/* .have */ .lf)((0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject109 || (_templateObject109 = _taggedTemplateLiteral(["Snow Suit"])))) && !(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.inHardcore)() ? {
  fam: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$familiar */ .HP)(_templateObject110 || (_templateObject110 = _taggedTemplateLiteral(["Exotic Parrot"]))),
  equip: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject111 || (_templateObject111 = _taggedTemplateLiteral(["Snow Suit"])))
} : (0,libram__WEBPACK_IMPORTED_MODULE_3__/* .have */ .lf)((0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject112 || (_templateObject112 = _taggedTemplateLiteral(["cracker"])))) ? {
  fam: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$familiar */ .HP)(_templateObject113 || (_templateObject113 = _taggedTemplateLiteral(["Exotic Parrot"]))),
  equip: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject114 || (_templateObject114 = _taggedTemplateLiteral(["cracker"])))
} : (0,libram__WEBPACK_IMPORTED_MODULE_3__/* .have */ .lf)((0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$familiar */ .HP)(_templateObject115 || (_templateObject115 = _taggedTemplateLiteral(["Baby Bugged Bugbear"])))) ? {
  fam: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$familiar */ .HP)(_templateObject116 || (_templateObject116 = _taggedTemplateLiteral(["Baby Bugged Bugbear"]))),
  equip: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject117 || (_templateObject117 = _taggedTemplateLiteral(["bugged beanie"])))
} : {
  fam: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$familiar */ .HP)(_templateObject118 || (_templateObject118 = _taggedTemplateLiteral(["Blood-Faced Volleyball"]))),
  equip: (0,libram__WEBPACK_IMPORTED_MODULE_3__/* .have */ .lf)((0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject119 || (_templateObject119 = _taggedTemplateLiteral(["astral pet sweater"])))) ? (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject120 || (_templateObject120 = _taggedTemplateLiteral(["astral pet sweater"]))) : (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject121 || (_templateObject121 = _taggedTemplateLiteral(["none"])))
};
var famweightOutfit = new OutfitPlan({
  hat: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject122 || (_templateObject122 = _taggedTemplateLiteral(["Daylight Shavings Helmet"]))),
  weapon: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject123 || (_templateObject123 = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))),
  offhand: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$items */ .vS)(_templateObject124 || (_templateObject124 = _taggedTemplateLiteral(["rope, burning paper crane, familiar scrapbook"]))),
  pants: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$items */ .vS)(_templateObject125 || (_templateObject125 = _taggedTemplateLiteral(["repaid diaper, Great Wolf's beastly trousers, designer sweatpants"]))),
  acc1: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject126 || (_templateObject126 = _taggedTemplateLiteral(["Beach Comb"]))),
  acc2: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject127 || (_templateObject127 = _taggedTemplateLiteral(["Brutal brogues"]))),
  acc3: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject128 || (_templateObject128 = _taggedTemplateLiteral(["hewn moon-rune spoon"]))),
  familiar: familiarAndEquip.equip
}, {
  familiar: familiarAndEquip.fam
});
var weaponOutfit = new OutfitPlan({
  hat: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$items */ .vS)(_templateObject129 || (_templateObject129 = _taggedTemplateLiteral(["seal-skull helmet"]))),
  weapon: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject130 || (_templateObject130 = _taggedTemplateLiteral(["broken champagne bottle"]))),
  offhand: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject131 || (_templateObject131 = _taggedTemplateLiteral(["dented scepter"]))),
  pants: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject132 || (_templateObject132 = _taggedTemplateLiteral(["Great Wolf's beastly trousers"]))),
  acc1: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject133 || (_templateObject133 = _taggedTemplateLiteral(["Brutal brogues"]))),
  acc2: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject134 || (_templateObject134 = _taggedTemplateLiteral(["Powerful Glove"]))),
  acc3: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$items */ .vS)(_templateObject135 || (_templateObject135 = _taggedTemplateLiteral(["meteorite ring, Kremlin's Greatest Briefcase"]))),
  familiar: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$items */ .vS)(_templateObject136 || (_templateObject136 = _taggedTemplateLiteral(["Stick-Knife of Loathing"])))
}, {
  familiar: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$familiar */ .HP)(_templateObject137 || (_templateObject137 = _taggedTemplateLiteral(["Disembodied Hand"])))
});
var spellOutfit = new OutfitPlan({
  hat: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$items */ .vS)(_templateObject138 || (_templateObject138 = _taggedTemplateLiteral(["sugar chapeau, astral chapeau, Hollandaise helmet"]))),
  weapon: !(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.inHardcore)() ? (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$items */ .vS)(_templateObject139 || (_templateObject139 = _taggedTemplateLiteral(["Staff of the Roaring Hearth, Staff of Kitchen Royalty"]))) : (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject140 || (_templateObject140 = _taggedTemplateLiteral(["weeping willow wand"]))),
  offhand: [(0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject141 || (_templateObject141 = _taggedTemplateLiteral(["Abracandalabra"])))].concat(_toConsumableArray((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.inHardcore)() ? (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$items */ .vS)(_templateObject142 || (_templateObject142 = _taggedTemplateLiteral(["weeping willow wand, astral statuette"]))) : (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$items */ .vS)(_templateObject143 || (_templateObject143 = _taggedTemplateLiteral(["obsidian nutcracker"]))))),
  pants: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$items */ .vS)(_templateObject144 || (_templateObject144 = _taggedTemplateLiteral(["Pantaloons of Hatred, designer sweatpants"]))),
  acc1: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$items */ .vS)(_templateObject145 || (_templateObject145 = _taggedTemplateLiteral(["meteorite necklace, Kremlin's Greatest Briefcase"]))),
  acc2: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject146 || (_templateObject146 = _taggedTemplateLiteral(["Powerful Glove"]))),
  acc3: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject147 || (_templateObject147 = _taggedTemplateLiteral(["battle broom"]))),
  familiar: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$items */ .vS)(_templateObject148 || (_templateObject148 = _taggedTemplateLiteral(["Stick-Knife of Loathing, wrench"])))
}, {
  familiar: (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$familiar */ .HP)(_templateObject149 || (_templateObject149 = _taggedTemplateLiteral(["Disembodied Hand"])))
});

/***/ }),

/***/ 664:
/***/ ((module) => {

module.exports = require("kolmafia");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modTraceList": () => (/* binding */ modTraceList),
/* harmony export */   "main": () => (/* binding */ main)
/* harmony export */ });
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(664);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var libram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(678);
/* harmony import */ var libram__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(347);
/* harmony import */ var libram__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(311);
/* harmony import */ var _asmohccs_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(543);
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var moonBonus = [["weapon damage percent", "mongoose", "20"], ["spell damage percent", "wallaby", "20"], ["familiar weight", "platypus", "5"], ["meat drop", "wombat", "20"], ["item drop", "packrat", "10"]];
var thrallBonus = [["maximum hp", "vampieroghi", "10", "60"], ["maximum mp", "vermincelli", "10", "30"], ["initiative", "angel hair wisp", "1", "".concat(5 * (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myThrall)().level)], ["weapon damage", "elbow macaroni", "5", "".concat(2 * (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myThrall)().level)], ["critical hit chance", "elbow macaroni", "10", "10"], ["damage reduction", "penne dreadful", "10", "10"], ["experience", "spaghetti elemental", "1", "1"], ["spell damage", "spaghetti elemental", "10", "5"], ["meat drop", "lasagmbie", "1", "".concat(20 + 2 * (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myThrall)().level)], ["spooky spell damage", "lasagmbie", "10", "10"], ["item drop", "spice ghost", "1", "".concat(10 + (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myThrall)().level)]];
var umbrellaBonus = [["monster level percent", "broken", "25"], ["damage reduction", "forward", "25"], ["item drop", "bucket style", "25"], ["weapon damage", "pitchfork style", "25"], ["spell damage", "constantly twirling", "25"], ["combat rate", "cocoon", "-10"]];

function parkaML() {
  return Math.min(33, 3 * (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myLevel)()).toString();
}

var parkaBonus = [["maximum hp percent", "kachungasaur", "100"], ["meat drop", "kachungasaur", "50"], ["cold resistance", "kachungasaur", "2"], ["sleaze damage", "dilophosaur", "20"], ["sleaze spell damage", "dilophosaur", "20"], ["stench resistance", "dilophosaur", "2"], ["monster level", "spikolodon", parkaML()], ["sleaze resistance", "spikolodon", "2"], ["damage reduction", "ghostasaurus", "10"], ["maximum mp", "ghostasaurus", "50"], ["spooky resistance", "ghostasaurus", "2"], ["combat rate", "pterodactyl", "-5"], ["initiative", "pterodactyl", "50"], ["hot resistance", "pterodactyl", "2"]];
var boomboxBonus = [["spooky damage", "Eye of the Giger", "".concat((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myLevel)())], ["spooky resistance", "Eye of the Giger", "1"], ["food drop", "Food Vibrations", "30"], ["mp regen min", "Food Vibrations", "3"], ["mp regen max", "Food Vibrations", "5"], ["damage reduction", "Remainin' Alive", "".concat((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myLevel)())], ["weapon damage", "These Fists Were Made for Punchin'", "".concat((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myLevel)())], ["meat drop", "Total Eclipse of Your Meat", "30"]]; //TODO Add voting modifiers

function modTraceList(modifier) {
  var totalVal = 0;
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("");
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("MOD TRACE: ".concat(modifier), "red");
  var slotTotal = 0;
  var slotCount = 0;

  var _iterator = _createForOfIteratorHelper((0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$slots */ .ei)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral([""])))),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var slot = _step.value;
      var it = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equippedItem)(slot);

      if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)(it, modifier) !== 0 && ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEquipped)(it) && !(slot.toString().includes("sticker") || slot.toString().includes("folder") || slot.toString().includes("card-sleeve")) || (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEquipped)((0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["your cowboy boots"])))) && (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$slots */ .ei)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["bootspur, bootskin"]))).includes(slot) || (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEquipped)((0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["over-the-shoulder Folder Holder"])))) && slot.toString().includes("folder") || ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEquipped)((0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["scratch 'n' sniff sword"])))) || (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEquipped)((0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["scratch 'n' sniff crossbow"]))))) && slot.toString().includes("sticker") || (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEquipped)((0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["card sleeve"])))) && slot.toString().includes("card-sleeve"))) {
        slotTotal = slotTotal + (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)(it, modifier);
        slotCount++;
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("SLOT ".concat(slot, " ITEM ").concat(it, " : ").concat((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)(it, modifier)));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equippedItem)((0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$slot */ .Jh)(_templateObject || (_templateObject = _taggedTemplateLiteral(["back"])))) === (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"])))) {
    var capeForm = (0,libram__WEBPACK_IMPORTED_MODULE_3__/* .get */ .U2)("retroCapeSuperhero").toLowerCase();
    var capeWash = (0,libram__WEBPACK_IMPORTED_MODULE_3__/* .get */ .U2)("retroCapeWashingInstructions").toLowerCase();
    var retroBonus = 0;

    if (capeForm === "vampire") {
      if (["hot resistance", "cold resistance", "sleaze resistance", "spooky resistance", "stench resistance"].includes(modifier) && capeWash === "hold") {
        slotTotal = slotTotal + 3;
        retroBonus = 1;
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("RETROCAPE ".concat(capeForm, " ").concat(capeWash, " : ", 3));
      } else if (modifier === "muscle percent") {
        slotTotal = slotTotal + 30;
        retroBonus = 1;
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("RETROCAPE ".concat(capeForm, " ").concat(capeWash, " : ", 30));
      } else if (modifier === "maximum hp") {
        slotTotal = slotTotal + 50;
        retroBonus = 1;
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("RETROCAPE ".concat(capeForm, " ").concat(capeWash, " : ", 50));
      }
    } else if (capeForm === "heck") {
      if (modifier === "mysticality percent") {
        slotTotal = slotTotal + 30;
        retroBonus = 1;
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("RETROCAPE ".concat(capeForm, " ").concat(capeWash, " : ", 30));
      } else if (modifier === "maximum mp") {
        slotTotal = slotTotal + 50;
        retroBonus = 1;
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("RETROCAPE ".concat(capeForm, " ").concat(capeWash, " : ", 50));
      }
    } else if (capeForm === "robot") {
      if (modifier === "moxie percent") {
        slotTotal = slotTotal + 30;
        retroBonus = 1;
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("RETROCAPE ".concat(capeForm, " ").concat(capeWash, " : ", 30));
      } else if (["maximum hp", "maximum mp"].includes(modifier)) {
        slotTotal = slotTotal + 25;
        retroBonus = 1;
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("RETROCAPE ".concat(capeForm, " ").concat(capeWash, " : ", 25));
      }
    }

    if (retroBonus === 1) {
      slotCount++;
    }
  }

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equippedItem)((0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$slot */ .Jh)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["off-hand"])))) === (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["unbreakable umbrella"]))) || (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myFamiliar)() === (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$familiar */ .HP)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["Left-Hand Man"]))) && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.familiarEquippedEquipment)((0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$familiar */ .HP)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["Left-Hand Man"])))) === (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["unbreakable umbrella"])))) {
    var umbrellaForm = (0,libram__WEBPACK_IMPORTED_MODULE_3__/* .get */ .U2)("umbrellaState");

    for (var i in umbrellaBonus) {
      var line = umbrellaBonus[i];
      var mod = line[0];
      var style = line[1];
      var bonus = line[2];

      if (modifier === mod && umbrellaForm === style) {
        slotTotal = slotTotal + parseInt(bonus);
        slotCount++;
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("UMBRELLA ".concat(style, " : ").concat(bonus));
      }
    }
  }

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equippedItem)((0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$slot */ .Jh)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["shirt"])))) === (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$item */ .xr)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["Jurassic Parka"])))) {
    var parkaForm = (0,libram__WEBPACK_IMPORTED_MODULE_3__/* .get */ .U2)("parkaMode");

    for (var _i in parkaBonus) {
      var _line = parkaBonus[_i];
      var _mod = _line[0];
      var mode = _line[1];
      var _bonus = _line[2];

      if (modifier === _mod && parkaForm === mode) {
        slotTotal = slotTotal + parseInt(_bonus);
        slotCount++;
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("JURASSIC PARKA ".concat(mode, " : ").concat(_bonus));
      }
    }
  }

  if (slotCount > 0) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Equipment Total: ".concat(slotTotal), "blue");
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("");
  }

  var skillTotal = 0;
  var skillCount = 0;

  var _iterator2 = _createForOfIteratorHelper((0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$skills */ .nx)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral([""])))),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var sk = _step2.value;

      if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveSkill)(sk) && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)(sk, modifier) !== 0) {
        skillTotal = skillTotal + (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)(sk, modifier);
        skillCount++;
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("SKILL ".concat(sk, " : ").concat((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)(sk, modifier)));
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  if (skillCount > 0) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Passive Skills Total: ".concat(skillTotal), "blue");
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("");
  }

  var otherTotal = 0;
  var otherCount = 0;
  var myMoon = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.mySign)().toLowerCase();

  if (modifier.includes("experience percent")) {
    if (modifier.includes("muscle") && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.inMuscleSign)()) {
      otherTotal = otherTotal + 10;
      otherCount++;
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("MOON ".concat(myMoon, " : ", 10));
    } else if (modifier.includes("mysticality") && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.inMysticalitySign)()) {
      otherTotal = otherTotal + 10;
      otherCount++;
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("MOON ".concat(myMoon, " : ", 10));
    } else if (modifier.includes("moxie") && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.inMoxieSign)()) {
      otherTotal = otherTotal + 10;
      otherCount++;
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("MOON ".concat(myMoon, " : ", 10));
    }
  } else {
    for (var _i2 in moonBonus) {
      var _line2 = moonBonus[_i2];
      var _mod2 = _line2[0];
      var moon = _line2[1];
      var _bonus2 = _line2[2];

      if (modifier === _mod2 && myMoon === moon) {
        otherTotal = otherTotal + parseInt(_bonus2);
        otherCount++;
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("MOON ".concat(myMoon, " : ").concat(_bonus2));
      }
    }
  }

  for (var _i3 in thrallBonus) {
    var _line3 = thrallBonus[_i3];
    var _mod3 = _line3[0];
    var thrall = _line3[1];
    var level = _line3[2];
    var _bonus3 = _line3[3];

    if (modifier === _mod3 && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myThrall)() === (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$thrall */ .ev)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["", ""])), thrall) && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myThrall)().level >= parseInt(level)) {
      otherTotal = otherTotal + parseInt(_bonus3);
      otherCount++;
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("THRALL ".concat((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myThrall)(), " : ").concat(_bonus3));
    }
  }

  if ((0,_asmohccs_lib__WEBPACK_IMPORTED_MODULE_1__/* .horsery */ .TB)() !== "" && (0,libram__WEBPACK_IMPORTED_MODULE_3__/* .get */ .U2)("horseryAvailable")) {
    var myHorse = (0,_asmohccs_lib__WEBPACK_IMPORTED_MODULE_1__/* .horsery */ .TB)();

    if (modifier.includes("init") && myHorse.includes("normal")) {
      otherTotal = otherTotal + 10;
      otherCount++;
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("HORSERY ".concat(myHorse, " : ", 10));
    } else if (modifier.includes("combat") && myHorse.includes("dark")) {
      otherTotal = otherTotal - 5;
      otherCount++;
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("HORSERY ".concat(myHorse, " : -5"));
    } else if (["hot resistance", "cold resistance", "sleaze resistance", "spooky resistance", "stench resistance"].includes(modifier) && myHorse.includes("pale")) {
      otherTotal = otherTotal + 1;
      otherCount++;
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("HORSERY ".concat(myHorse, " : ", 1));
    } else if (modifier === "moxie" && myHorse.includes("crazy")) {
      otherTotal = otherTotal + (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toInt)((0,libram__WEBPACK_IMPORTED_MODULE_3__/* .get */ .U2)("_horseryCrazyMox"));
      otherCount++;
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("HORSERY ".concat(myHorse, " : ").concat((0,libram__WEBPACK_IMPORTED_MODULE_3__/* .get */ .U2)("_horseryCrazyMox")));
    } else if (modifier === "muscle" && myHorse.includes("crazy")) {
      otherTotal = otherTotal + (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toInt)((0,libram__WEBPACK_IMPORTED_MODULE_3__/* .get */ .U2)("_horseryCrazyMus"));
      otherCount++;
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("HORSERY ".concat(myHorse, " : ").concat((0,libram__WEBPACK_IMPORTED_MODULE_3__/* .get */ .U2)("_horseryCrazyMus")));
    } else if (modifier === "mysticality" && myHorse.includes("crazy")) {
      otherTotal = otherTotal + (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toInt)((0,libram__WEBPACK_IMPORTED_MODULE_3__/* .get */ .U2)("_horseryCrazyMys"));
      otherCount++;
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("HORSERY ".concat(myHorse, " : ").concat((0,libram__WEBPACK_IMPORTED_MODULE_3__/* .get */ .U2)("_horseryCrazyMys")));
    }
  }

  for (var _i4 in boomboxBonus) {
    var _line4 = boomboxBonus[_i4];
    var _mod4 = _line4[0];
    var song = _line4[1];
    var _bonus4 = _line4[2];

    if (modifier === _mod4 && (0,libram__WEBPACK_IMPORTED_MODULE_3__/* .get */ .U2)("boomBoxSong") === song) {
      otherTotal = otherTotal + parseInt(_bonus4);
      otherCount++;
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("BOOMBOX ".concat(song, " : ").concat(_bonus4));
    }
  }

  if (otherCount > 0) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Misc. Bonuses Total: ".concat(otherTotal), "blue");
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("");
  }

  var effectTotal = 0;
  var effectCount = 0;

  for (var effect in (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myEffects)()) {
    var ef = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toEffect)(effect);

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)(ef, modifier) !== 0) {
      effectTotal = effectTotal + (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)(ef, modifier);
      effectCount++;
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("EFFECT ".concat(ef, " : ").concat((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)(ef, modifier), " ").concat(modifier, " for ").concat((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)(ef), " more turns"));
    }
  }

  if ((0,libram__WEBPACK_IMPORTED_MODULE_4__/* .have */ .lf)((0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$effect */ ._G)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["Fidoxene"])))) && modifier === "familiar weight") {
    var _ef = (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$effect */ ._G)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["Fidoxene"])));

    var fidoTotal = Math.max(20 - (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.familiarWeight)((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myFamiliar)()), 0);
    effectTotal = effectTotal + fidoTotal;
    effectCount++;
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("EFFECT ".concat(_ef, " : ").concat(fidoTotal, " familiar weight for ").concat((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)(_ef), " more turns"));
  }

  var squint = (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$effect */ ._G)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["Steely-Eyed Squint"])));
  var swagger = (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$effect */ ._G)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["Bow-Legged Swagger"])));
  var doublerVal = slotTotal + skillTotal + otherTotal + effectTotal;

  if (modifier === "item drop" && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)(squint)) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("EFFECT ".concat(squint, " : ").concat(doublerVal));
    effectTotal = effectTotal + doublerVal;
    effectCount++;
  }

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)(swagger) && ["weapon damage", "weapon damage percent", "initiative"].includes(modifier)) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("EFFECT ".concat(swagger, " : ").concat(doublerVal));
    effectTotal = effectTotal + doublerVal;
    effectCount++;
  }

  if (effectCount > 0) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Effects Total: ".concat(effectTotal), "blue");
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("");
  } //const equipFams = $familiars`Trick-or-Treating Tot, Disembodied Hand, Left-Hand Man`;


  var famTotal = 0;
  var famMod = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myFamiliar)(), modifier, (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.familiarWeight)((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myFamiliar)()) + (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.weightAdjustment)(), libram__WEBPACK_IMPORTED_MODULE_2__/* .$item.none */ .xr.none);

  if (famMod !== 0) {
    famTotal = famTotal + famMod;
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("FAMILIAR ".concat((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myFamiliar)(), " : ").concat(Math.floor(famMod)));
  }

  if (modifier === "familiar weight") {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("FAMILIAR ".concat((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myFamiliar)(), " (Base) : ").concat((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.familiarWeight)((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myFamiliar)())));
    famTotal = famTotal + (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.familiarWeight)((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myFamiliar)());

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myFamiliar)() === (0,libram__WEBPACK_IMPORTED_MODULE_2__/* .$familiar */ .HP)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["Comma Chameleon"]))) && (0,libram__WEBPACK_IMPORTED_MODULE_3__/* .get */ .U2)("commaFamiliar") !== null) {
      famTotal = famTotal + 5;
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("FAMILIAR Comma Chameleon (Bonus) : 5");
    }
  }

  if (famTotal !== 0) {
    famTotal = Math.floor(famTotal);
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Familiar Total: ".concat(famTotal), "blue");
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("");
  }

  totalVal = skillTotal + slotTotal + effectTotal + otherTotal + famTotal;
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Total ".concat(modifier, ": ").concat(totalVal), "purple");
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("");
}
function main() {
  var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  modTraceList(args);
}
})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;