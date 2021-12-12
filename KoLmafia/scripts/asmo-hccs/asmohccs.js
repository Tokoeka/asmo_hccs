/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 1361:
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  }

  return it;
};

/***/ }),

/***/ 3739:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(2949);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  }

  return it;
};

/***/ }),

/***/ 477:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIndexedObject = __webpack_require__(6211);

var toLength = __webpack_require__(588);

var toAbsoluteIndex = __webpack_require__(8786); // `Array.prototype.{ indexOf, includes }` methods implementation


var createMethod = function createMethod(IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

/***/ }),

/***/ 6202:
/***/ ((module) => {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),

/***/ 5830:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var TO_STRING_TAG_SUPPORT = __webpack_require__(4657);

var classofRaw = __webpack_require__(6202);

var wellKnownSymbol = __webpack_require__(7457);

var TO_STRING_TAG = wellKnownSymbol('toStringTag'); // ES3 wrong here

var CORRECT_ARGUMENTS = classofRaw(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function tryGet(it, key) {
  try {
    return it[key];
  } catch (error) {
    /* empty */
  }
}; // getting tag from ES6+ `Object.prototype.toString`


module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag // builtinTag case
  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
  : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};

/***/ }),

/***/ 3780:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(2551);

var ownKeys = __webpack_require__(6813);

var getOwnPropertyDescriptorModule = __webpack_require__(9609);

var definePropertyModule = __webpack_require__(811);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};

/***/ }),

/***/ 4059:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(2171);

var definePropertyModule = __webpack_require__(811);

var createPropertyDescriptor = __webpack_require__(3300);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),

/***/ 3300:
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),

/***/ 812:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var toPrimitive = __webpack_require__(4375);

var definePropertyModule = __webpack_require__(811);

var createPropertyDescriptor = __webpack_require__(3300);

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
};

/***/ }),

/***/ 2171:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(8901); // Detect IE8's incomplete defineProperty implementation


module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function get() {
      return 7;
    }
  })[1] != 7;
});

/***/ }),

/***/ 4603:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var isObject = __webpack_require__(2949);

var document = global.document; // typeof document.createElement is 'object' in old IE

var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};

/***/ }),

/***/ 5096:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(1575);

module.exports = getBuiltIn('navigator', 'userAgent') || '';

/***/ }),

/***/ 2912:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var userAgent = __webpack_require__(5096);

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);

  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;

/***/ }),

/***/ 393:
/***/ ((module) => {

// IE8- don't enum bug keys
module.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

/***/ }),

/***/ 9004:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var getOwnPropertyDescriptor = __webpack_require__(9609).f;

var createNonEnumerableProperty = __webpack_require__(4059);

var redefine = __webpack_require__(6486);

var setGlobal = __webpack_require__(3351);

var copyConstructorProperties = __webpack_require__(3780);

var isForced = __webpack_require__(2612);
/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/


module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;

  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }

  if (target) for (key in source) {
    sourceProperty = source[key];

    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];

    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    } // add a flag to not completely full polyfills


    if (options.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    } // extend global


    redefine(target, key, sourceProperty, options);
  }
};

/***/ }),

/***/ 8901:
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

/***/ }),

/***/ 1871:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var aFunction = __webpack_require__(1361); // optional / simple context binding


module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 0:
      return function () {
        return fn.call(that);
      };

    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function () {
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ 1575:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var path = __webpack_require__(9039);

var global = __webpack_require__(2328);

var aFunction = function aFunction(variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};

/***/ }),

/***/ 1072:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(5830);

var Iterators = __webpack_require__(9759);

var wellKnownSymbol = __webpack_require__(7457);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

/***/ }),

/***/ 2328:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var check = function check(it) {
  return it && it.Math == Math && it;
}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


module.exports = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) || // eslint-disable-next-line no-new-func -- fallback
function () {
  return this;
}() || Function('return this')();

/***/ }),

/***/ 2551:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toObject = __webpack_require__(6068);

var hasOwnProperty = {}.hasOwnProperty;

module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};

/***/ }),

/***/ 1055:
/***/ ((module) => {

module.exports = {};

/***/ }),

/***/ 2674:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(2171);

var fails = __webpack_require__(8901);

var createElement = __webpack_require__(4603); // Thank's IE8 for his funny defineProperty


module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ 8483:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(8901);

var classof = __webpack_require__(6202);

var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

/***/ }),

/***/ 7599:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var store = __webpack_require__(5153);

var functionToString = Function.toString; // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;

/***/ }),

/***/ 4081:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_WEAK_MAP = __webpack_require__(1770);

var global = __webpack_require__(2328);

var isObject = __webpack_require__(2949);

var createNonEnumerableProperty = __webpack_require__(4059);

var objectHas = __webpack_require__(2551);

var shared = __webpack_require__(5153);

var sharedKey = __webpack_require__(1449);

var hiddenKeys = __webpack_require__(1055);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function enforce(it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function getterFor(TYPE) {
  return function (it) {
    var state;

    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    }

    return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;

  set = function set(it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };

  get = function get(it) {
    return wmget.call(store, it) || {};
  };

  has = function has(it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;

  set = function set(it, metadata) {
    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };

  get = function get(it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };

  has = function has(it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

/***/ }),

/***/ 8110:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(7457);

var Iterators = __webpack_require__(9759);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype; // check on default Array iterator

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};

/***/ }),

/***/ 2612:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(8901);

var replacement = /#|\.prototype\./;

var isForced = function isForced(feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';
module.exports = isForced;

/***/ }),

/***/ 2949:
/***/ ((module) => {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),

/***/ 6719:
/***/ ((module) => {

module.exports = false;

/***/ }),

/***/ 6449:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(3739);

var isArrayIteratorMethod = __webpack_require__(8110);

var toLength = __webpack_require__(588);

var bind = __webpack_require__(1871);

var getIteratorMethod = __webpack_require__(1072);

var iteratorClose = __webpack_require__(6535);

var Result = function Result(stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function stop(condition) {
    if (iterator) iteratorClose(iterator);
    return new Result(true, condition);
  };

  var callFn = function callFn(value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    }

    return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable'); // optimisation for array iterators

    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      }

      return new Result(false);
    }

    iterator = iterFn.call(iterable);
  }

  next = iterator.next;

  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }

    if (typeof result == 'object' && result && result instanceof Result) return result;
  }

  return new Result(false);
};

/***/ }),

/***/ 6535:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(3739);

module.exports = function (iterator) {
  var returnMethod = iterator['return'];

  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};

/***/ }),

/***/ 9759:
/***/ ((module) => {

module.exports = {};

/***/ }),

/***/ 4938:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(2912);

var fails = __webpack_require__(8901); // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing


module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

  return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

/***/ }),

/***/ 1770:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var inspectSource = __webpack_require__(7599);

var WeakMap = global.WeakMap;
module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));

/***/ }),

/***/ 811:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(2171);

var IE8_DOM_DEFINE = __webpack_require__(2674);

var anObject = __webpack_require__(3739);

var toPrimitive = __webpack_require__(4375); // eslint-disable-next-line es/no-object-defineproperty -- safe


var $defineProperty = Object.defineProperty; // `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty

exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ 9609:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(2171);

var propertyIsEnumerableModule = __webpack_require__(7395);

var createPropertyDescriptor = __webpack_require__(3300);

var toIndexedObject = __webpack_require__(6211);

var toPrimitive = __webpack_require__(4375);

var has = __webpack_require__(2551);

var IE8_DOM_DEFINE = __webpack_require__(2674); // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe


var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) {
    /* empty */
  }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};

/***/ }),

/***/ 5166:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(4085);

var enumBugKeys = __webpack_require__(393);

var hiddenKeys = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

/***/ }),

/***/ 5863:
/***/ ((__unused_webpack_module, exports) => {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

/***/ }),

/***/ 4085:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(2551);

var toIndexedObject = __webpack_require__(6211);

var indexOf = __webpack_require__(477).indexOf;

var hiddenKeys = __webpack_require__(1055);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) {
    !has(hiddenKeys, key) && has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys


  while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~indexOf(result, key) || result.push(key);
    }
  }

  return result;
};

/***/ }),

/***/ 669:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(4085);

var enumBugKeys = __webpack_require__(393); // `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe


module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};

/***/ }),

/***/ 7395:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


var $propertyIsEnumerable = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
  1: 2
}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

/***/ }),

/***/ 8256:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(2171);

var objectKeys = __webpack_require__(669);

var toIndexedObject = __webpack_require__(6211);

var propertyIsEnumerable = __webpack_require__(7395).f; // `Object.{ entries, values }` methods implementation


var createMethod = function createMethod(TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;

    while (length > i) {
      key = keys[i++];

      if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }

    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod(false)
};

/***/ }),

/***/ 6813:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(1575);

var getOwnPropertyNamesModule = __webpack_require__(5166);

var getOwnPropertySymbolsModule = __webpack_require__(5863);

var anObject = __webpack_require__(3739); // all object keys, includes non-enumerable and symbols


module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

/***/ }),

/***/ 9039:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

module.exports = global;

/***/ }),

/***/ 6486:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var createNonEnumerableProperty = __webpack_require__(4059);

var has = __webpack_require__(2551);

var setGlobal = __webpack_require__(3351);

var inspectSource = __webpack_require__(7599);

var InternalStateModule = __webpack_require__(4081);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');
(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;

  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }

    state = enforceInternalState(value);

    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }

  if (O === global) {
    if (simple) O[key] = value;else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }

  if (simple) O[key] = value;else createNonEnumerableProperty(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});

/***/ }),

/***/ 4682:
/***/ ((module) => {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

/***/ }),

/***/ 3351:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var createNonEnumerableProperty = __webpack_require__(4059);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  }

  return value;
};

/***/ }),

/***/ 1449:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(8849);

var uid = __webpack_require__(858);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

/***/ }),

/***/ 5153:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var setGlobal = __webpack_require__(3351);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});
module.exports = store;

/***/ }),

/***/ 8849:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var IS_PURE = __webpack_require__(6719);

var store = __webpack_require__(5153);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.15.2',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});

/***/ }),

/***/ 8786:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(4770);

var max = Math.max;
var min = Math.min; // Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

/***/ }),

/***/ 6211:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(8483);

var requireObjectCoercible = __webpack_require__(4682);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};

/***/ }),

/***/ 4770:
/***/ ((module) => {

var ceil = Math.ceil;
var floor = Math.floor; // `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger

module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};

/***/ }),

/***/ 588:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(4770);

var min = Math.min; // `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength

module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

/***/ }),

/***/ 6068:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var requireObjectCoercible = __webpack_require__(4682); // `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject


module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};

/***/ }),

/***/ 4375:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(2949); // `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string


module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),

/***/ 4657:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(7457);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};
test[TO_STRING_TAG] = 'z';
module.exports = String(test) === '[object z]';

/***/ }),

/***/ 858:
/***/ ((module) => {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};

/***/ }),

/***/ 4719:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(4938);

module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == 'symbol';

/***/ }),

/***/ 7457:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var shared = __webpack_require__(8849);

var has = __webpack_require__(2551);

var uid = __webpack_require__(858);

var NATIVE_SYMBOL = __webpack_require__(4938);

var USE_SYMBOL_AS_UID = __webpack_require__(4719);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  }

  return WellKnownSymbolsStore[name];
};

/***/ }),

/***/ 4875:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(9004);

var $entries = __webpack_require__(8256).entries; // `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries


$({
  target: 'Object',
  stat: true
}, {
  entries: function entries(O) {
    return $entries(O);
  }
});

/***/ }),

/***/ 8819:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(9004);

var iterate = __webpack_require__(6449);

var createProperty = __webpack_require__(812); // `Object.fromEntries` method
// https://github.com/tc39/proposal-object-from-entries


$({
  target: 'Object',
  stat: true
}, {
  fromEntries: function fromEntries(iterable) {
    var obj = {};
    iterate(iterable, function (k, v) {
      createProperty(obj, k, v);
    }, {
      AS_ENTRIES: true
    });
    return obj;
  }
});

/***/ }),

/***/ 2231:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(9004);

var $values = __webpack_require__(8256).values; // `Object.values` method
// https://tc39.es/ecma262/#sec-object.values


$({
  target: 'Object',
  stat: true
}, {
  values: function values(O) {
    return $values(O);
  }
});

/***/ }),

/***/ 9940:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(3203),
    root = __webpack_require__(4362);
/* Built-in method references that are verified to be native. */


var DataView = getNative(root, 'DataView');
module.exports = DataView;

/***/ }),

/***/ 1979:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hashClear = __webpack_require__(9129),
    hashDelete = __webpack_require__(9047),
    hashGet = __webpack_require__(3486),
    hashHas = __webpack_require__(4786),
    hashSet = __webpack_require__(6444);
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `Hash`.


Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
module.exports = Hash;

/***/ }),

/***/ 2768:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var listCacheClear = __webpack_require__(3708),
    listCacheDelete = __webpack_require__(6993),
    listCacheGet = __webpack_require__(286),
    listCacheHas = __webpack_require__(1678),
    listCacheSet = __webpack_require__(9743);
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `ListCache`.


ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
module.exports = ListCache;

/***/ }),

/***/ 4804:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(3203),
    root = __webpack_require__(4362);
/* Built-in method references that are verified to be native. */


var Map = getNative(root, 'Map');
module.exports = Map;

/***/ }),

/***/ 8423:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var mapCacheClear = __webpack_require__(6977),
    mapCacheDelete = __webpack_require__(7474),
    mapCacheGet = __webpack_require__(727),
    mapCacheHas = __webpack_require__(3653),
    mapCacheSet = __webpack_require__(6140);
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `MapCache`.


MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
module.exports = MapCache;

/***/ }),

/***/ 7114:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(3203),
    root = __webpack_require__(4362);
/* Built-in method references that are verified to be native. */


var Promise = getNative(root, 'Promise');
module.exports = Promise;

/***/ }),

/***/ 689:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(3203),
    root = __webpack_require__(4362);
/* Built-in method references that are verified to be native. */


var Set = getNative(root, 'Set');
module.exports = Set;

/***/ }),

/***/ 9832:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(8423),
    setCacheAdd = __webpack_require__(9911),
    setCacheHas = __webpack_require__(7447);
/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */


function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();

  while (++index < length) {
    this.add(values[index]);
  }
} // Add methods to `SetCache`.


SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
module.exports = SetCache;

/***/ }),

/***/ 959:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(2768),
    stackClear = __webpack_require__(7553),
    stackDelete = __webpack_require__(6038),
    stackGet = __webpack_require__(2397),
    stackHas = __webpack_require__(2421),
    stackSet = __webpack_require__(2936);
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
} // Add methods to `Stack`.


Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
module.exports = Stack;

/***/ }),

/***/ 2773:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(4362);
/** Built-in value references. */


var Symbol = root.Symbol;
module.exports = Symbol;

/***/ }),

/***/ 2496:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(4362);
/** Built-in value references. */


var Uint8Array = root.Uint8Array;
module.exports = Uint8Array;

/***/ }),

/***/ 5284:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(3203),
    root = __webpack_require__(4362);
/* Built-in method references that are verified to be native. */


var WeakMap = getNative(root, 'WeakMap');
module.exports = WeakMap;

/***/ }),

/***/ 6523:
/***/ ((module) => {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];

    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }

  return result;
}

module.exports = arrayFilter;

/***/ }),

/***/ 8083:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(5094),
    isArguments = __webpack_require__(9246),
    isArray = __webpack_require__(3670),
    isBuffer = __webpack_require__(2343),
    isIndex = __webpack_require__(4782),
    isTypedArray = __webpack_require__(1589);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */

function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' || isBuff && (key == 'offset' || key == 'parent') || isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }

  return result;
}

module.exports = arrayLikeKeys;

/***/ }),

/***/ 8421:
/***/ ((module) => {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }

  return array;
}

module.exports = arrayPush;

/***/ }),

/***/ 4481:
/***/ ((module) => {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }

  return false;
}

module.exports = arraySome;

/***/ }),

/***/ 6213:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(7950);
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */


function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}

module.exports = assocIndexOf;

/***/ }),

/***/ 891:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(8421),
    isArray = __webpack_require__(3670);
/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */


function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;

/***/ }),

/***/ 1185:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(2773),
    getRawTag = __webpack_require__(3888),
    objectToString = __webpack_require__(2299);
/** `Object#toString` result references. */


var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

module.exports = baseGetTag;

/***/ }),

/***/ 1075:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(1185),
    isObjectLike = __webpack_require__(4939);
/** `Object#toString` result references. */


var argsTag = '[object Arguments]';
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */

function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;

/***/ }),

/***/ 9856:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqualDeep = __webpack_require__(1829),
    isObjectLike = __webpack_require__(4939);
/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */


function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }

  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }

  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;

/***/ }),

/***/ 1829:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(959),
    equalArrays = __webpack_require__(3426),
    equalByTag = __webpack_require__(1402),
    equalObjects = __webpack_require__(4572),
    getTag = __webpack_require__(2417),
    isArray = __webpack_require__(3670),
    isBuffer = __webpack_require__(2343),
    isTypedArray = __webpack_require__(1589);
/** Used to compose bitmasks for value comparisons. */


var COMPARE_PARTIAL_FLAG = 1;
/** `Object#toString` result references. */

var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';
/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */

function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }

    objIsArr = true;
    objIsObj = false;
  }

  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }

  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }

  if (!isSameTag) {
    return false;
  }

  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;

/***/ }),

/***/ 4106:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(3626),
    isMasked = __webpack_require__(9249),
    isObject = __webpack_require__(71),
    toSource = __webpack_require__(1214);
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */


var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */

var funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */

function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }

  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;

/***/ }),

/***/ 3638:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(1185),
    isLength = __webpack_require__(7100),
    isObjectLike = __webpack_require__(4939);
/** `Object#toString` result references. */


var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */

var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */

function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;

/***/ }),

/***/ 7521:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPrototype = __webpack_require__(2803),
    nativeKeys = __webpack_require__(3865);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }

  var result = [];

  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }

  return result;
}

module.exports = baseKeys;

/***/ }),

/***/ 5094:
/***/ ((module) => {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}

module.exports = baseTimes;

/***/ }),

/***/ 9081:
/***/ ((module) => {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

module.exports = baseUnary;

/***/ }),

/***/ 3159:
/***/ ((module) => {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;

/***/ }),

/***/ 1741:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(4362);
/** Used to detect overreaching core-js shims. */


var coreJsData = root['__core-js_shared__'];
module.exports = coreJsData;

/***/ }),

/***/ 3426:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(9832),
    arraySome = __webpack_require__(4481),
    cacheHas = __webpack_require__(3159);
/** Used to compose bitmasks for value comparisons. */


var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;
/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */

function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  } // Check that cyclic values are equal.


  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);

  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }

  var index = -1,
      result = true,
      seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;
  stack.set(array, other);
  stack.set(other, array); // Ignore non-index properties.

  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }

    if (compared !== undefined) {
      if (compared) {
        continue;
      }

      result = false;
      break;
    } // Recursively compare arrays (susceptible to call stack limits).


    if (seen) {
      if (!arraySome(other, function (othValue, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }

  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;

/***/ }),

/***/ 1402:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(2773),
    Uint8Array = __webpack_require__(2496),
    eq = __webpack_require__(7950),
    equalArrays = __webpack_require__(3426),
    mapToArray = __webpack_require__(8961),
    setToArray = __webpack_require__(6983);
/** Used to compose bitmasks for value comparisons. */


var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;
/** `Object#toString` result references. */

var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';
/** Used to convert symbols to primitives and strings. */

var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */

function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }

      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }

      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == other + '';

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      } // Assume cyclic values are equal.


      var stacked = stack.get(object);

      if (stacked) {
        return stacked == other;
      }

      bitmask |= COMPARE_UNORDERED_FLAG; // Recursively compare objects (susceptible to call stack limits).

      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }

  }

  return false;
}

module.exports = equalByTag;

/***/ }),

/***/ 4572:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getAllKeys = __webpack_require__(5788);
/** Used to compose bitmasks for value comparisons. */


var COMPARE_PARTIAL_FLAG = 1;
/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */

function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }

  var index = objLength;

  while (index--) {
    var key = objProps[index];

    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  } // Check that cyclic values are equal.


  var objStacked = stack.get(object);
  var othStacked = stack.get(other);

  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }

  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;

  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    } // Recursively compare objects (susceptible to call stack limits).


    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }

    skipCtor || (skipCtor = key == 'constructor');
  }

  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor; // Non `Object` object instances with different constructors are not equal.

    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }

  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;

/***/ }),

/***/ 8556:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;
module.exports = freeGlobal;

/***/ }),

/***/ 5788:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(891),
    getSymbols = __webpack_require__(7976),
    keys = __webpack_require__(3225);
/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */


function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;

/***/ }),

/***/ 404:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isKeyable = __webpack_require__(4480);
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */


function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

module.exports = getMapData;

/***/ }),

/***/ 3203:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsNative = __webpack_require__(4106),
    getValue = __webpack_require__(7338);
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */


function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;

/***/ }),

/***/ 3888:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(2773);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}

module.exports = getRawTag;

/***/ }),

/***/ 7976:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayFilter = __webpack_require__(6523),
    stubArray = __webpack_require__(4043);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Built-in value references. */

var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */

var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
  if (object == null) {
    return [];
  }

  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
module.exports = getSymbols;

/***/ }),

/***/ 2417:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DataView = __webpack_require__(9940),
    Map = __webpack_require__(4804),
    Promise = __webpack_require__(7114),
    Set = __webpack_require__(689),
    WeakMap = __webpack_require__(5284),
    baseGetTag = __webpack_require__(1185),
    toSource = __webpack_require__(1214);
/** `Object#toString` result references. */


var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';
var dataViewTag = '[object DataView]';
/** Used to detect maps, sets, and weakmaps. */

var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

var getTag = baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.

if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
  getTag = function getTag(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;

        case mapCtorString:
          return mapTag;

        case promiseCtorString:
          return promiseTag;

        case setCtorString:
          return setTag;

        case weakMapCtorString:
          return weakMapTag;
      }
    }

    return result;
  };
}

module.exports = getTag;

/***/ }),

/***/ 7338:
/***/ ((module) => {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;

/***/ }),

/***/ 9129:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(6326);
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */


function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;

/***/ }),

/***/ 9047:
/***/ ((module) => {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;

/***/ }),

/***/ 3486:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(6326);
/** Used to stand-in for `undefined` hash values. */


var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function hashGet(key) {
  var data = this.__data__;

  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;

/***/ }),

/***/ 4786:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(6326);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

module.exports = hashHas;

/***/ }),

/***/ 6444:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(6326);
/** Used to stand-in for `undefined` hash values. */


var HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */

function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;

/***/ }),

/***/ 4782:
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */

function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

module.exports = isIndex;

/***/ }),

/***/ 4480:
/***/ ((module) => {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

module.exports = isKeyable;

/***/ }),

/***/ 9249:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var coreJsData = __webpack_require__(1741);
/** Used to detect methods masquerading as native. */


var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

module.exports = isMasked;

/***/ }),

/***/ 2803:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */

function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
  return value === proto;
}

module.exports = isPrototype;

/***/ }),

/***/ 3708:
/***/ ((module) => {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;

/***/ }),

/***/ 6993:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(6213);
/** Used for built-in method references. */


var arrayProto = Array.prototype;
/** Built-in value references. */

var splice = arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  var lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  --this.size;
  return true;
}

module.exports = listCacheDelete;

/***/ }),

/***/ 286:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(6213);
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;

/***/ }),

/***/ 1678:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(6213);
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;

/***/ }),

/***/ 9743:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(6213);
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */


function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
}

module.exports = listCacheSet;

/***/ }),

/***/ 6977:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Hash = __webpack_require__(1979),
    ListCache = __webpack_require__(2768),
    Map = __webpack_require__(4804);
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */


function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

module.exports = mapCacheClear;

/***/ }),

/***/ 7474:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(404);
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;

/***/ }),

/***/ 727:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(404);
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;

/***/ }),

/***/ 3653:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(404);
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;

/***/ }),

/***/ 6140:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(404);
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */


function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;

/***/ }),

/***/ 8961:
/***/ ((module) => {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);
  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;

/***/ }),

/***/ 6326:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(3203);
/* Built-in method references that are verified to be native. */


var nativeCreate = getNative(Object, 'create');
module.exports = nativeCreate;

/***/ }),

/***/ 3865:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(5290);
/* Built-in method references for those with the same name as other `lodash` methods. */


var nativeKeys = overArg(Object.keys, Object);
module.exports = nativeKeys;

/***/ }),

/***/ 1985:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(8556);
/** Detect free variable `exports`. */


var freeExports =  true && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */

var freeProcess = moduleExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */

var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    } // Legacy `process.binding('util')` for Node.js < 10.


    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();

module.exports = nodeUtil;

/***/ }),

/***/ 2299:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

/***/ }),

/***/ 5290:
/***/ ((module) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;

/***/ }),

/***/ 4362:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(8556);
/** Detect free variable `self`. */


var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;

/***/ }),

/***/ 9911:
/***/ ((module) => {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */

function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);

  return this;
}

module.exports = setCacheAdd;

/***/ }),

/***/ 7447:
/***/ ((module) => {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;

/***/ }),

/***/ 6983:
/***/ ((module) => {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);
  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;

/***/ }),

/***/ 7553:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(2768);
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */


function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}

module.exports = stackClear;

/***/ }),

/***/ 6038:
/***/ ((module) => {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);
  this.size = data.size;
  return result;
}

module.exports = stackDelete;

/***/ }),

/***/ 2397:
/***/ ((module) => {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;

/***/ }),

/***/ 2421:
/***/ ((module) => {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;

/***/ }),

/***/ 2936:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(2768),
    Map = __webpack_require__(4804),
    MapCache = __webpack_require__(8423);
/** Used as the size to enable large array optimizations. */


var LARGE_ARRAY_SIZE = 200;
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */

function stackSet(key, value) {
  var data = this.__data__;

  if (data instanceof ListCache) {
    var pairs = data.__data__;

    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }

    data = this.__data__ = new MapCache(pairs);
  }

  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;

/***/ }),

/***/ 1214:
/***/ ((module) => {

/** Used for built-in method references. */
var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */

function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}

module.exports = toSource;

/***/ }),

/***/ 7950:
/***/ ((module) => {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

module.exports = eq;

/***/ }),

/***/ 9246:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsArguments = __webpack_require__(1075),
    isObjectLike = __webpack_require__(4939);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Built-in value references. */

var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */

var isArguments = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
module.exports = isArguments;

/***/ }),

/***/ 3670:
/***/ ((module) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
module.exports = isArray;

/***/ }),

/***/ 6175:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(3626),
    isLength = __webpack_require__(7100);
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */


function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;

/***/ }),

/***/ 2343:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(4362),
    stubFalse = __webpack_require__(3444);
/** Detect free variable `exports`. */


var freeExports =  true && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */

var Buffer = moduleExports ? root.Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */

var isBuffer = nativeIsBuffer || stubFalse;
module.exports = isBuffer;

/***/ }),

/***/ 7120:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqual = __webpack_require__(9856);
/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */


function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;

/***/ }),

/***/ 3626:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(1185),
    isObject = __webpack_require__(71);
/** `Object#toString` result references. */


var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction(value) {
  if (!isObject(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;

/***/ }),

/***/ 7100:
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */

function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

/***/ }),

/***/ 71:
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

/***/ }),

/***/ 4939:
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;

/***/ }),

/***/ 1589:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsTypedArray = __webpack_require__(3638),
    baseUnary = __webpack_require__(9081),
    nodeUtil = __webpack_require__(1985);
/* Node.js helper references. */


var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */

var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
module.exports = isTypedArray;

/***/ }),

/***/ 3225:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(8083),
    baseKeys = __webpack_require__(7521),
    isArrayLike = __webpack_require__(6175);
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */


function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;

/***/ }),

/***/ 4043:
/***/ ((module) => {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;

/***/ }),

/***/ 3444:
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

;// CONCATENATED MODULE: external "kolmafia"
const external_kolmafia_namespaceObject = require("kolmafia");
;// CONCATENATED MODULE: ./node_modules/libram/dist/template-string.js
var concatTemplateString = function concatTemplateString(literals) {
  for (var _len = arguments.length, placeholders = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    placeholders[_key - 1] = arguments[_key];
  }

  return literals.reduce((acc, literal, i) => acc + literal + (placeholders[i] || ""), "");
};

var createSingleConstant = Type => function (literals) {
  for (var _len2 = arguments.length, placeholders = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    placeholders[_key2 - 1] = arguments[_key2];
  }

  var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
  return Type.get(input);
};

var createPluralConstant = Type => function (literals) {
  for (var _len3 = arguments.length, placeholders = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    placeholders[_key3 - 1] = arguments[_key3];
  }

  var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));

  if (input === "") {
    return Type.all();
  }

  return Type.get(input.split(/\s*,\s*/));
};
/**
 * A Bounty specified by name.
 *
 * @category In-game constant
 */


var $bounty = createSingleConstant(Bounty);
/**
 * A list of Bounties specified by a comma-separated list of names.
 * For a list of all possible Bounties, leave the template string blank.
 *
 * @category In-game constant
 */

var $bounties = createPluralConstant(Bounty);
/**
 * A Class specified by name.
 *
 * @category In-game constant
 */

var template_string_$class = createSingleConstant(Class);
/**
 * A list of Classes specified by a comma-separated list of names.
 * For a list of all possible Classes, leave the template string blank.
 *
 * @category In-game constant
 */

var $classes = createPluralConstant(Class);
/**
 * A Coinmaster specified by name.
 *
 * @category In-game constant
 */

var $coinmaster = createSingleConstant(Coinmaster);
/**
 * A list of Coinmasters specified by a comma-separated list of names.
 * For a list of all possible Coinmasters, leave the template string blank.
 *
 * @category In-game constant
 */

var $coinmasters = createPluralConstant(Coinmaster);
/**
 * An Effect specified by name.
 *
 * @category In-game constant
 */

var template_string_$effect = createSingleConstant(Effect);
/**
 * A list of Effects specified by a comma-separated list of names.
 * For a list of all possible Effects, leave the template string blank.
 *
 * @category In-game constant
 */

var $effects = createPluralConstant(Effect);
/**
 * An Element specified by name.
 *
 * @category In-game constant
 */

var $element = createSingleConstant(Element);
/**
 * A list of Elements specified by a comma-separated list of names.
 * For a list of all possible Elements, leave the template string blank.
 *
 * @category In-game constant
 */

var $elements = createPluralConstant(Element);
/**
 * A Familiar specified by name.
 *
 * @category In-game constant
 */

var template_string_$familiar = createSingleConstant(Familiar);
/**
 * A list of Familiars specified by a comma-separated list of names.
 * For a list of all possible Familiars, leave the template string blank.
 *
 * @category In-game constant
 */

var $familiars = createPluralConstant(Familiar);
/**
 * An Item specified by name.
 *
 * @category In-game constant
 */

var template_string_$item = createSingleConstant(Item);
/**
 * A list of Items specified by a comma-separated list of names.
 * For a list of all possible Items, leave the template string blank.
 *
 * @category In-game constant
 */

var template_string_$items = createPluralConstant(Item);
/**
 * A Location specified by name.
 *
 * @category In-game constant
 */

var template_string_$location = createSingleConstant(Location);
/**
 * A list of Locations specified by a comma-separated list of names.
 * For a list of all possible Locations, leave the template string blank.
 *
 * @category In-game constant
 */

var $locations = createPluralConstant(Location);
/**
 * A Monster specified by name.
 *
 * @category In-game constant
 */

var $monster = createSingleConstant(Monster);
/**
 * A list of Monsters specified by a comma-separated list of names.
 * For a list of all possible Monsters, leave the template string blank.
 *
 * @category In-game constant
 */

var $monsters = createPluralConstant(Monster);
/**
 * A Phylum specified by name.
 *
 * @category In-game constant
 */

var $phylum = createSingleConstant(Phylum);
/**
 * A list of Phyla specified by a comma-separated list of names.
 * For a list of all possible Phyla, leave the template string blank.
 *
 * @category In-game constant
 */

var $phyla = createPluralConstant(Phylum);
/**
 * A Servant specified by name.
 *
 * @category In-game constant
 */

var $servant = createSingleConstant(Servant);
/**
 * A list of Servants specified by a comma-separated list of names.
 * For a list of all possible Servants, leave the template string blank.
 *
 * @category In-game constant
 */

var $servants = createPluralConstant(Servant);
/**
 * A Skill specified by name.
 *
 * @category In-game constant
 */

var $skill = createSingleConstant(Skill);
/**
 * A list of Skills specified by a comma-separated list of names.
 * For a list of all possible Skills, leave the template string blank.
 *
 * @category In-game constant
 */

var $skills = createPluralConstant(Skill);
/**
 * A Slot specified by name.
 *
 * @category In-game constant
 */

var template_string_$slot = createSingleConstant(Slot);
/**
 * A list of Slots specified by a comma-separated list of names.
 * For a list of all possible Slots, leave the template string blank.
 *
 * @category In-game constant
 */

var $slots = createPluralConstant(Slot);
/**
 * A Stat specified by name.
 *
 * @category In-game constant
 */

var $stat = createSingleConstant(Stat);
/**
 * A list of Stats specified by a comma-separated list of names.
 * For a list of all possible Stats, leave the template string blank.
 *
 * @category In-game constant
 */

var $stats = createPluralConstant(Stat);
/**
 * A Thrall specified by name.
 *
 * @category In-game constant
 */

var $thrall = createSingleConstant(Thrall);
/**
 * A list of Thralls specified by a comma-separated list of names.
 * For a list of all possible Thralls, leave the template string blank.
 *
 * @category In-game constant
 */

var $thralls = createPluralConstant(Thrall);
// EXTERNAL MODULE: ./node_modules/libram/node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__(4875);
;// CONCATENATED MODULE: ./node_modules/libram/dist/lib.js
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;

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
 * Returns the current maximum Accordion Thief songs the player can have in their head
 *
 * @category General
 */

function getSongLimit() {
  return 3 + (booleanModifier("Four Songs") ? 1 : 0) + numericModifier("Additional Song");
}
/**
 * Return whether the Skill or Effect provided is an Accordion Thief song
 *
 * @category General
 * @param skillOrEffect The Skill or Effect
 */

function isSong(skillOrEffect) {
  var skill = skillOrEffect instanceof Effect ? toSkill(skillOrEffect) : skillOrEffect;
  return skill.class === $class(_templateObject || (_templateObject = _taggedTemplateLiteral(["Accordion Thief"]))) && skill.buff;
}
/**
 * List all active Effects
 *
 * @category General
 */

function getActiveEffects() {
  return Object.keys(myEffects()).map(e => Effect.get(e));
}
/**
 * List currently active Accordion Thief songs
 *
 * @category General
 */

function getActiveSongs() {
  return getActiveEffects().filter(isSong);
}
/**
 * List number of active Accordion Thief songs
 *
 * @category General
 */

function getSongCount() {
  return getActiveSongs().length;
}
/**
 * Returns true if the player can remember another Accordion Thief song
 *
 * @category General
 * @param quantity Number of songs to test the space for
 */

function canRememberSong() {
  var quantity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return getSongLimit() - getSongCount() >= quantity;
}
/**
 * Return the locations in which the given monster can be encountered naturally
 *
 * @category General
 * @param monster Monster to find
 */

function getMonsterLocations(monster) {
  return Location.all().filter(location => monster.name in appearanceRates(location));
}
/**
 * Return the player's remaining liver space
 *
 * @category General
 */

function getRemainingLiver() {
  return inebrietyLimit() - myInebriety();
}
/**
 * Return the player's remaining stomach space
 *
 * @category General
 */

function getRemainingStomach() {
  return fullnessLimit() - myFullness();
}
/**
 * Return the player's remaining spleen space
 *
 * @category General
 */

function getRemainingSpleen() {
  return spleenLimit() - mySpleenUse();
}
/**
 * Return whether the player "has" any entity which one could feasibly "have".
 *
 * @category General
 * @param thing Thing to check
 * @param quantity Number to check that the player has
 */

function lib_have(thing) {
  var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (thing instanceof Effect) {
    return (0,external_kolmafia_namespaceObject.haveEffect)(thing) >= quantity;
  }

  if (thing instanceof Familiar) {
    return (0,external_kolmafia_namespaceObject.haveFamiliar)(thing);
  }

  if (thing instanceof Item) {
    return (0,external_kolmafia_namespaceObject.availableAmount)(thing) >= quantity;
  }

  if (thing instanceof Servant) {
    return (0,external_kolmafia_namespaceObject.haveServant)(thing);
  }

  if (thing instanceof Skill) {
    return (0,external_kolmafia_namespaceObject.haveSkill)(thing);
  }

  if (thing instanceof Thrall) {
    var thrall = (0,external_kolmafia_namespaceObject.myThrall)();
    return thrall.id === thing.id && thrall.level >= quantity;
  }

  return false;
}
/**
 * Return whether an item is in the player's campground
 *
 * @category General
 * @param item The item mafia uses to represent the campground item
 */

function lib_haveInCampground(item) {
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
 * Return whether the player has the queried counter
 *
 * @category General
 */

function haveCounter(counterName) {
  var minTurns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var maxTurns = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;
  return (0,external_kolmafia_namespaceObject.getCounters)(counterName, minTurns, maxTurns) === counterName;
}
/**
 * Return whether the player has the queried wandering counter
 *
 * @category Wanderers
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
 * Returns whether the player will encounter a vote wanderer on the next turn,
 * providing an "I Voted!" sticker is equipped.
 *
 * @category Wanderers
 */

function isVoteWandererNow() {
  return totalTurnsPlayed() % 11 == 1;
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
 */

function isWandererNow(wanderer) {
  if (deterministicWanderers.includes(wanderer)) {
    return haveCounter(wanderer, 0, 0);
  }

  if (wanderer == Wanderer.Kramco) {
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
 * Returns the float chance the player will encounter a sausage goblin on the
 * next turn, providing the Kramco Sausage-o-Matic is equipped.
 *
 * @category Wanderers
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
 * Returns the float chance the player will encounter an Artistic Goth Kid or
 * Mini-Hipster wanderer on the next turn, providing a familiar is equipped.
 *
 * NOTE: You must complete one combat with the Artistic Goth Kid before you
 * can encounter any wanderers. Consequently,ƒ the first combat with the
 * Artist Goth Kid is effectively 0% chance to encounter a wanderer.
 *
 * @category Wanderers
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
 * Returns the float chance the player will encounter the queried wanderer
 * on the next turn.
 *
 * @category Wanderers
 * @param wanderer Wanderer to check
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
 * Returns true if the player's current familiar is equal to the one supplied
 *
 * @category General
 * @param familiar Familiar to check
 */

function isCurrentFamiliar(familiar) {
  return myFamiliar() === familiar;
}
/**
 * Returns the fold group (if any) of which the given item is a part
 *
 * @category General
 * @param item Item that is part of the required fold group
 */

function getFoldGroup(item) {
  return Object.entries(getRelated(item, "fold")).sort((_ref, _ref2) => {
    var _ref3 = _slicedToArray(_ref, 2),
        a = _ref3[1];

    var _ref4 = _slicedToArray(_ref2, 2),
        b = _ref4[1];

    return a - b;
  }).map(_ref5 => {
    var _ref6 = _slicedToArray(_ref5, 1),
        i = _ref6[0];

    return Item.get(i);
  });
}
/**
 * Returns the zap group (if any) of which the given item is a part
 *
 * @category General
 * @param item Item that is part of the required zap group
 */

function getZapGroup(item) {
  return Object.keys(getRelated(item, "zap")).map(i => Item.get(i));
}
/**
 * Get a map of banished monsters keyed by what banished them
 *
 * @category General
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
      var banisherObject = [Item.get("none"), null].includes(banisherItem) ? Skill.get(banisher) : banisherItem;
      result.set(banisherObject, Monster.get(foe));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return result;
}
/**
 * Returns true if the item is usable
 *
 * This function will be an ongoing work in progress
 *
 * @param item Item to check
 */

function canUse(item) {
  var path = myPath();

  if (path !== "Nuclear Autumn") {
    if ($items(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Shrieking Weasel holo-record, Power-Guy 2000 holo-record, Lucky Strikes holo-record, EMD holo-record, Superdrifter holo-record, The Pigs holo-record, Drunk Uncles holo-record"]))).includes(item)) {
      return false;
    }
  }

  if (path === "G-Lover") {
    if (!item.name.toLowerCase().includes("g")) return false;
  }

  if (path === "Bees Hate You") {
    if (item.name.toLowerCase().includes("b")) return false;
  }

  return true;
}
/**
 * Turn KoLmafia `none`s to JavaScript `null`s
 *
 * @param thing Thing that can have a mafia "none" value
 */

function noneToNull(thing) {
  if (thing instanceof Effect) {
    return thing === Effect.get("none") ? null : thing;
  }

  if (thing instanceof Familiar) {
    return thing === Familiar.get("none") ? null : thing;
  }

  if (thing instanceof Item) {
    return thing === Item.get("none") ? null : thing;
  }

  return thing;
}
/**
 * Return the average value from the sort of range that KoLmafia encodes as a string
 *
 * @param range KoLmafia-style range string
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
 * Return average adventures expected from consuming an item
 *
 * If item is not a consumable, will just return "0".
 *
 * @param item Consumable item
 */

function getAverageAdventures(item) {
  return getAverage(item.adventures);
}
/**
 * Remove an effect
 *
 * @category General
 * @param effect Effect to remove
 */

function uneffect(effect) {
  return (0,external_kolmafia_namespaceObject.cliExecute)("uneffect ".concat(effect.name));
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
 * Return the step as a number for a given quest property.
 *
 * @param questName Name of quest property to check.
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

  function EnsureError(cause) {
    var _this;

    _classCallCheck(this, EnsureError);

    _this = _super.call(this, "Failed to ensure ".concat(cause.name, "!"));
    _this.name = "Ensure Error";
    return _this;
  }

  return EnsureError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * Tries to get an effect using the default method
 * @param ef effect to try to get
 * @param turns turns to aim for; default of 1
 */

function ensureEffect(ef) {
  var turns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (haveEffect(ef) < turns) {
    if (!cliExecute(ef.default) || haveEffect(ef) === 0) {
      throw new EnsureError(ef);
    }
  }
}
var valueMap = new Map();
var MALL_VALUE_MODIFIER = 0.9;
/**
 * Returns the average value--based on mallprice and autosell--of a collection of items
 * @param items items whose value you care about
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
 * Returns the weight-coefficient of any leprechaunning that this familiar may find itself doing
 * Assumes the familiar is nude and thus fails for hatrack & pantsrack
 * For the Mutant Cactus Bud, returns the efficacy-multiplier instead
 * @param familiar The familiar whose leprechaun multiplier you're interested in
 */

function findLeprechaunMultiplier(familiar) {
  if (familiar === $familiar(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Mutant Cactus Bud"])))) return numericModifier(familiar, "Leprechaun Effectiveness", 1, $item(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["none"]))));
  var meatBonus = numericModifier(familiar, "Meat Drop", 1, $item(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["none"]))));
  if (meatBonus === 0) return 0;
  return Math.pow(Math.sqrt(meatBonus / 2 + 55 / 4 + 3) - Math.sqrt(55) / 2, 2);
}
/**
 * Returns the weight-coefficient of any baby gravy fairying that this familiar may find itself doing
 * Assumes the familiar is nude and thus fails for hatrack & pantsrack
 * For the Mutant Fire Ant, returns the efficacy-multiplier instead
 * @param familiar The familiar whose fairy multiplier you're interested in
 */

function findFairyMultiplier(familiar) {
  if (familiar === $familiar(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["Mutant Fire Ant"])))) return numericModifier(familiar, "Fairy Effectiveness", 1, $item(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["none"]))));
  var itemBonus = numericModifier(familiar, "Item Drop", 1, $item(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["none"]))));
  if (itemBonus === 0) return 0;
  return Math.pow(Math.sqrt(itemBonus + 55 / 4 + 3) - Math.sqrt(55) / 2, 2);
}
var holidayWanderers = new Map([["El Dia De Los Muertos Borrachos", $monsters(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["Novia Cad\xE1ver, Novio Cad\xE1ver, Padre Cad\xE1ver, Persona Inocente Cad\xE1ver"])))], ["Feast of Boris", $monsters(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["Candied Yam Golem, Malevolent Tofurkey, Possessed Can of Cranberry Sauce, Stuffing Golem"])))], ["Talk Like a Pirate Day", $monsters(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["ambulatory pirate, migratory pirate, peripatetic pirate"])))]]);
function getTodaysHolidayWanderers() {
  return (0,external_kolmafia_namespaceObject.holiday)().split("/").map(holiday => {
    var _holidayWanderers$get;

    return (_holidayWanderers$get = holidayWanderers.get(holiday)) !== null && _holidayWanderers$get !== void 0 ? _holidayWanderers$get : [];
  }).flat();
}
// EXTERNAL MODULE: ./node_modules/libram/node_modules/core-js/modules/es.object.from-entries.js
var es_object_from_entries = __webpack_require__(8819);
;// CONCATENATED MODULE: ./node_modules/libram/dist/propertyTyping.js
function isNumericProperty(property, value) {
  return !isNaN(Number(value)) && !isNaN(parseFloat(value));
}
var numericOrStringProperties = (/* unused pure expression or super */ null && (["statusEngineering", "statusGalley", "statusMedbay", "statusMorgue", "statusNavigation", "statusScienceLab", "statusSonar", "statusSpecialOps", "statusWasteProcessing"]));
var choiceAdventurePattern = /^choiceAdventure\d+$/;
function isNumericOrStringProperty(property) {
  if (numericOrStringProperties.includes(property)) return true;
  return choiceAdventurePattern.test(property);
}
var fakeBooleans = ["trackVoteMonster", "_jickJarAvailable"];
function isBooleanProperty(property, value) {
  if (fakeBooleans.includes(property)) return false;
  return ["true", "false"].includes(value);
}
var otherLocations = ["nextSpookyravenElizabethRoom", "nextSpookyravenStephenRoom", "sourceOracleTarget"];
function isLocationProperty(property) {
  return otherLocations.includes(property) || property.endsWith("Location");
}
var otherMonsters = ["romanticTarget", "yearbookCameraTarget"];
var fakeMonsters = ["trackVoteMonster"];
function isMonsterProperty(property) {
  if (otherMonsters.includes(property)) return true;
  return property.endsWith("Monster") && !fakeMonsters.includes(property);
}
function isFamiliarProperty(property) {
  return property.endsWith("Familiar");
}
var statProps = (/* unused pure expression or super */ null && (["nsChallenge1", "shrugTopper", "snojoSetting"]));
function isStatProperty(property) {
  return statProps.includes(property);
}
var phylumProps = ["dnaSyringe"];
function isPhylumProperty(property) {
  return phylumProps.includes(property) || property.endsWith("Phylum");
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/property.js
function property_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function property_slicedToArray(arr, i) { return property_arrayWithHoles(arr) || property_iterableToArrayLimit(arr, i) || property_unsupportedIterableToArray(arr, i) || property_nonIterableRest(); }

function property_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function property_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return property_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return property_arrayLikeToArray(o, minLen); }

function property_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function property_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function property_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var createPropertyGetter = transform => (property, default_) => {
  var value = (0,external_kolmafia_namespaceObject.getProperty)(property);

  if (default_ !== undefined && value === "") {
    return default_;
  }

  return transform(value, property);
};

var createMafiaClassPropertyGetter = Type => createPropertyGetter(value => {
  if (value === "") return null;
  var v = Type.get(value);
  return v === Type.get("none") ? null : v;
});

var getString = createPropertyGetter(value => value);
var getCommaSeparated = createPropertyGetter(value => value.split(/, ?/));
var getBoolean = createPropertyGetter(value => value === "true");
var getNumber = createPropertyGetter(value => Number(value));
var getBounty = createMafiaClassPropertyGetter(Bounty);
var getClass = createMafiaClassPropertyGetter(Class);
var getCoinmaster = createMafiaClassPropertyGetter(Coinmaster);
var getEffect = createMafiaClassPropertyGetter(Effect);
var getElement = createMafiaClassPropertyGetter(Element);
var getFamiliar = createMafiaClassPropertyGetter(Familiar);
var getItem = createMafiaClassPropertyGetter(Item);
var getLocation = createMafiaClassPropertyGetter(Location);
var getMonster = createMafiaClassPropertyGetter(Monster);
var getPhylum = createMafiaClassPropertyGetter(Phylum);
var getServant = createMafiaClassPropertyGetter(Servant);
var getSkill = createMafiaClassPropertyGetter(Skill);
var getSlot = createMafiaClassPropertyGetter(Slot);
var getStat = createMafiaClassPropertyGetter(Stat);
var getThrall = createMafiaClassPropertyGetter(Thrall);
function property_get(property, _default) {
  var value = getString(property);

  if (isMonsterProperty(property)) {
    return getMonster(property, _default);
  }

  if (isLocationProperty(property)) {
    return getLocation(property, _default);
  }

  if (value === "") {
    return _default === undefined ? "" : _default;
  }

  if (isBooleanProperty(property, value)) {
    return getBoolean(property, _default);
  }

  if (isNumericProperty(property, value)) {
    return getNumber(property, _default);
  }

  if (isPhylumProperty(property)) {
    return getPhylum(property);
  }

  return value;
}

function _set(property, value) {
  var stringValue = value === null ? "" : value.toString();
  (0,external_kolmafia_namespaceObject.setProperty)(property, stringValue);
}


function setProperties(properties) {
  for (var _i = 0, _Object$entries = Object.entries(properties); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = property_slicedToArray(_Object$entries[_i], 2),
        prop = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    _set(prop, value);
  }
}
function withProperties(properties, callback) {
  var propertiesBackup = Object.fromEntries(Object.entries(properties).map(_ref => {
    var _ref2 = property_slicedToArray(_ref, 1),
        prop = _ref2[0];

    return [prop, property_get(prop)];
  }));
  setProperties(properties);

  try {
    callback();
  } finally {
    setProperties(propertiesBackup);
  }
}
function withProperty(property, value, callback) {
  withProperties(_defineProperty({}, property, value), callback);
}
function withChoices(choices, callback) {
  var properties = Object.fromEntries(Object.entries(choices).map(_ref3 => {
    var _ref4 = property_slicedToArray(_ref3, 2),
        choice = _ref4[0],
        option = _ref4[1];

    return ["choiceAdventure".concat(choice), option];
  }));
  withProperties(properties, callback);
}
function withChoice(choice, value, callback) {
  withChoices(_defineProperty({}, choice, value), callback);
}
var PropertiesManager = /*#__PURE__*/function () {
  function PropertiesManager() {
    property_classCallCheck(this, PropertiesManager);

    _defineProperty(this, "properties", void 0);

    this.properties = {};
  }

  _createClass(PropertiesManager, [{
    key: "set",
    value: function set(propertiesToSet) {
      for (var _i2 = 0, _Object$entries2 = Object.entries(propertiesToSet); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = property_slicedToArray(_Object$entries2[_i2], 2),
            propertyName = _Object$entries2$_i[0],
            propertyValue = _Object$entries2$_i[1];

        if (this.properties[propertyName] === undefined) {
          this.properties[propertyName] = property_get(propertyName);
        }

        _set(propertyName, propertyValue);
      }
    }
  }, {
    key: "setChoices",
    value: function setChoices(choicesToSet) {
      this.set(Object.fromEntries(Object.entries(choicesToSet).map(_ref5 => {
        var _ref6 = property_slicedToArray(_ref5, 2),
            choiceNumber = _ref6[0],
            choiceValue = _ref6[1];

        return ["choiceAdventure".concat(choiceNumber), choiceValue];
      })));
    }
  }, {
    key: "resetAll",
    value: function resetAll() {
      Object.entries(this.properties).forEach(_ref7 => {
        var _ref8 = property_slicedToArray(_ref7, 2),
            propertyName = _ref8[0],
            propertyValue = _ref8[1];

        return _set(propertyName, propertyValue);
      });
    }
  }]);

  return PropertiesManager;
}();
;// CONCATENATED MODULE: ./node_modules/libram/dist/combat.js
var combat_templateObject, combat_templateObject2;

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = combat_getPrototypeOf(object); if (object === null) break; } return object; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || combat_unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function combat_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return combat_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return combat_arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return combat_arrayLikeToArray(arr); }

function combat_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function combat_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function combat_createClass(Constructor, protoProps, staticProps) { if (protoProps) combat_defineProperties(Constructor.prototype, protoProps); if (staticProps) combat_defineProperties(Constructor, staticProps); return Constructor; }

function combat_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function combat_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function combat_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) combat_setPrototypeOf(subClass, superClass); }

function combat_createSuper(Derived) { var hasNativeReflectConstruct = combat_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = combat_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = combat_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return combat_possibleConstructorReturn(this, result); }; }

function combat_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return combat_assertThisInitialized(self); }

function combat_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function combat_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; combat_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !combat_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return combat_construct(Class, arguments, combat_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return combat_setPrototypeOf(Wrapper, Class); }; return combat_wrapNativeSuper(Class); }

function combat_construct(Parent, args, Class) { if (combat_isNativeReflectConstruct()) { combat_construct = Reflect.construct; } else { combat_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) combat_setPrototypeOf(instance, Class.prototype); return instance; }; } return combat_construct.apply(null, arguments); }

function combat_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function combat_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function combat_setPrototypeOf(o, p) { combat_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return combat_setPrototypeOf(o, p); }

function combat_getPrototypeOf(o) { combat_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return combat_getPrototypeOf(o); }

function combat_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var MACRO_NAME = "Script Autoattack Macro";
/**
 * Get the KoL native ID of the macro with name Script Autoattack Macro.
 *
 * @category Combat
 * @returns {number} The macro ID.
 */

function getMacroId() {
  var macroMatches = (0,external_kolmafia_namespaceObject.xpath)((0,external_kolmafia_namespaceObject.visitUrl)("account_combatmacros.php"), "//select[@name=\"macroid\"]/option[text()=\"".concat(MACRO_NAME, "\"]/@value"));

  if (macroMatches.length === 0) {
    (0,external_kolmafia_namespaceObject.visitUrl)("account_combatmacros.php?action=new");
    var newMacroText = (0,external_kolmafia_namespaceObject.visitUrl)("account_combatmacros.php?macroid=0&name=".concat(MACRO_NAME, "&macrotext=abort&action=save"));
    return parseInt((0,external_kolmafia_namespaceObject.xpath)(newMacroText, "//input[@name=macroid]/@value")[0], 10);
  } else {
    return parseInt(macroMatches[0], 10);
  }
}

function itemOrNameToItem(itemOrName) {
  return typeof itemOrName === "string" ? Item.get(itemOrName) : itemOrName;
}

var substringCombatItems = template_string_$items(combat_templateObject || (combat_templateObject = combat_taggedTemplateLiteral(["spider web, really sticky spider web, dictionary, NG, Cloaca-Cola, yo-yo, top, ball, kite, yo, red potion, blue potion, adder, red button, pile of sand, mushroom, deluxe mushroom"])));
var substringCombatSkills = $skills(combat_templateObject2 || (combat_templateObject2 = combat_taggedTemplateLiteral(["Shoot, Thrust-Smack, Headbutt, Toss, Sing, Disarm, LIGHT, BURN, Extract, Meteor Shower, Cleave, Boil, Slice, Rainbow"])));

function itemOrItemsBallsMacroName(itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.map(itemOrItemsBallsMacroName).join(", ");
  } else {
    var item = itemOrNameToItem(itemOrItems);
    return !substringCombatItems.includes(item) ? item.name : (0,external_kolmafia_namespaceObject.toInt)(item).toString();
  }
}

function itemOrItemsBallsMacroPredicate(itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.map(itemOrItemsBallsMacroPredicate).join(" && ");
  } else {
    return "hascombatitem ".concat(itemOrItems);
  }
}

function skillOrNameToSkill(skillOrName) {
  if (typeof skillOrName === "string") {
    return Skill.get(skillOrName);
  } else {
    return skillOrName;
  }
}

function skillBallsMacroName(skillOrName) {
  var skill = skillOrNameToSkill(skillOrName);
  return skill.name.match(/^[A-Za-z ]+$/) && !substringCombatSkills.includes(skill) ? skill.name : (0,external_kolmafia_namespaceObject.toInt)(skill);
}

var InvalidMacroError = /*#__PURE__*/function (_Error) {
  combat_inherits(InvalidMacroError, _Error);

  var _super = combat_createSuper(InvalidMacroError);

  function InvalidMacroError() {
    combat_classCallCheck(this, InvalidMacroError);

    return _super.apply(this, arguments);
  }

  return InvalidMacroError;
}( /*#__PURE__*/combat_wrapNativeSuper(Error));
/**
 * BALLS macro builder for direct submission to KoL.
 * Create a new macro with `new Macro()` and add steps using the instance methods.
 * Uses a fluent interface, so each step returns the object for easy chaining of steps.
 * Each method is also defined as a static method that creates a new Macro with only that step.
 * For example, you can do `Macro.skill('Saucestorm').attack()`.
 */

var combat_Macro = /*#__PURE__*/function () {
  function Macro() {
    combat_classCallCheck(this, Macro);

    combat_defineProperty(this, "components", []);
  }

  combat_createClass(Macro, [{
    key: "toString",
    value:
    /**
     * Convert macro to string.
     */
    function toString() {
      return this.components.join(";");
    }
    /**
     * Save a macro to a Mafia property for use in a consult script.
     */

  }, {
    key: "save",
    value: function save() {
      _set(Macro.SAVED_MACRO_PROPERTY, this.toString());
    }
    /**
     * Load a saved macro from the Mafia property.
     */

  }, {
    key: "step",
    value:
    /**
     * Statefully add one or several steps to a macro.
     * @param nextSteps The steps to add to the macro.
     * @returns {Macro} This object itself.
     */
    function step() {
      var _ref;

      for (var _len = arguments.length, nextSteps = new Array(_len), _key = 0; _key < _len; _key++) {
        nextSteps[_key] = arguments[_key];
      }

      var nextStepsStrings = (_ref = []).concat.apply(_ref, _toConsumableArray(nextSteps.map(x => x instanceof Macro ? x.components : [x])));

      this.components = [].concat(_toConsumableArray(this.components), _toConsumableArray(nextStepsStrings.filter(s => s.length > 0)));
      return this;
    }
    /**
     * Statefully add one or several steps to a macro.
     * @param nextSteps The steps to add to the macro.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "submit",
    value:
    /**
     * Submit the built macro to KoL. Only works inside combat.
     */
    function submit() {
      var final = this.toString();
      return (0,external_kolmafia_namespaceObject.visitUrl)("fight.php?action=macro&macrotext=".concat((0,external_kolmafia_namespaceObject.urlEncode)(final)), true, true);
    }
    /**
     * Set this macro as a KoL native autoattack.
     */

  }, {
    key: "setAutoAttack",
    value: function setAutoAttack() {
      if (Macro.cachedMacroId === null) Macro.cachedMacroId = getMacroId();

      if ((0,external_kolmafia_namespaceObject.getAutoAttack)() === 99000000 + Macro.cachedMacroId && this.toString() === Macro.cachedAutoAttack) {
        // This macro is already set. Don"t make the server request.
        return;
      }

      (0,external_kolmafia_namespaceObject.visitUrl)("account_combatmacros.php?macroid=".concat(Macro.cachedMacroId, "&name=").concat((0,external_kolmafia_namespaceObject.urlEncode)(MACRO_NAME), "&macrotext=").concat((0,external_kolmafia_namespaceObject.urlEncode)(this.toString()), "&action=save"), true, true);
      (0,external_kolmafia_namespaceObject.visitUrl)("account.php?am=1&action=autoattack&value=".concat(99000000 + Macro.cachedMacroId, "&ajax=1"));
      Macro.cachedAutoAttack = this.toString();
    }
    /**
     * Add an "abort" step to this macro.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "abort",
    value: function abort() {
      return this.step("abort");
    }
    /**
     * Create a new macro with an "abort" step.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "runaway",
    value:
    /**
     * Add a "runaway" step to this macro.
     * @returns {Macro} This object itself.
     */
    function runaway() {
      return this.step("runaway");
    }
    /**
     * Create a new macro with an "runaway" step.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "if_",
    value:
    /**
     * Add an "if" statement to this macro.
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */
    function if_(condition, ifTrue) {
      var ballsCondition = "";

      if (condition instanceof Monster) {
        ballsCondition = "monsterid ".concat(condition.id);
      } else if (condition instanceof Effect) {
        ballsCondition = "haseffect ".concat((0,external_kolmafia_namespaceObject.toInt)(condition));
      } else if (condition instanceof Skill) {
        ballsCondition = "hasskill ".concat(skillBallsMacroName(condition));
      } else if (condition instanceof Item) {
        if (!condition.combat) {
          throw new InvalidMacroError("Item ".concat(condition, " cannot be made a valid BALLS predicate (it is not combat-usable)"));
        }

        ballsCondition = "hascombatitem ".concat(itemOrItemsBallsMacroName(condition));
      } else if (condition instanceof Location) {
        var snarfblat = condition.id;

        if (snarfblat < 1) {
          throw new InvalidMacroError("Location ".concat(condition, " cannot be made a valid BALLS predicate (it has no location id)"));
        }

        ballsCondition = "snarfblat ".concat(snarfblat);
      } else if (condition instanceof Class) {
        if ((0,external_kolmafia_namespaceObject.toInt)(condition) > 6) {
          throw new InvalidMacroError("Class ".concat(condition, " cannot be made a valid BALLS predicate (it is not a standard class)"));
        }

        ballsCondition = condition.toString().replaceAll(" ", "").toLowerCase();
      } else if (condition instanceof Stat) {
        ballsCondition = "".concat(condition.toString().toLowerCase(), "class");
      } else {
        ballsCondition = condition;
      }

      return this.step("if ".concat(ballsCondition)).step(ifTrue).step("endif");
    }
    /**
     * Create a new macro with an "if" statement.
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "while_",
    value:
    /**
     * Add a "while" statement to this macro.
     * @param condition The BALLS condition for the if statement.
     * @param contents Loop to repeat while the condition is true.
     * @returns {Macro} This object itself.
     */
    function while_(condition, contents) {
      return this.step("while ".concat(condition)).step(contents).step("endwhile");
    }
    /**
     * Create a new macro with a "while" statement.
     * @param condition The BALLS condition for the if statement.
     * @param contents Loop to repeat while the condition is true.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "externalIf",
    value:
    /**
     * Conditionally add a step to a macro based on a condition evaluated at the time of building the macro.
     * @param condition The JS condition.
     * @param ifTrue Continuation to add if the condition is true.
     * @param ifFalse Optional input to turn this into an if...else statement.
     * @returns {Macro} This object itself.
     */
    function externalIf(condition, ifTrue, ifFalse) {
      if (condition) return this.step(ifTrue);else if (ifFalse) return this.step(ifFalse);else return this;
    }
    /**
     * Create a new macro with a condition evaluated at the time of building the macro.
     * @param condition The JS condition.
     * @param ifTrue Continuation to add if the condition is true.
     * @param ifFalse Optional input to turn this into an if...else statement.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "repeat",
    value:
    /**
     * Add a repeat step to the macro.
     * @returns {Macro} This object itself.
     */
    function repeat() {
      return this.step("repeat");
    }
    /**
     * Add one or more skill cast steps to the macro.
     * @param skills Skills to cast.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "skill",
    value: function skill() {
      for (var _len2 = arguments.length, skills = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        skills[_key2] = arguments[_key2];
      }

      return this.step.apply(this, _toConsumableArray(skills.map(skill => {
        return "skill ".concat(skillBallsMacroName(skill));
      })));
    }
    /**
     * Create a new macro with one or more skill cast steps.
     * @param skills Skills to cast.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "trySkill",
    value:
    /**
     * Add one or more skill cast steps to the macro, where each step checks if you have the skill first.
     * @param skills Skills to try casting.
     * @returns {Macro} This object itself.
     */
    function trySkill() {
      for (var _len3 = arguments.length, skills = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        skills[_key3] = arguments[_key3];
      }

      return this.step.apply(this, _toConsumableArray(skills.map(skill => {
        return Macro.if_("hasskill ".concat(skillBallsMacroName(skill)), Macro.skill(skill));
      })));
    }
    /**
     * Create a new macro with one or more skill cast steps, where each step checks if you have the skill first.
     * @param skills Skills to try casting.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "trySkillRepeat",
    value:
    /**
     * Add one or more skill-cast-and-repeat steps to the macro, where each step checks if you have the skill first.
     * @param skills Skills to try repeatedly casting.
     * @returns {Macro} This object itself.
     */
    function trySkillRepeat() {
      for (var _len4 = arguments.length, skills = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        skills[_key4] = arguments[_key4];
      }

      return this.step.apply(this, _toConsumableArray(skills.map(skill => {
        return Macro.if_("hasskill ".concat(skillBallsMacroName(skill)), Macro.skill(skill).repeat());
      })));
    }
    /**
     * Create a new macro with one or more skill-cast-and-repeat steps, where each step checks if you have the skill first.
     * @param skills Skills to try repeatedly casting.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "item",
    value:
    /**
     * Add one or more item steps to the macro.
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
    function item() {
      for (var _len5 = arguments.length, items = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        items[_key5] = arguments[_key5];
      }

      return this.step.apply(this, _toConsumableArray(items.map(itemOrItems => {
        return "use ".concat(itemOrItemsBallsMacroName(itemOrItems));
      })));
    }
    /**
     * Create a new macro with one or more item steps.
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "tryItem",
    value:
    /**
     * Add one or more item steps to the macro, where each step checks to see if you have the item first.
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
    function tryItem() {
      for (var _len6 = arguments.length, items = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        items[_key6] = arguments[_key6];
      }

      return this.step.apply(this, _toConsumableArray(items.map(item => {
        return Macro.if_(itemOrItemsBallsMacroPredicate(item), "use ".concat(itemOrItemsBallsMacroName(item)));
      })));
    }
    /**
     * Create a new macro with one or more item steps, where each step checks to see if you have the item first.
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "attack",
    value:
    /**
     * Add an attack step to the macro.
     * @returns {Macro} This object itself.
     */
    function attack() {
      return this.step("attack");
    }
    /**
     * Create a new macro with an attack step.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "ifHolidayWanderer",
    value:
    /**
     * Create an if_ statement based on what holiday of loathing it currently is. On non-holidays, returns the original macro, unmutated.
     * @param macro The macro to place in the if_ statement
     */
    function ifHolidayWanderer(macro) {
      var todaysWanderers = getTodaysHolidayWanderers();
      if (todaysWanderers.length === 0) return this;
      return this.if_(todaysWanderers.map(monster => "monsterid ".concat(monster.id)).join(" || "), macro);
    }
    /**
     * Create a new macro starting with an ifHolidayWanderer step.
     * @param macro The macro to place inside the if_ statement
     */

  }, {
    key: "ifNotHolidayWanderer",
    value:
    /**
     * Create an if_ statement based on what holiday of loathing it currently is. On non-holidays, returns the original macro, with the input macro appended.
     * @param macro The macro to place in the if_ statement.
     */
    function ifNotHolidayWanderer(macro) {
      var todaysWanderers = getTodaysHolidayWanderers();
      if (todaysWanderers.length === 0) return this.step(macro);
      return this.if_(todaysWanderers.map(monster => "!monsterid ".concat(monster.id)).join(" && "), macro);
    }
    /**
     * Create a new macro starting with an ifNotHolidayWanderer step.
     * @param macro The macro to place inside the if_ statement
     */

  }], [{
    key: "load",
    value: function load() {
      var _this;

      return (_this = new this()).step.apply(_this, _toConsumableArray(property_get(Macro.SAVED_MACRO_PROPERTY).split(";")));
    }
    /**
     * Clear the saved macro in the Mafia property.
     */

  }, {
    key: "clearSaved",
    value: function clearSaved() {
      (0,external_kolmafia_namespaceObject.removeProperty)(Macro.SAVED_MACRO_PROPERTY);
    }
  }, {
    key: "step",
    value: function step() {
      var _this2;

      return (_this2 = new this()).step.apply(_this2, arguments);
    }
  }, {
    key: "abort",
    value: function abort() {
      return new this().abort();
    }
  }, {
    key: "runaway",
    value: function runaway() {
      return new this().runaway();
    }
  }, {
    key: "if_",
    value: function if_(condition, ifTrue) {
      return new this().if_(condition, ifTrue);
    }
  }, {
    key: "while_",
    value: function while_(condition, contents) {
      return new this().while_(condition, contents);
    }
  }, {
    key: "externalIf",
    value: function externalIf(condition, ifTrue, ifFalse) {
      return new this().externalIf(condition, ifTrue, ifFalse);
    }
  }, {
    key: "skill",
    value: function skill() {
      var _this3;

      return (_this3 = new this()).skill.apply(_this3, arguments);
    }
  }, {
    key: "trySkill",
    value: function trySkill() {
      var _this4;

      return (_this4 = new this()).trySkill.apply(_this4, arguments);
    }
  }, {
    key: "trySkillRepeat",
    value: function trySkillRepeat() {
      var _this5;

      return (_this5 = new this()).trySkillRepeat.apply(_this5, arguments);
    }
  }, {
    key: "item",
    value: function item() {
      var _this6;

      return (_this6 = new this()).item.apply(_this6, arguments);
    }
  }, {
    key: "tryItem",
    value: function tryItem() {
      var _this7;

      return (_this7 = new this()).tryItem.apply(_this7, arguments);
    }
  }, {
    key: "attack",
    value: function attack() {
      return new this().attack();
    }
  }, {
    key: "ifHolidayWanderer",
    value: function ifHolidayWanderer(macro) {
      return new this().ifHolidayWanderer(macro);
    }
  }, {
    key: "ifNotHolidayWanderer",
    value: function ifNotHolidayWanderer(macro) {
      return new this().ifNotHolidayWanderer(macro);
    }
  }]);

  return Macro;
}();
/**
 * Adventure in a location and handle all combats with a given macro.
 * To use this function you will need to create a consult script that runs Macro.load().submit() and a CCS that calls that consult script.
 * See examples/consult.ts for an example.
 *
 * @category Combat
 * @param loc Location to adventure in.
 * @param macro Macro to execute.
 */

combat_defineProperty(combat_Macro, "SAVED_MACRO_PROPERTY", "libram_savedMacro");

combat_defineProperty(combat_Macro, "cachedMacroId", null);

combat_defineProperty(combat_Macro, "cachedAutoAttack", null);

function adventureMacro(loc, macro) {
  macro.save();
  setAutoAttack(0);

  try {
    adv1(loc, 0, "");

    while (inMultiFight()) {
      runCombat();
    }

    if (choiceFollowsFight()) visitUrl("choice.php");
  } finally {
    combat_Macro.clearSaved();
  }
}
/**
 * Adventure in a location and handle all combats with a given autoattack and manual macro.
 * To use the nextMacro parameter you will need to create a consult script that runs Macro.load().submit() and a CCS that calls that consult script.
 * See examples/consult.ts for an example.
 *
 * @category Combat
 * @param loc Location to adventure in.
 * @param autoMacro Macro to execute via KoL autoattack.
 * @param nextMacro Macro to execute manually after autoattack completes.
 */

function adventureMacroAuto(loc, autoMacro) {
  var _nextMacro;

  var nextMacro = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  nextMacro = (_nextMacro = nextMacro) !== null && _nextMacro !== void 0 ? _nextMacro : combat_Macro.abort();
  autoMacro.setAutoAttack();
  nextMacro.save();

  try {
    adv1(loc, 0, "");

    while (inMultiFight()) {
      runCombat();
    }

    if (choiceFollowsFight()) visitUrl("choice.php");
  } finally {
    combat_Macro.clearSaved();
  }
}
var StrictMacro = /*#__PURE__*/(/* unused pure expression or super */ null && (function (_Macro) {
  combat_inherits(StrictMacro, _Macro);

  var _super2 = combat_createSuper(StrictMacro);

  function StrictMacro() {
    combat_classCallCheck(this, StrictMacro);

    return _super2.apply(this, arguments);
  }

  combat_createClass(StrictMacro, [{
    key: "skill",
    value:
    /**
     * Add one or more skill cast steps to the macro.
     * @param skills Skills to cast.
     * @returns {StrictMacro} This object itself.
     */
    function skill() {
      var _get2;

      for (var _len7 = arguments.length, skills = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        skills[_key7] = arguments[_key7];
      }

      return (_get2 = _get(combat_getPrototypeOf(StrictMacro.prototype), "skill", this)).call.apply(_get2, [this].concat(skills));
    }
    /**
     * Create a new macro with one or more skill cast steps.
     * @param skills Skills to cast.
     * @returns {StrictMacro} This object itself.
     */

  }, {
    key: "item",
    value:
    /**
     * Add one or more item steps to the macro.
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {StrictMacro} This object itself.
     */
    function item() {
      var _get3;

      for (var _len8 = arguments.length, items = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        items[_key8] = arguments[_key8];
      }

      return (_get3 = _get(combat_getPrototypeOf(StrictMacro.prototype), "item", this)).call.apply(_get3, [this].concat(items));
    }
    /**
     * Create a new macro with one or more item steps.
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {StrictMacro} This object itself.
     */

  }, {
    key: "trySkill",
    value:
    /**
     * Add one or more skill cast steps to the macro, where each step checks if you have the skill first.
     * @param skills Skills to try casting.
     * @returns {StrictMacro} This object itself.
     */
    function trySkill() {
      var _get4;

      for (var _len9 = arguments.length, skills = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        skills[_key9] = arguments[_key9];
      }

      return (_get4 = _get(combat_getPrototypeOf(StrictMacro.prototype), "trySkill", this)).call.apply(_get4, [this].concat(skills));
    }
    /**
     * Create a new macro with one or more skill cast steps, where each step checks if you have the skill first.
     * @param skills Skills to try casting.
     * @returns {StrictMacro} This object itself.
     */

  }, {
    key: "tryItem",
    value:
    /**
     * Add one or more item steps to the macro, where each step checks to see if you have the item first.
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {StrictMacro} This object itself.
     */
    function tryItem() {
      var _get5;

      for (var _len10 = arguments.length, items = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        items[_key10] = arguments[_key10];
      }

      return (_get5 = _get(combat_getPrototypeOf(StrictMacro.prototype), "tryItem", this)).call.apply(_get5, [this].concat(items));
    }
    /**
     * Create a new macro with one or more item steps, where each step checks to see if you have the item first.
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {StrictMacro} This object itself.
     */

  }, {
    key: "trySkillRepeat",
    value:
    /**
     * Add one or more skill-cast-and-repeat steps to the macro, where each step checks if you have the skill first.
     * @param skills Skills to try repeatedly casting.
     * @returns {StrictMacro} This object itself.
     */
    function trySkillRepeat() {
      for (var _len11 = arguments.length, skills = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        skills[_key11] = arguments[_key11];
      }

      return this.step.apply(this, _toConsumableArray(skills.map(skill => {
        return StrictMacro.if_("hasskill ".concat(skillBallsMacroName(skill)), StrictMacro.skill(skill).repeat());
      })));
    }
    /**
     * Create a new macro with one or more skill-cast-and-repeat steps, where each step checks if you have the skill first.
     * @param skills Skills to try repeatedly casting.
     * @returns {StrictMacro} This object itself.
     */

  }], [{
    key: "skill",
    value: function skill() {
      var _this8;

      return (_this8 = new this()).skill.apply(_this8, arguments);
    }
  }, {
    key: "item",
    value: function item() {
      var _this9;

      return (_this9 = new this()).item.apply(_this9, arguments);
    }
  }, {
    key: "trySkill",
    value: function trySkill() {
      var _this10;

      return (_this10 = new this()).trySkill.apply(_this10, arguments);
    }
  }, {
    key: "tryItem",
    value: function tryItem() {
      var _this11;

      return (_this11 = new this()).tryItem.apply(_this11, arguments);
    }
  }, {
    key: "trySkillRepeat",
    value: function trySkillRepeat() {
      var _this12;

      return (_this12 = new this()).trySkillRepeat.apply(_this12, arguments);
    }
  }]);

  return StrictMacro;
}(combat_Macro)));
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2016/Witchess.js
var Witchess_templateObject;

function Witchess_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var item = template_string_$item(Witchess_templateObject || (Witchess_templateObject = Witchess_taggedTemplateLiteral(["Witchess Set"])));
function Witchess_have() {
  return haveInCampground(item);
}
function fightsDone() {
  return property_get("_witchessFights");
}
var pieces = Monster.get(["Witchess Pawn", "Witchess Knight", "Witchess Bishop", "Witchess Rook", "Witchess Queen", "Witchess King", "Witchess Witch", "Witchess Ox"]);
function fightPiece(piece) {
  if (!pieces.includes(piece)) throw new Error("That is not a valid piece.");

  if (!(0,external_kolmafia_namespaceObject.visitUrl)("campground.php?action=witchess").includes("whichchoice value=1181")) {
    throw new Error("Failed to open Witchess.");
  }

  if (!(0,external_kolmafia_namespaceObject.runChoice)(1).includes("whichchoice=1182")) {
    throw new Error("Failed to visit shrink ray.");
  }

  if (!(0,external_kolmafia_namespaceObject.visitUrl)("choice.php?option=1&pwd=".concat((0,external_kolmafia_namespaceObject.myHash)(), "&whichchoice=1182&piece=").concat((0,external_kolmafia_namespaceObject.toInt)(piece)), false).includes(piece.name)) {
    throw new Error("Failed to start fight.");
  }

  return (0,external_kolmafia_namespaceObject.runCombat)();
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/utils.js
function utils_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = utils_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function utils_slicedToArray(arr, i) { return utils_arrayWithHoles(arr) || utils_iterableToArrayLimit(arr, i) || utils_unsupportedIterableToArray(arr, i) || utils_nonIterableRest(); }

function utils_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function utils_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function utils_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function utils_toConsumableArray(arr) { return utils_arrayWithoutHoles(arr) || utils_iterableToArray(arr) || utils_unsupportedIterableToArray(arr) || utils_nonIterableSpread(); }

function utils_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function utils_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return utils_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return utils_arrayLikeToArray(o, minLen); }

function utils_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function utils_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return utils_arrayLikeToArray(arr); }

function utils_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function notNull(value) {
  return value !== null;
}
function parseNumber(n) {
  return Number.parseInt(n.replace(/,/g, ""));
}
/**
 * Clamp a number between lower and upper bounds.
 *
 * @param n Number to clamp.
 * @param min Lower bound.
 * @param max Upper bound.
 */

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}
/**
 * Split an {@param array} into {@param chunkSize} sized chunks
 *
 * @param array Array to split
 * @param chunkSize Size of chunk
 */

function utils_chunk(array, chunkSize) {
  var result = [];

  for (var i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }

  return result;
}
function arrayToCountedMap(array) {
  if (!Array.isArray(array)) return array;
  var map = new Map();
  array.forEach(item => {
    map.set(item, (map.get(item) || 0) + 1);
  });
  return map;
}
function countedMapToArray(map) {
  var _ref;

  return (_ref = []).concat.apply(_ref, utils_toConsumableArray(utils_toConsumableArray(map).map(_ref2 => {
    var _ref3 = utils_slicedToArray(_ref2, 2),
        item = _ref3[0],
        quantity = _ref3[1];

    return Array(quantity).fill(item);
  })));
}
function countedMapToString(map) {
  return utils_toConsumableArray(map).map(_ref4 => {
    var _ref5 = utils_slicedToArray(_ref4, 2),
        item = _ref5[0],
        quantity = _ref5[1];

    return "".concat(quantity, " x ").concat(item);
  }).join(", ");
}
/**
 * Sum an array of numbers.
 * @param addends Addends to sum.
 * @param mappingFunction function to turn elements into numbers
 */

function sum(addends, mappingFunction) {
  return addends.reduce((subtotal, element) => subtotal + mappingFunction(element), 0);
}
function sumNumbers(addends) {
  return sum(addends, x => x);
}
/**
 * Checks if a given item is in a readonly array, acting as a typeguard.
 * @param item Needle
 * @param array Readonly array haystack
 * @returns Whether the item is in the array, and narrows the type of the item.
 */

function arrayContains(item, array) {
  return array.includes(item);
}
/**
 * Checks if two arrays contain the same elements in the same quantity.
 * @param a First array for comparison
 * @param b Second array for comparison
 * @returns Whether the two arrays are equal, irrespective of order.
 */

function setEqual(a, b) {
  var sortedA = utils_toConsumableArray(a).sort();

  var sortedB = utils_toConsumableArray(b).sort();

  return a.length === b.length && sortedA.every((item, index) => item === sortedB[index]);
}
/**
 * Reverses keys and values for a given map
 * @param map Map to invert
 */

function invertMap(map) {
  var returnValue = new Map();

  var _iterator = utils_createForOfIteratorHelper(map),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = utils_slicedToArray(_step.value, 2),
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
;// CONCATENATED MODULE: ./node_modules/libram/dist/modifierTypes.js
// THIS FILE IS AUTOMATICALLY GENERATED. See tools/parseModifiers.ts for more information
var booleanModifiers = ["Softcore Only", "Single Equip", "Never Fumble", "Weakens Monster", "Free Pull", "Variable", "Nonstackable Watch", "Cold Immunity", "Hot Immunity", "Sleaze Immunity", "Spooky Immunity", "Stench Immunity", "Cold Vulnerability", "Hot Vulnerability", "Sleaze Vulnerability", "Spooky Vulnerability", "Stench Vulnerability", "Moxie Controls MP", "Moxie May Control MP", "Four Songs", "Adventure Underwater", "Underwater Familiar", "Generic", "Unarmed", "No Pull", "Lasts Until Rollover", "Attacks Can't Miss", "Pirate", "Breakable", "Drops Items", "Drops Meat"];
var classModifiers = ["Class"];
var numericModifiers = ["Familiar Weight", "Monster Level", "Combat Rate", "Initiative", "Experience", "Item Drop", "Meat Drop", "Damage Absorption", "Damage Reduction", "Cold Resistance", "Hot Resistance", "Sleaze Resistance", "Spooky Resistance", "Stench Resistance", "Mana Cost", "Moxie", "Moxie Percent", "Muscle", "Muscle Percent", "Mysticality", "Mysticality Percent", "Maximum HP", "Maximum HP Percent", "Maximum MP", "Maximum MP Percent", "Weapon Damage", "Ranged Damage", "Spell Damage", "Spell Damage Percent", "Cold Damage", "Hot Damage", "Sleaze Damage", "Spooky Damage", "Stench Damage", "Cold Spell Damage", "Hot Spell Damage", "Sleaze Spell Damage", "Spooky Spell Damage", "Stench Spell Damage", "Underwater Combat Rate", "Fumble", "HP Regen Min", "HP Regen Max", "MP Regen Min", "MP Regen Max", "Adventures", "Familiar Weight Percent", "Weapon Damage Percent", "Ranged Damage Percent", "Stackable Mana Cost", "Hobo Power", "Base Resting HP", "Resting HP Percent", "Bonus Resting HP", "Base Resting MP", "Resting MP Percent", "Bonus Resting MP", "Critical Hit Percent", "PvP Fights", "Volleyball", "Sombrero", "Leprechaun", "Fairy", "Meat Drop Penalty", "Hidden Familiar Weight", "Item Drop Penalty", "Initiative Penalty", "Food Drop", "Booze Drop", "Hat Drop", "Weapon Drop", "Offhand Drop", "Shirt Drop", "Pants Drop", "Accessory Drop", "Volleyball Effectiveness", "Sombrero Effectiveness", "Leprechaun Effectiveness", "Fairy Effectiveness", "Familiar Weight Cap", "Slime Resistance", "Slime Hates It", "Spell Critical Percent", "Muscle Experience", "Mysticality Experience", "Moxie Experience", "Effect Duration", "Candy Drop", "DB Combat Damage", "Sombrero Bonus", "Familiar Experience", "Sporadic Meat Drop", "Sporadic Item Drop", "Meat Bonus", "Pickpocket Chance", "Combat Mana Cost", "Muscle Experience Percent", "Mysticality Experience Percent", "Moxie Experience Percent", "Minstrel Level", "Muscle Limit", "Mysticality Limit", "Moxie Limit", "Song Duration", "Prismatic Damage", "Smithsness", "Supercold Resistance", "Reduce Enemy Defense", "Pool Skill", "Surgeonosity", "Familiar Damage", "Gear Drop", "Maximum Hooch", "Water Level", "Crimbot Outfit Power", "Familiar Tuning Muscle", "Familiar Tuning Mysticality", "Familiar Tuning Moxie", "Random Monster Modifiers", "Luck", "Othello Skill", "Disco Style", "Rollover Effect Duration", "Sixgun Damage", "Fishing Skill", "Additional Song", "Sprinkle Drop", "Absorb Adventures", "Absorb Stats", "Rubee Drop", "Kruegerand Drop", "WarBear Armor Penetration", "Clowniness", "Maximum PP", "Plumber Power", "Drippy Damage", "Drippy Resistance", "Energy", "Scrap", "Familiar Action Bonus", "Water"];
var effectModifiers = ["Effect", "Rollover Effect"];
var monsterModifiers = ["Avatar"];
var skillModifiers = ["Skill"];
var statModifiers = ["Plumber Stat"];
var stringModifiers = ["Intrinsic Effect", "Equalize", "Wiki Name", "Modifiers", "Outfit", "Stat Tuning", "Equips On", "Familiar Effect", "Jiggle", "Equalize Muscle", "Equalize Mysticality", "Equalize Moxie", "Floor Buffed Muscle", "Floor Buffed Mysticality", "Floor Buffed Moxie"];
;// CONCATENATED MODULE: ./node_modules/libram/dist/modifier.js



function modifier_get(name, subject) {
  if (arrayContains(name, booleanModifiers)) {
    return subject === undefined ? (0,external_kolmafia_namespaceObject.booleanModifier)(name) : (0,external_kolmafia_namespaceObject.booleanModifier)(subject, name);
  }

  if (arrayContains(name, classModifiers)) {
    return (0,external_kolmafia_namespaceObject.classModifier)(subject, name);
  }

  if (arrayContains(name, effectModifiers)) {
    return (0,external_kolmafia_namespaceObject.effectModifier)(subject, name);
  }

  if (arrayContains(name, monsterModifiers)) {
    return (0,external_kolmafia_namespaceObject.monsterModifier)(subject, name);
  }

  if (arrayContains(name, numericModifiers)) {
    return subject === undefined ? (0,external_kolmafia_namespaceObject.numericModifier)(name) : (0,external_kolmafia_namespaceObject.numericModifier)(subject, name);
  }

  if (arrayContains(name, skillModifiers)) {
    return (0,external_kolmafia_namespaceObject.skillModifier)(subject, name);
  }

  if (arrayContains(name, stringModifiers)) {
    return subject === undefined ? (0,external_kolmafia_namespaceObject.stringModifier)(name) : (0,external_kolmafia_namespaceObject.stringModifier)(subject, name);
  }

  if (arrayContains(name, statModifiers)) {
    return (0,external_kolmafia_namespaceObject.statModifier)(subject, name);
  }
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2014/DNALab.js
var DNALab_templateObject, DNALab_templateObject2, DNALab_templateObject3, DNALab_templateObject4, DNALab_templateObject5, DNALab_templateObject6, DNALab_templateObject7, DNALab_templateObject8, DNALab_templateObject9, DNALab_templateObject10, DNALab_templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60, _templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject72, _templateObject73, _templateObject74, _templateObject75, _templateObject76, _templateObject77, _templateObject78, _templateObject79, _templateObject80, _templateObject81, _templateObject82, _templateObject83, _templateObject84, _templateObject85, _templateObject86, _templateObject87;

function DNALab_slicedToArray(arr, i) { return DNALab_arrayWithHoles(arr) || DNALab_iterableToArrayLimit(arr, i) || DNALab_unsupportedIterableToArray(arr, i) || DNALab_nonIterableRest(); }

function DNALab_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function DNALab_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return DNALab_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return DNALab_arrayLikeToArray(o, minLen); }

function DNALab_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function DNALab_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function DNALab_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function DNALab_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var lab = template_string_$item(DNALab_templateObject || (DNALab_templateObject = DNALab_taggedTemplateLiteral(["Little Geneticist DNA-Splicing Lab"])));
/**
 * Checks if you have DNA lab in inventory or installed
 */

function DNALab_have() {
  return haveItem(lab) || getWorkshed() === lab;
}
/**
 * Checks if you have DNA lab installed
 */

function installed() {
  return (0,external_kolmafia_namespaceObject.getWorkshed)() === lab;
}
var phylaEffects = new Map([[$phylum(DNALab_templateObject2 || (DNALab_templateObject2 = DNALab_taggedTemplateLiteral(["beast"]))), template_string_$effect(DNALab_templateObject3 || (DNALab_templateObject3 = DNALab_taggedTemplateLiteral(["Human-Beast Hybrid"])))], [$phylum(DNALab_templateObject4 || (DNALab_templateObject4 = DNALab_taggedTemplateLiteral(["bug"]))), template_string_$effect(DNALab_templateObject5 || (DNALab_templateObject5 = DNALab_taggedTemplateLiteral(["Human-Insect Hybrid"])))], [$phylum(DNALab_templateObject6 || (DNALab_templateObject6 = DNALab_taggedTemplateLiteral(["constellation"]))), template_string_$effect(DNALab_templateObject7 || (DNALab_templateObject7 = DNALab_taggedTemplateLiteral(["Human-Constellation Hybrid"])))], [$phylum(DNALab_templateObject8 || (DNALab_templateObject8 = DNALab_taggedTemplateLiteral(["construct"]))), template_string_$effect(DNALab_templateObject9 || (DNALab_templateObject9 = DNALab_taggedTemplateLiteral(["Human-Machine Hybrid"])))], [$phylum(DNALab_templateObject10 || (DNALab_templateObject10 = DNALab_taggedTemplateLiteral(["demon"]))), template_string_$effect(DNALab_templateObject11 || (DNALab_templateObject11 = DNALab_taggedTemplateLiteral(["Human-Demon Hybrid"])))], [$phylum(_templateObject12 || (_templateObject12 = DNALab_taggedTemplateLiteral(["dude"]))), template_string_$effect(_templateObject13 || (_templateObject13 = DNALab_taggedTemplateLiteral(["Human-Human Hybrid"])))], [$phylum(_templateObject14 || (_templateObject14 = DNALab_taggedTemplateLiteral(["elemental"]))), template_string_$effect(_templateObject15 || (_templateObject15 = DNALab_taggedTemplateLiteral(["Human-Elemental Hybrid"])))], [$phylum(_templateObject16 || (_templateObject16 = DNALab_taggedTemplateLiteral(["elf"]))), template_string_$effect(_templateObject17 || (_templateObject17 = DNALab_taggedTemplateLiteral(["Human-Elf Hybrid"])))], [$phylum(_templateObject18 || (_templateObject18 = DNALab_taggedTemplateLiteral(["fish"]))), template_string_$effect(_templateObject19 || (_templateObject19 = DNALab_taggedTemplateLiteral(["Human-Fish Hybrid"])))], [$phylum(_templateObject20 || (_templateObject20 = DNALab_taggedTemplateLiteral(["goblin"]))), template_string_$effect(_templateObject21 || (_templateObject21 = DNALab_taggedTemplateLiteral(["Human-Goblin Hybrid"])))], [$phylum(_templateObject22 || (_templateObject22 = DNALab_taggedTemplateLiteral(["hippy"]))), template_string_$effect(_templateObject23 || (_templateObject23 = DNALab_taggedTemplateLiteral(["Human-Hobo Hybrid"])))], [$phylum(_templateObject24 || (_templateObject24 = DNALab_taggedTemplateLiteral(["horror"]))), template_string_$effect(_templateObject25 || (_templateObject25 = DNALab_taggedTemplateLiteral(["Human-Horror Hybrid"])))], [$phylum(_templateObject26 || (_templateObject26 = DNALab_taggedTemplateLiteral(["humanoid"]))), template_string_$effect(_templateObject27 || (_templateObject27 = DNALab_taggedTemplateLiteral(["Human-Humanoid Hybrid"])))], [$phylum(_templateObject28 || (_templateObject28 = DNALab_taggedTemplateLiteral(["mer-kin"]))), template_string_$effect(_templateObject29 || (_templateObject29 = DNALab_taggedTemplateLiteral(["Human-Mer-kin Hybrid"])))], [$phylum(_templateObject30 || (_templateObject30 = DNALab_taggedTemplateLiteral(["orc"]))), template_string_$effect(_templateObject31 || (_templateObject31 = DNALab_taggedTemplateLiteral(["Human-Orc Hybrid"])))], [$phylum(_templateObject32 || (_templateObject32 = DNALab_taggedTemplateLiteral(["penguin"]))), template_string_$effect(_templateObject33 || (_templateObject33 = DNALab_taggedTemplateLiteral(["Human-Penguin Hybrid"])))], [$phylum(_templateObject34 || (_templateObject34 = DNALab_taggedTemplateLiteral(["pirate"]))), template_string_$effect(_templateObject35 || (_templateObject35 = DNALab_taggedTemplateLiteral(["Human-Pirate Hybrid"])))], [$phylum(_templateObject36 || (_templateObject36 = DNALab_taggedTemplateLiteral(["plant"]))), template_string_$effect(_templateObject37 || (_templateObject37 = DNALab_taggedTemplateLiteral(["Human-Plant Hybrid"])))], [$phylum(_templateObject38 || (_templateObject38 = DNALab_taggedTemplateLiteral(["slime"]))), template_string_$effect(_templateObject39 || (_templateObject39 = DNALab_taggedTemplateLiteral(["Human-Slime Hybrid"])))], [$phylum(_templateObject40 || (_templateObject40 = DNALab_taggedTemplateLiteral(["undead"]))), template_string_$effect(_templateObject41 || (_templateObject41 = DNALab_taggedTemplateLiteral(["Human-Undead Hybrid"])))], [$phylum(_templateObject42 || (_templateObject42 = DNALab_taggedTemplateLiteral(["weird"]))), template_string_$effect(_templateObject43 || (_templateObject43 = DNALab_taggedTemplateLiteral(["Human-Weird Thing Hybrid"])))]]);
var phylaTonics = new Map([[$phylum(_templateObject44 || (_templateObject44 = DNALab_taggedTemplateLiteral(["beast"]))), template_string_$item(_templateObject45 || (_templateObject45 = DNALab_taggedTemplateLiteral(["Gene Tonic: Beast"])))], [$phylum(_templateObject46 || (_templateObject46 = DNALab_taggedTemplateLiteral(["bug"]))), template_string_$item(_templateObject47 || (_templateObject47 = DNALab_taggedTemplateLiteral(["Gene Tonic: Insect"])))], [$phylum(_templateObject48 || (_templateObject48 = DNALab_taggedTemplateLiteral(["constellation"]))), template_string_$item(_templateObject49 || (_templateObject49 = DNALab_taggedTemplateLiteral(["Gene Tonic: Constellation"])))], [$phylum(_templateObject50 || (_templateObject50 = DNALab_taggedTemplateLiteral(["construct"]))), template_string_$item(_templateObject51 || (_templateObject51 = DNALab_taggedTemplateLiteral(["Gene Tonic: Construct"])))], [$phylum(_templateObject52 || (_templateObject52 = DNALab_taggedTemplateLiteral(["demon"]))), template_string_$item(_templateObject53 || (_templateObject53 = DNALab_taggedTemplateLiteral(["Gene Tonic: Demon"])))], [$phylum(_templateObject54 || (_templateObject54 = DNALab_taggedTemplateLiteral(["dude"]))), template_string_$item(_templateObject55 || (_templateObject55 = DNALab_taggedTemplateLiteral(["Gene Tonic: Humanoid"])))], [$phylum(_templateObject56 || (_templateObject56 = DNALab_taggedTemplateLiteral(["elemental"]))), template_string_$item(_templateObject57 || (_templateObject57 = DNALab_taggedTemplateLiteral(["Gene Tonic: Elemental"])))], [$phylum(_templateObject58 || (_templateObject58 = DNALab_taggedTemplateLiteral(["elf"]))), template_string_$item(_templateObject59 || (_templateObject59 = DNALab_taggedTemplateLiteral(["Gene Tonic: Elf"])))], [$phylum(_templateObject60 || (_templateObject60 = DNALab_taggedTemplateLiteral(["fish"]))), template_string_$item(_templateObject61 || (_templateObject61 = DNALab_taggedTemplateLiteral(["Gene Tonic: Fish"])))], [$phylum(_templateObject62 || (_templateObject62 = DNALab_taggedTemplateLiteral(["goblin"]))), template_string_$item(_templateObject63 || (_templateObject63 = DNALab_taggedTemplateLiteral(["Gene Tonic: Goblin"])))], [$phylum(_templateObject64 || (_templateObject64 = DNALab_taggedTemplateLiteral(["hippy"]))), template_string_$item(_templateObject65 || (_templateObject65 = DNALab_taggedTemplateLiteral(["Gene Tonic: Hobo"])))], [$phylum(_templateObject66 || (_templateObject66 = DNALab_taggedTemplateLiteral(["horror"]))), template_string_$item(_templateObject67 || (_templateObject67 = DNALab_taggedTemplateLiteral(["Gene Tonic: Horror"])))], [$phylum(_templateObject68 || (_templateObject68 = DNALab_taggedTemplateLiteral(["humanoid"]))), template_string_$item(_templateObject69 || (_templateObject69 = DNALab_taggedTemplateLiteral(["Gene Tonic: Humanoid"])))], [$phylum(_templateObject70 || (_templateObject70 = DNALab_taggedTemplateLiteral(["mer-kin"]))), template_string_$item(_templateObject71 || (_templateObject71 = DNALab_taggedTemplateLiteral(["Gene Tonic: Mer-kin"])))], [$phylum(_templateObject72 || (_templateObject72 = DNALab_taggedTemplateLiteral(["orc"]))), template_string_$item(_templateObject73 || (_templateObject73 = DNALab_taggedTemplateLiteral(["Gene Tonic: Orc"])))], [$phylum(_templateObject74 || (_templateObject74 = DNALab_taggedTemplateLiteral(["penguin"]))), template_string_$item(_templateObject75 || (_templateObject75 = DNALab_taggedTemplateLiteral(["Gene Tonic: Penguin"])))], [$phylum(_templateObject76 || (_templateObject76 = DNALab_taggedTemplateLiteral(["pirate"]))), template_string_$item(_templateObject77 || (_templateObject77 = DNALab_taggedTemplateLiteral(["Gene Tonic: Pirate"])))], [$phylum(_templateObject78 || (_templateObject78 = DNALab_taggedTemplateLiteral(["plant"]))), template_string_$item(_templateObject79 || (_templateObject79 = DNALab_taggedTemplateLiteral(["Gene Tonic: Plant"])))], [$phylum(_templateObject80 || (_templateObject80 = DNALab_taggedTemplateLiteral(["slime"]))), template_string_$item(_templateObject81 || (_templateObject81 = DNALab_taggedTemplateLiteral(["Gene Tonic: Slime"])))], [$phylum(_templateObject82 || (_templateObject82 = DNALab_taggedTemplateLiteral(["undead"]))), template_string_$item(_templateObject83 || (_templateObject83 = DNALab_taggedTemplateLiteral(["Gene Tonic: Undead"])))], [$phylum(_templateObject84 || (_templateObject84 = DNALab_taggedTemplateLiteral(["weird"]))), template_string_$item(_templateObject85 || (_templateObject85 = DNALab_taggedTemplateLiteral(["Gene Tonic: Weird"])))]]);
var tonicEffects = Array.from(phylaEffects.values());
/**
 * Tells you whether you are currently hybridized. When passed with an input of any sort, tells you whether you are currently hybridized with that effect.
 * @param tonic Optional input. When passed, the function returns whether that specific effect is hybridized.
 */

function isHybridized(tonic) {
  if (!tonic) return installed() && property_get("_dnaHybrid");
  var tonicEffect = tonic instanceof Effect ? tonic : tonic instanceof Phylum ? DNALab_getEffect(tonic) : modifier_get("Effect", tonic);
  return tonicEffects.includes(tonicEffect) && (0,external_kolmafia_namespaceObject.haveEffect)(tonicEffect) === 2147483647;
}
/**
 * Returns the tonic item associated with a particular phylum.
 * @param phylum The phylum in question.
 * @returns The tonic item associated with that phylum; returns $item`none` for $phylum`none`.
 */

function getTonic(phylum) {
  var _phylaTonics$get;

  return (_phylaTonics$get = phylaTonics.get(phylum)) !== null && _phylaTonics$get !== void 0 ? _phylaTonics$get : template_string_$item(_templateObject86 || (_templateObject86 = DNALab_taggedTemplateLiteral(["none"]))); //return $item`none` rather than null because it should never happen.
}
/**
 * Returns the tonic effect associated with a particular phylum.
 * @param phylum The phylum in question.
 * @returns The tonic effect associated with that phylum; returns $effect`none` for $phylum`none`.
 */

function DNALab_getEffect(phylum) {
  var _phylaEffects$get;

  return (_phylaEffects$get = phylaEffects.get(phylum)) !== null && _phylaEffects$get !== void 0 ? _phylaEffects$get : template_string_$effect(_templateObject87 || (_templateObject87 = DNALab_taggedTemplateLiteral(["none"]))); //return $effect`none` rather than null because it should never happen
}
/**
 * Tells you which phylum to hunt down for a given effect or item.
 * @param dnatype The tonic effect or item in question
 * @returns The Phylum associated with that effect or item; null if an invalid choice
 */

function phylumFor(dnatype) {
  if (dnatype instanceof Effect) {
    var phylumPair = Array.from(phylaEffects.entries()).find(_ref => {
      var _ref2 = DNALab_slicedToArray(_ref, 2),
          effect = _ref2[1];

      return effect === dnatype;
    });
    return phylumPair ? phylumPair[0] : null;
  } else {
    var _phylumPair = Array.from(phylaTonics.entries()).find(_ref3 => {
      var _ref4 = DNALab_slicedToArray(_ref3, 2),
          tonic = _ref4[1];

      return tonic === dnatype;
    });

    return _phylumPair ? _phylumPair[0] : null;
  }
}
/**
 * Hybridize yourself with the current contents of your syringe, if possible.
 * @returns Whether or not we succeeded
 */

function hybridize() {
  if (property_get("_dnaHybrid")) return false;
  if (!installed()) return false;
  var currentSyringe = property_get("dnaSyringe");
  if (!currentSyringe) return false;
  var tonicPotion = getTonic(currentSyringe);
  var expectedEffect = modifier_get("Effect", tonicPotion);
  (0,external_kolmafia_namespaceObject.cliExecute)("camp dnainject");
  return isHybridized(expectedEffect);
}
/**
 * Makes tonics with whatever phylum is currently in your syringe
 * @param {number} [amount=1] the number of tonics to make
 * @returns Whether we successfully made tonics; returns true if we made as many as we could, regardless of whether that was the number requested
 */

function makeTonic() {
  var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  if (!installed()) return false;
  var currentSyringe = property_get("dnaSyringe");
  if (!currentSyringe) return false;
  var tonicPotion = getTonic(currentSyringe);
  var amountToMake = clamp(amount, 0, tonicsLeft());
  var startingAmount = (0,external_kolmafia_namespaceObject.itemAmount)(tonicPotion);
  (0,external_kolmafia_namespaceObject.cliExecute)("camp dnapotion ".concat(amountToMake));
  return (0,external_kolmafia_namespaceObject.itemAmount)(tonicPotion) - startingAmount === amountToMake;
}
/**
 * Tells you how many tonics you can make the rest of the day.
 * @returns The remaining tonics you can make
 */

function tonicsLeft() {
  return clamp(3 - property_get("_dnaPotionsMade"), 0, 3);
}
;// CONCATENATED MODULE: ./src/asmohccs-lib.ts
var asmohccs_lib_templateObject, asmohccs_lib_templateObject2, asmohccs_lib_templateObject3, asmohccs_lib_templateObject4, asmohccs_lib_templateObject5, asmohccs_lib_templateObject6, asmohccs_lib_templateObject7, asmohccs_lib_templateObject8, asmohccs_lib_templateObject9, asmohccs_lib_templateObject10, asmohccs_lib_templateObject11, asmohccs_lib_templateObject12, asmohccs_lib_templateObject13, asmohccs_lib_templateObject14, asmohccs_lib_templateObject15, asmohccs_lib_templateObject16, asmohccs_lib_templateObject17, asmohccs_lib_templateObject18, asmohccs_lib_templateObject19, asmohccs_lib_templateObject20, asmohccs_lib_templateObject21, asmohccs_lib_templateObject22, asmohccs_lib_templateObject23, asmohccs_lib_templateObject24, asmohccs_lib_templateObject25, asmohccs_lib_templateObject26, asmohccs_lib_templateObject27, asmohccs_lib_templateObject28, asmohccs_lib_templateObject29, asmohccs_lib_templateObject30, asmohccs_lib_templateObject31, asmohccs_lib_templateObject32, asmohccs_lib_templateObject33, asmohccs_lib_templateObject34, asmohccs_lib_templateObject35, asmohccs_lib_templateObject36, asmohccs_lib_templateObject37, asmohccs_lib_templateObject38, asmohccs_lib_templateObject39, asmohccs_lib_templateObject40, asmohccs_lib_templateObject41, asmohccs_lib_templateObject42, asmohccs_lib_templateObject43, asmohccs_lib_templateObject44, asmohccs_lib_templateObject45, asmohccs_lib_templateObject46, asmohccs_lib_templateObject47, asmohccs_lib_templateObject48, asmohccs_lib_templateObject49, asmohccs_lib_templateObject50, asmohccs_lib_templateObject51, asmohccs_lib_templateObject52, asmohccs_lib_templateObject53, asmohccs_lib_templateObject54, asmohccs_lib_templateObject55, asmohccs_lib_templateObject56, asmohccs_lib_templateObject57, asmohccs_lib_templateObject58, asmohccs_lib_templateObject59, asmohccs_lib_templateObject60, asmohccs_lib_templateObject61, asmohccs_lib_templateObject62, asmohccs_lib_templateObject63, asmohccs_lib_templateObject64, asmohccs_lib_templateObject65, asmohccs_lib_templateObject66, asmohccs_lib_templateObject67, asmohccs_lib_templateObject68, asmohccs_lib_templateObject69, asmohccs_lib_templateObject70, asmohccs_lib_templateObject71, asmohccs_lib_templateObject72, asmohccs_lib_templateObject73, asmohccs_lib_templateObject74, asmohccs_lib_templateObject75, asmohccs_lib_templateObject76, asmohccs_lib_templateObject77, asmohccs_lib_templateObject78, asmohccs_lib_templateObject79, asmohccs_lib_templateObject80, asmohccs_lib_templateObject81, asmohccs_lib_templateObject82, asmohccs_lib_templateObject83, asmohccs_lib_templateObject84, asmohccs_lib_templateObject85, asmohccs_lib_templateObject86, asmohccs_lib_templateObject87, _templateObject88, _templateObject89, _templateObject90, _templateObject91, _templateObject92, _templateObject93, _templateObject94, _templateObject95, _templateObject96, _templateObject97, _templateObject98, _templateObject99, _templateObject100, _templateObject101, _templateObject102, _templateObject103, _templateObject104, _templateObject105, _templateObject106, _templateObject107, _templateObject108, _templateObject109, _templateObject110, _templateObject111, _templateObject112, _templateObject113, _templateObject114, _templateObject115, _templateObject116, _templateObject117, _templateObject118, _templateObject119, _templateObject120, _templateObject121, _templateObject122, _templateObject123, _templateObject124, _templateObject125, _templateObject126, _templateObject127, _templateObject128, _templateObject129, _templateObject130, _templateObject131, _templateObject132, _templateObject133, _templateObject134, _templateObject135, _templateObject136, _templateObject137, _templateObject138, _templateObject139, _templateObject140, _templateObject141, _templateObject142, _templateObject143, _templateObject144, _templateObject145, _templateObject146, _templateObject147, _templateObject148, _templateObject149, _templateObject150, _templateObject151, _templateObject152, _templateObject153, _templateObject154, _templateObject155, _templateObject156, _templateObject157, _templateObject158, _ref, _templateObject159, _templateObject160, _templateObject161, _templateObject162, _templateObject163, _templateObject164, _templateObject165, _templateObject166, _templateObject167, _templateObject168, _templateObject169, _templateObject170, _templateObject171, _templateObject172, _templateObject173, _templateObject174, _templateObject175, _templateObject176, _templateObject177, _templateObject178, _templateObject179, _templateObject180, _templateObject181, _templateObject182, _templateObject183, _templateObject184, _templateObject185, _templateObject186, _templateObject187, _templateObject188;

function asmohccs_lib_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asmohccs_lib_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = asmohccs_lib_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function asmohccs_lib_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return asmohccs_lib_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return asmohccs_lib_arrayLikeToArray(o, minLen); }

function asmohccs_lib_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asmohccs_lib_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var PropertyManager = new PropertiesManager();
function gingerCandy() {
  if (!property_get("_asmo_gingercity")) {
    (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(asmohccs_lib_templateObject || (asmohccs_lib_templateObject = asmohccs_lib_taggedTemplateLiteral(["Pair of Stomping Boots"]))));
    _set("choiceAdventure1215", 1);
    _set("choiceAdventure1204", 1);
    asmohccs_lib_advMacroAA(template_string_$location(asmohccs_lib_templateObject2 || (asmohccs_lib_templateObject2 = asmohccs_lib_taggedTemplateLiteral(["Gingerbread Civic Center"]))), combat_Macro.step("runaway"), 1);
    asmohccs_lib_advMacroAA(template_string_$location(asmohccs_lib_templateObject3 || (asmohccs_lib_templateObject3 = asmohccs_lib_taggedTemplateLiteral(["Gingerbread Train Station"]))), combat_Macro.step("runaway"), 4);
    _set("_asmo_gingercity", true);
  }
}
function fuelUp() {
  (0,external_kolmafia_namespaceObject.buy)(1, template_string_$item(asmohccs_lib_templateObject4 || (asmohccs_lib_templateObject4 = asmohccs_lib_taggedTemplateLiteral(["all-purpose flower"]))));
  (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(asmohccs_lib_templateObject5 || (asmohccs_lib_templateObject5 = asmohccs_lib_taggedTemplateLiteral(["all-purpose flower"]))));
  (0,external_kolmafia_namespaceObject.buy)((0,external_kolmafia_namespaceObject.availableAmount)(template_string_$item(asmohccs_lib_templateObject6 || (asmohccs_lib_templateObject6 = asmohccs_lib_taggedTemplateLiteral(["wad of dough"])))), template_string_$item(asmohccs_lib_templateObject7 || (asmohccs_lib_templateObject7 = asmohccs_lib_taggedTemplateLiteral(["soda water"]))));
  (0,external_kolmafia_namespaceObject.create)((0,external_kolmafia_namespaceObject.availableAmount)(template_string_$item(asmohccs_lib_templateObject8 || (asmohccs_lib_templateObject8 = asmohccs_lib_taggedTemplateLiteral(["wad of dough"])))), template_string_$item(asmohccs_lib_templateObject9 || (asmohccs_lib_templateObject9 = asmohccs_lib_taggedTemplateLiteral(["loaf of soda bread"]))));
  (0,external_kolmafia_namespaceObject.cliExecute)("asdonmartin fuel ".concat((0,external_kolmafia_namespaceObject.availableAmount)(template_string_$item(asmohccs_lib_templateObject10 || (asmohccs_lib_templateObject10 = asmohccs_lib_taggedTemplateLiteral(["loaf of soda bread"])))), " soda bread"));
}
function synthMysExp() {
  if (property_get("harvestGardenHardcore") === "none") {
    (0,external_kolmafia_namespaceObject.visitUrl)("campground.php?action=garden");
  }

  if (!property_get("_candySummons")) {
    (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(asmohccs_lib_templateObject11 || (asmohccs_lib_templateObject11 = asmohccs_lib_taggedTemplateLiteral(["Summon Crimbo Candy"]))));
  }

  var fudge = template_string_$item(asmohccs_lib_templateObject12 || (asmohccs_lib_templateObject12 = asmohccs_lib_taggedTemplateLiteral(["Crimbo fudge"])));
  var pecan = template_string_$item(asmohccs_lib_templateObject13 || (asmohccs_lib_templateObject13 = asmohccs_lib_taggedTemplateLiteral(["Crimbo candied pecan"])));
  var bark = template_string_$item(asmohccs_lib_templateObject14 || (asmohccs_lib_templateObject14 = asmohccs_lib_taggedTemplateLiteral(["Crimbo peppermint bark"])));
  var fudges = (0,external_kolmafia_namespaceObject.availableAmount)(fudge);
  var pecans = (0,external_kolmafia_namespaceObject.availableAmount)(pecan);
  var barks = (0,external_kolmafia_namespaceObject.availableAmount)(bark);

  if (fudges >= 2) {
    (0,external_kolmafia_namespaceObject.sweetSynthesis)(fudge, fudge);
  } else if (barks >= 1) {
    if (pecans >= 1) {
      (0,external_kolmafia_namespaceObject.sweetSynthesis)(pecan, bark);
    } else {
      (0,external_kolmafia_namespaceObject.sweetSynthesis)(bark, template_string_$item(asmohccs_lib_templateObject15 || (asmohccs_lib_templateObject15 = asmohccs_lib_taggedTemplateLiteral(["peppermint sprout"]))));
    }
  } else {
    gingerCandy(); //Section below stolen from Bean (with edits)

    var inventory = (0,external_kolmafia_namespaceObject.getInventory)();

    for (var _i = 0, _Object$keys = Object.keys(inventory); _i < _Object$keys.length; _i++) {
      var itemName = _Object$keys[_i];
      var item = Item.get(itemName);
      var count = inventory[itemName];
      var mod = (0,external_kolmafia_namespaceObject.toInt)(Item.get(itemName)) % 5;

      if (item.candyType !== 'complex') {
        continue;
      }

      if (mod === 4) {
        if (fudges >= 1) {
          (0,external_kolmafia_namespaceObject.sweetSynthesis)(fudge, item);
          break;
        }
      } else if (mod === 3) {
        if (pecans >= 1) {
          (0,external_kolmafia_namespaceObject.sweetSynthesis)(pecan, item);
          break;
        }
      } else if (mod === 0) {
        if (barks >= 1) {
          (0,external_kolmafia_namespaceObject.sweetSynthesis)(bark, item);
          break;
        }
      }
    }

    if (!lib_have(template_string_$effect(asmohccs_lib_templateObject16 || (asmohccs_lib_templateObject16 = asmohccs_lib_taggedTemplateLiteral(["Synthesis: Learning"]))))) {
      if (!lib_have(template_string_$item(asmohccs_lib_templateObject17 || (asmohccs_lib_templateObject17 = asmohccs_lib_taggedTemplateLiteral(["sugar shotgun"]))))) {
        if (!lib_have(template_string_$item(asmohccs_lib_templateObject18 || (asmohccs_lib_templateObject18 = asmohccs_lib_taggedTemplateLiteral(["sugar sheet"]))))) (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(asmohccs_lib_templateObject19 || (asmohccs_lib_templateObject19 = asmohccs_lib_taggedTemplateLiteral(["sugar sheet"]))));
        (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(asmohccs_lib_templateObject20 || (asmohccs_lib_templateObject20 = asmohccs_lib_taggedTemplateLiteral(["sugar shotgun"]))));
      }

      if (pecans >= 1) {
        (0,external_kolmafia_namespaceObject.sweetSynthesis)(pecan, template_string_$item(asmohccs_lib_templateObject21 || (asmohccs_lib_templateObject21 = asmohccs_lib_taggedTemplateLiteral(["sugar shotgun"]))));
      } else {
        (0,external_kolmafia_namespaceObject.sweetSynthesis)(template_string_$item(asmohccs_lib_templateObject22 || (asmohccs_lib_templateObject22 = asmohccs_lib_taggedTemplateLiteral(["sugar shotgun"]))), template_string_$item(asmohccs_lib_templateObject23 || (asmohccs_lib_templateObject23 = asmohccs_lib_taggedTemplateLiteral(["peppermint sprout"]))));
      }
    }
  }

  if (!lib_have(template_string_$effect(asmohccs_lib_templateObject24 || (asmohccs_lib_templateObject24 = asmohccs_lib_taggedTemplateLiteral(["Synthesis: Learning"]))))) {
    throw "I'm very embarrassed, and I'm sorry to admit it, but I failed to synthesize learning. Pwease fix me :c.";
  }
}
function synthMusExp() {
  if (property_get("harvestGardenHardcore") === "none") {
    (0,external_kolmafia_namespaceObject.visitUrl)("campground.php?action=garden");
  }

  if (!property_get("_candySummons")) {
    (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(asmohccs_lib_templateObject25 || (asmohccs_lib_templateObject25 = asmohccs_lib_taggedTemplateLiteral(["Summon Crimbo Candy"]))));
  }

  var fudge = template_string_$item(asmohccs_lib_templateObject26 || (asmohccs_lib_templateObject26 = asmohccs_lib_taggedTemplateLiteral(["Crimbo fudge"])));
  var pecan = template_string_$item(asmohccs_lib_templateObject27 || (asmohccs_lib_templateObject27 = asmohccs_lib_taggedTemplateLiteral(["Crimbo candied pecan"])));
  var bark = template_string_$item(asmohccs_lib_templateObject28 || (asmohccs_lib_templateObject28 = asmohccs_lib_taggedTemplateLiteral(["Crimbo peppermint bark"])));
  var fudges = (0,external_kolmafia_namespaceObject.availableAmount)(fudge);
  var pecans = (0,external_kolmafia_namespaceObject.availableAmount)(pecan);
  var barks = (0,external_kolmafia_namespaceObject.availableAmount)(bark);
  var twist = template_string_$item(asmohccs_lib_templateObject29 || (asmohccs_lib_templateObject29 = asmohccs_lib_taggedTemplateLiteral(["peppermint twist"])));
  var twists = (0,external_kolmafia_namespaceObject.availableAmount)(twist);
  var sprout = template_string_$item(asmohccs_lib_templateObject30 || (asmohccs_lib_templateObject30 = asmohccs_lib_taggedTemplateLiteral(["peppermint sprout"])));
  var sprouts = (0,external_kolmafia_namespaceObject.availableAmount)(sprout);

  if (fudges >= 1 && barks >= 1) {
    (0,external_kolmafia_namespaceObject.sweetSynthesis)(bark, fudge);
  } else if (fudges < 3) {
    if (twists < 2) {
      (0,external_kolmafia_namespaceObject.create)(2 - twists, template_string_$item(asmohccs_lib_templateObject31 || (asmohccs_lib_templateObject31 = asmohccs_lib_taggedTemplateLiteral(["peppermint twist"]))));
    }

    (0,external_kolmafia_namespaceObject.sweetSynthesis)(bark, template_string_$item(asmohccs_lib_templateObject32 || (asmohccs_lib_templateObject32 = asmohccs_lib_taggedTemplateLiteral(["peppermint sprout"]))));
  } else {
    gingerCandy(); //Section below stolen from Bean (with edits)

    var inventory = (0,external_kolmafia_namespaceObject.getInventory)();

    for (var _i2 = 0, _Object$keys2 = Object.keys(inventory); _i2 < _Object$keys2.length; _i2++) {
      var itemName = _Object$keys2[_i2];
      var item = Item.get(itemName);
      var count = inventory[itemName];
      var mod = (0,external_kolmafia_namespaceObject.toInt)(Item.get(itemName)) % 5;

      if (item.candyType !== 'complex') {
        continue;
      }

      if (mod === 3) {
        if (fudges >= 1) {
          (0,external_kolmafia_namespaceObject.sweetSynthesis)(fudge, item);
          break;
        }
      } else if (mod === 4) {
        if (barks >= 1) {
          (0,external_kolmafia_namespaceObject.sweetSynthesis)(bark, item);
          break;
        }
      } else if (mod === 2) {
        if (pecans >= 1) {
          (0,external_kolmafia_namespaceObject.sweetSynthesis)(pecan, item);
          break;
        } else if (sprouts >= 1) {
          (0,external_kolmafia_namespaceObject.sweetSynthesis)(sprout, item);
          break;
        }
      } else if (mod === 1) {
        if (twists < 1 && sprouts >= 1) {
          (0,external_kolmafia_namespaceObject.create)(1, twist);
          (0,external_kolmafia_namespaceObject.sweetSynthesis)(twist, item);
        }
      }
    }

    if (!lib_have(template_string_$effect(asmohccs_lib_templateObject33 || (asmohccs_lib_templateObject33 = asmohccs_lib_taggedTemplateLiteral(["Synthesis: Movement"]))))) {
      if (fudges >= 1) {
        if (!lib_have(template_string_$item(asmohccs_lib_templateObject34 || (asmohccs_lib_templateObject34 = asmohccs_lib_taggedTemplateLiteral(["sugar shotgun"]))))) {
          if (!lib_have(template_string_$item(asmohccs_lib_templateObject35 || (asmohccs_lib_templateObject35 = asmohccs_lib_taggedTemplateLiteral(["sugar sheet"]))))) (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(asmohccs_lib_templateObject36 || (asmohccs_lib_templateObject36 = asmohccs_lib_taggedTemplateLiteral(["sugar sheet"]))));
          (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(asmohccs_lib_templateObject37 || (asmohccs_lib_templateObject37 = asmohccs_lib_taggedTemplateLiteral(["sugar shotgun"]))));
        }

        (0,external_kolmafia_namespaceObject.sweetSynthesis)(fudge, template_string_$item(asmohccs_lib_templateObject38 || (asmohccs_lib_templateObject38 = asmohccs_lib_taggedTemplateLiteral(["sugar shotgun"]))));
      }

      if (!lib_have(template_string_$item(asmohccs_lib_templateObject39 || (asmohccs_lib_templateObject39 = asmohccs_lib_taggedTemplateLiteral(["sugar shorts"]))))) {
        if (!lib_have(template_string_$item(asmohccs_lib_templateObject40 || (asmohccs_lib_templateObject40 = asmohccs_lib_taggedTemplateLiteral(["sugar sheet"]))))) (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(asmohccs_lib_templateObject41 || (asmohccs_lib_templateObject41 = asmohccs_lib_taggedTemplateLiteral(["sugar sheet"]))));
        (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(asmohccs_lib_templateObject42 || (asmohccs_lib_templateObject42 = asmohccs_lib_taggedTemplateLiteral(["sugar shorts"]))));
      }

      if (pecans >= 1) {
        (0,external_kolmafia_namespaceObject.sweetSynthesis)(pecan, template_string_$item(asmohccs_lib_templateObject43 || (asmohccs_lib_templateObject43 = asmohccs_lib_taggedTemplateLiteral(["sugar shorts"]))));
      } else {
        (0,external_kolmafia_namespaceObject.sweetSynthesis)(template_string_$item(asmohccs_lib_templateObject44 || (asmohccs_lib_templateObject44 = asmohccs_lib_taggedTemplateLiteral(["sugar shorts"]))), sprout);
      }
    }
  }

  if (!lib_have(template_string_$effect(asmohccs_lib_templateObject45 || (asmohccs_lib_templateObject45 = asmohccs_lib_taggedTemplateLiteral(["Synthesis: Movement"]))))) {
    throw "I'm very embarrassed, and I'm sorry to admit it, but I failed to synthesize movement. Help? :c.";
  }
}
function synthMoxExp() {
  if (property_get("harvestGardenHardcore") === "none") {
    (0,external_kolmafia_namespaceObject.visitUrl)("campground.php?action=garden");
  }

  if (!property_get("_candySummons")) {
    (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(asmohccs_lib_templateObject46 || (asmohccs_lib_templateObject46 = asmohccs_lib_taggedTemplateLiteral(["Summon Crimbo Candy"]))));
  }

  var fudge = template_string_$item(asmohccs_lib_templateObject47 || (asmohccs_lib_templateObject47 = asmohccs_lib_taggedTemplateLiteral(["Crimbo fudge"])));
  var pecan = template_string_$item(asmohccs_lib_templateObject48 || (asmohccs_lib_templateObject48 = asmohccs_lib_taggedTemplateLiteral(["Crimbo candied pecan"])));
  var bark = template_string_$item(asmohccs_lib_templateObject49 || (asmohccs_lib_templateObject49 = asmohccs_lib_taggedTemplateLiteral(["Crimbo peppermint bark"])));
  var fudges = (0,external_kolmafia_namespaceObject.availableAmount)(fudge);
  var pecans = (0,external_kolmafia_namespaceObject.availableAmount)(pecan);
  var barks = (0,external_kolmafia_namespaceObject.availableAmount)(bark);
  var twist = template_string_$item(asmohccs_lib_templateObject50 || (asmohccs_lib_templateObject50 = asmohccs_lib_taggedTemplateLiteral(["peppermint twist"])));
  var twists = (0,external_kolmafia_namespaceObject.availableAmount)(twist);
  var sprout = template_string_$item(asmohccs_lib_templateObject51 || (asmohccs_lib_templateObject51 = asmohccs_lib_taggedTemplateLiteral(["peppermint sprout"]))); //const sprouts = availableAmount(sprout);

  if (fudges >= 1) {
    (0,external_kolmafia_namespaceObject.sweetSynthesis)(fudge, sprout);
  } else if (barks >= 1) {
    if (twists < 1) {
      (0,external_kolmafia_namespaceObject.create)(1, twist);
      (0,external_kolmafia_namespaceObject.sweetSynthesis)(twist, bark);
    }
  } else if (lib_have(template_string_$item(asmohccs_lib_templateObject52 || (asmohccs_lib_templateObject52 = asmohccs_lib_taggedTemplateLiteral(["bag of many confections"])))) && pecans >= 1) {
    (0,external_kolmafia_namespaceObject.sweetSynthesis)(pecan, template_string_$item(asmohccs_lib_templateObject53 || (asmohccs_lib_templateObject53 = asmohccs_lib_taggedTemplateLiteral(["bag of many confections"]))));
  } else {
    gingerCandy(); //Section below stolen from Bean (with edits)

    var inventory = (0,external_kolmafia_namespaceObject.getInventory)();

    for (var _i3 = 0, _Object$keys3 = Object.keys(inventory); _i3 < _Object$keys3.length; _i3++) {
      var itemName = _Object$keys3[_i3];
      var item = Item.get(itemName);
      var count = inventory[itemName];
      var mod = (0,external_kolmafia_namespaceObject.toInt)(Item.get(itemName)) % 5;

      if (item.candyType !== 'complex') {
        continue;
      }

      if (mod === 0) {
        if (fudges >= 1) {
          (0,external_kolmafia_namespaceObject.sweetSynthesis)(fudge, item);
          break;
        }
      } else if (mod === 4) {
        if (pecans >= 1) {
          (0,external_kolmafia_namespaceObject.sweetSynthesis)(pecan, item);
          break;
        }
      } else if (mod === 1) {
        if (barks >= 1) {
          (0,external_kolmafia_namespaceObject.sweetSynthesis)(bark, item);
          break;
        }
      }
    }

    if (!lib_have(template_string_$effect(asmohccs_lib_templateObject54 || (asmohccs_lib_templateObject54 = asmohccs_lib_taggedTemplateLiteral(["Synthesis: Style"]))))) {
      if (!lib_have(template_string_$item(asmohccs_lib_templateObject55 || (asmohccs_lib_templateObject55 = asmohccs_lib_taggedTemplateLiteral(["sugar shillelagh"]))))) {
        if (!lib_have(template_string_$item(asmohccs_lib_templateObject56 || (asmohccs_lib_templateObject56 = asmohccs_lib_taggedTemplateLiteral(["sugar sheet"]))))) (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(asmohccs_lib_templateObject57 || (asmohccs_lib_templateObject57 = asmohccs_lib_taggedTemplateLiteral(["sugar sheet"]))));
        (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(asmohccs_lib_templateObject58 || (asmohccs_lib_templateObject58 = asmohccs_lib_taggedTemplateLiteral(["sugar shillelagh"]))));
      }

      if (pecans >= 1) {
        (0,external_kolmafia_namespaceObject.sweetSynthesis)(pecan, template_string_$item(asmohccs_lib_templateObject59 || (asmohccs_lib_templateObject59 = asmohccs_lib_taggedTemplateLiteral(["sugar shillelagh"]))));
      } else {
        (0,external_kolmafia_namespaceObject.sweetSynthesis)(template_string_$item(asmohccs_lib_templateObject60 || (asmohccs_lib_templateObject60 = asmohccs_lib_taggedTemplateLiteral(["sugar shillelagh"]))), template_string_$item(asmohccs_lib_templateObject61 || (asmohccs_lib_templateObject61 = asmohccs_lib_taggedTemplateLiteral(["peppermint sprout"]))));
      }
    }
  }

  if (!lib_have(template_string_$effect(asmohccs_lib_templateObject62 || (asmohccs_lib_templateObject62 = asmohccs_lib_taggedTemplateLiteral(["Synthesis: Style"]))))) {
    throw "I'm very embarrassed, and I'm sorry to admit it, but I failed to synthesize style.  ¯\_(ツ)_/¯";
  }
}
function synthItem() {
  if (property_get("harvestGardenHardcore") === "none") {
    (0,external_kolmafia_namespaceObject.visitUrl)("campground.php?action=garden");
  }

  if (!property_get("_candySummons")) {
    (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(asmohccs_lib_templateObject63 || (asmohccs_lib_templateObject63 = asmohccs_lib_taggedTemplateLiteral(["Summon Crimbo Candy"]))));
  }

  var fudge = template_string_$item(asmohccs_lib_templateObject64 || (asmohccs_lib_templateObject64 = asmohccs_lib_taggedTemplateLiteral(["Crimbo fudge"])));
  var pecan = template_string_$item(asmohccs_lib_templateObject65 || (asmohccs_lib_templateObject65 = asmohccs_lib_taggedTemplateLiteral(["Crimbo candied pecan"])));
  var bark = template_string_$item(asmohccs_lib_templateObject66 || (asmohccs_lib_templateObject66 = asmohccs_lib_taggedTemplateLiteral(["Crimbo peppermint bark"])));
  var fudges = (0,external_kolmafia_namespaceObject.availableAmount)(fudge);
  var pecans = (0,external_kolmafia_namespaceObject.availableAmount)(pecan);
  var barks = (0,external_kolmafia_namespaceObject.availableAmount)(bark);

  if (inMysClass()) {
    if (barks > 2) {
      (0,external_kolmafia_namespaceObject.sweetSynthesis)(bark, bark);
    } else {
      if (!lib_have(template_string_$item(asmohccs_lib_templateObject67 || (asmohccs_lib_templateObject67 = asmohccs_lib_taggedTemplateLiteral(["peppermint twist"]))))) {
        (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(asmohccs_lib_templateObject68 || (asmohccs_lib_templateObject68 = asmohccs_lib_taggedTemplateLiteral(["peppermint twist"]))));
      }

      if (pecans >= 1) {
        (0,external_kolmafia_namespaceObject.sweetSynthesis)(pecan, template_string_$item(asmohccs_lib_templateObject69 || (asmohccs_lib_templateObject69 = asmohccs_lib_taggedTemplateLiteral(["peppermint twist"]))));
      } else {
        (0,external_kolmafia_namespaceObject.sweetSynthesis)(template_string_$item(asmohccs_lib_templateObject70 || (asmohccs_lib_templateObject70 = asmohccs_lib_taggedTemplateLiteral(["peppermint sprout"]))), template_string_$item(asmohccs_lib_templateObject71 || (asmohccs_lib_templateObject71 = asmohccs_lib_taggedTemplateLiteral(["peppermint twist"]))));
      }
    }
  } else if (inMusClass()) {
    if (barks >= 2 && fudges == 0) {
      (0,external_kolmafia_namespaceObject.sweetSynthesis)(bark, bark);
    } else {
      if (!lib_have(template_string_$item(asmohccs_lib_templateObject72 || (asmohccs_lib_templateObject72 = asmohccs_lib_taggedTemplateLiteral(["peppermint twist"]))))) {
        (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(asmohccs_lib_templateObject73 || (asmohccs_lib_templateObject73 = asmohccs_lib_taggedTemplateLiteral(["peppermint twist"]))));
      }

      if (pecans >= 1) {
        (0,external_kolmafia_namespaceObject.sweetSynthesis)(pecan, template_string_$item(asmohccs_lib_templateObject74 || (asmohccs_lib_templateObject74 = asmohccs_lib_taggedTemplateLiteral(["peppermint twist"]))));
      } else {
        (0,external_kolmafia_namespaceObject.sweetSynthesis)(template_string_$item(asmohccs_lib_templateObject75 || (asmohccs_lib_templateObject75 = asmohccs_lib_taggedTemplateLiteral(["peppermint sprout"]))), template_string_$item(asmohccs_lib_templateObject76 || (asmohccs_lib_templateObject76 = asmohccs_lib_taggedTemplateLiteral(["peppermint twist"]))));
      }
    }
  } else if (inMoxClass()) {
    if (barks >= 2 && pecans == 0) {
      (0,external_kolmafia_namespaceObject.sweetSynthesis)(bark, bark);
    } else {
      if (!lib_have(template_string_$item(asmohccs_lib_templateObject77 || (asmohccs_lib_templateObject77 = asmohccs_lib_taggedTemplateLiteral(["peppermint twist"]))))) {
        (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(asmohccs_lib_templateObject78 || (asmohccs_lib_templateObject78 = asmohccs_lib_taggedTemplateLiteral(["peppermint twist"]))));
      }

      if (pecans >= 1) {
        (0,external_kolmafia_namespaceObject.sweetSynthesis)(pecan, template_string_$item(asmohccs_lib_templateObject79 || (asmohccs_lib_templateObject79 = asmohccs_lib_taggedTemplateLiteral(["peppermint twist"]))));
      } else {
        (0,external_kolmafia_namespaceObject.sweetSynthesis)(template_string_$item(asmohccs_lib_templateObject80 || (asmohccs_lib_templateObject80 = asmohccs_lib_taggedTemplateLiteral(["peppermint sprout"]))), template_string_$item(asmohccs_lib_templateObject81 || (asmohccs_lib_templateObject81 = asmohccs_lib_taggedTemplateLiteral(["peppermint twist"]))));
      }
    }
  }

  if (!lib_have(template_string_$effect(asmohccs_lib_templateObject82 || (asmohccs_lib_templateObject82 = asmohccs_lib_taggedTemplateLiteral(["Synthesis: Collection"]))))) {
    throw "I'm very embarrassed, and I'm sorry to admit it, but I failed to synthesize collection. Pwease fix me :c.";
  }
}
function synthMyst() {
  if (property_get("harvestGardenHardcore") === "none") {
    (0,external_kolmafia_namespaceObject.visitUrl)("campground.php?action=garden");
  }

  if (!property_get("_candySummons")) {
    (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(asmohccs_lib_templateObject83 || (asmohccs_lib_templateObject83 = asmohccs_lib_taggedTemplateLiteral(["Summon Crimbo Candy"]))));
  } //const fudge = $item`Crimbo fudge`;
  //const pecan = $item`Crimbo candied pecan`;
  //const bark = $item`Crimbo peppermint bark`;
  //const fudges = availableAmount(fudge);
  //const pecans = availableAmount(pecan);
  //const barks = availableAmount(bark);


  if (lib_have(template_string_$item(asmohccs_lib_templateObject84 || (asmohccs_lib_templateObject84 = asmohccs_lib_taggedTemplateLiteral(["bag of many confections"]))))) {
    if (!property_get("_chubbyAndPlumpUsed")) {
      (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(asmohccs_lib_templateObject85 || (asmohccs_lib_templateObject85 = asmohccs_lib_taggedTemplateLiteral(["Chubby and Plump"]))));
    }

    (0,external_kolmafia_namespaceObject.sweetSynthesis)(template_string_$item(asmohccs_lib_templateObject86 || (asmohccs_lib_templateObject86 = asmohccs_lib_taggedTemplateLiteral(["Chubby and Plump bar"]))), template_string_$item(asmohccs_lib_templateObject87 || (asmohccs_lib_templateObject87 = asmohccs_lib_taggedTemplateLiteral(["bag of many confections"]))));
  } else {
    var mint = template_string_$item(_templateObject88 || (_templateObject88 = asmohccs_lib_taggedTemplateLiteral(["Senior Mints"])));
    var mints = (0,external_kolmafia_namespaceObject.availableAmount)(mint);
    var orangeHeart = template_string_$item(_templateObject89 || (_templateObject89 = asmohccs_lib_taggedTemplateLiteral(["orange candy heart"])));

    var orangeHearts = () => (0,external_kolmafia_namespaceObject.availableAmount)(orangeHeart);

    var pinkHeart = template_string_$item(_templateObject90 || (_templateObject90 = asmohccs_lib_taggedTemplateLiteral(["pink candy heart"])));

    var pinkHearts = () => (0,external_kolmafia_namespaceObject.availableAmount)(template_string_$item(_templateObject91 || (_templateObject91 = asmohccs_lib_taggedTemplateLiteral(["pink candy heart"]))));

    var n = 0;

    while (mints + orangeHearts() + pinkHearts() === 0 && n < 11) {
      (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(_templateObject92 || (_templateObject92 = asmohccs_lib_taggedTemplateLiteral(["Summon Candy Heart"]))));
      n++;
    }

    if (mints + orangeHearts() + pinkHearts() === 0) {
      throw "Failed to summon hearts in a timely manner";
    }

    if (mints >= 1) {
      (0,external_kolmafia_namespaceObject.sweetSynthesis)(mint, template_string_$item(_templateObject93 || (_templateObject93 = asmohccs_lib_taggedTemplateLiteral(["peppermint sprout"]))));
    } else if (orangeHearts() >= 1) {
      (0,external_kolmafia_namespaceObject.sweetSynthesis)(orangeHeart, template_string_$item(_templateObject94 || (_templateObject94 = asmohccs_lib_taggedTemplateLiteral(["peppermint sprout"]))));
    } else if (pinkHearts() >= 1) {
      if (!lib_have(template_string_$item(_templateObject95 || (_templateObject95 = asmohccs_lib_taggedTemplateLiteral(["peppermint twist"]))))) {
        (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(_templateObject96 || (_templateObject96 = asmohccs_lib_taggedTemplateLiteral(["peppermint twist"]))));
      }

      (0,external_kolmafia_namespaceObject.sweetSynthesis)(pinkHeart, template_string_$item(_templateObject97 || (_templateObject97 = asmohccs_lib_taggedTemplateLiteral(["peppermint twist"]))));
    }
  }

  if ((0,external_kolmafia_namespaceObject.haveEffect)(template_string_$effect(_templateObject98 || (_templateObject98 = asmohccs_lib_taggedTemplateLiteral(["Synthesis: Smart"])))) === 0) {
    throw "I'm very embarrassed, and I'm sorry to admit it, but I failed to synthesize smart. Pwease fix me :c.";
  }
}
function synthMus() {
  if (property_get("harvestGardenHardcore") === "none") {
    (0,external_kolmafia_namespaceObject.visitUrl)("campground.php?action=garden");
  }

  if (!property_get("_candySummons")) {
    (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(_templateObject99 || (_templateObject99 = asmohccs_lib_taggedTemplateLiteral(["Summon Crimbo Candy"]))));
  } //const fudge = $item`Crimbo fudge`;
  //const pecan = $item`Crimbo candied pecan`;


  var bark = template_string_$item(_templateObject100 || (_templateObject100 = asmohccs_lib_taggedTemplateLiteral(["Crimbo peppermint bark"]))); //const fudges = availableAmount(fudge);
  //const pecans = availableAmount(pecan);

  var barks = (0,external_kolmafia_namespaceObject.availableAmount)(bark);

  if (!property_get("_chubbyAndPlumpUsed")) {
    (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(_templateObject101 || (_templateObject101 = asmohccs_lib_taggedTemplateLiteral(["Chubby and Plump"]))));
  }

  if (lib_have(template_string_$item(_templateObject102 || (_templateObject102 = asmohccs_lib_taggedTemplateLiteral(["Chubby and Plump bar"])))) && barks >= 2) {
    (0,external_kolmafia_namespaceObject.sweetSynthesis)(template_string_$item(_templateObject103 || (_templateObject103 = asmohccs_lib_taggedTemplateLiteral(["Chubby and Plump bar"]))), bark);
  } else if (lib_have(template_string_$item(_templateObject104 || (_templateObject104 = asmohccs_lib_taggedTemplateLiteral(["bag of many confections"]))))) {
    var mint = template_string_$item(_templateObject105 || (_templateObject105 = asmohccs_lib_taggedTemplateLiteral(["Senior Mints"])));
    var mints = (0,external_kolmafia_namespaceObject.availableAmount)(mint);
    var orangeHeart = template_string_$item(_templateObject106 || (_templateObject106 = asmohccs_lib_taggedTemplateLiteral(["orange candy heart"])));

    var orangeHearts = () => (0,external_kolmafia_namespaceObject.availableAmount)(orangeHeart);

    var pinkHeart = template_string_$item(_templateObject107 || (_templateObject107 = asmohccs_lib_taggedTemplateLiteral(["pink candy heart"])));

    var pinkHearts = () => (0,external_kolmafia_namespaceObject.availableAmount)(template_string_$item(_templateObject108 || (_templateObject108 = asmohccs_lib_taggedTemplateLiteral(["pink candy heart"]))));

    var n = 0;

    while (mints + orangeHearts() === 0 && n < 11) {
      (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(_templateObject109 || (_templateObject109 = asmohccs_lib_taggedTemplateLiteral(["Summon Candy Heart"]))));
      n++;
    }

    if (mints + orangeHearts() + pinkHearts() === 0) {
      throw "Failed to summon hearts in a timely manner";
    }

    if (mints >= 1) {
      (0,external_kolmafia_namespaceObject.sweetSynthesis)(mint, template_string_$item(_templateObject110 || (_templateObject110 = asmohccs_lib_taggedTemplateLiteral(["bag of many confections"]))));
    } else if (orangeHearts() >= 1) {
      (0,external_kolmafia_namespaceObject.sweetSynthesis)(orangeHeart, template_string_$item(_templateObject111 || (_templateObject111 = asmohccs_lib_taggedTemplateLiteral(["bag of many confections"]))));
    } else if (pinkHearts() >= 1) {
      (0,external_kolmafia_namespaceObject.sweetSynthesis)(pinkHeart, template_string_$item(_templateObject112 || (_templateObject112 = asmohccs_lib_taggedTemplateLiteral(["peppermint sprout"]))));
    }
  }

  if ((0,external_kolmafia_namespaceObject.haveEffect)(template_string_$effect(_templateObject113 || (_templateObject113 = asmohccs_lib_taggedTemplateLiteral(["Synthesis: Strong"])))) === 0) {
    throw "I'm very embarrassed, and I'm sorry to admit it, but I failed to synthesize strong. You're on your own pal.";
  }
}
function synthMox() {
  if (property_get("harvestGardenHardcore") === "none") {
    (0,external_kolmafia_namespaceObject.visitUrl)("campground.php?action=garden");
  }

  if (!property_get("_candySummons")) {
    (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(_templateObject114 || (_templateObject114 = asmohccs_lib_taggedTemplateLiteral(["Summon Crimbo Candy"]))));
  }

  var fudge = template_string_$item(_templateObject115 || (_templateObject115 = asmohccs_lib_taggedTemplateLiteral(["Crimbo fudge"])));
  var pecan = template_string_$item(_templateObject116 || (_templateObject116 = asmohccs_lib_taggedTemplateLiteral(["Crimbo candied pecan"])));
  var bark = template_string_$item(_templateObject117 || (_templateObject117 = asmohccs_lib_taggedTemplateLiteral(["Crimbo peppermint bark"])));
  var fudges = (0,external_kolmafia_namespaceObject.availableAmount)(fudge);
  var pecans = (0,external_kolmafia_namespaceObject.availableAmount)(pecan);
  var barks = (0,external_kolmafia_namespaceObject.availableAmount)(bark);

  if (!property_get("_chubbyAndPlumpUsed")) {
    (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(_templateObject118 || (_templateObject118 = asmohccs_lib_taggedTemplateLiteral(["Chubby and Plump"]))));
  }

  if (pecans >= 1) {
    (0,external_kolmafia_namespaceObject.sweetSynthesis)(template_string_$item(_templateObject119 || (_templateObject119 = asmohccs_lib_taggedTemplateLiteral(["Chubby and Plump bar"]))), pecan);
  } else if (fudges > 1 && lib_have(template_string_$item(_templateObject120 || (_templateObject120 = asmohccs_lib_taggedTemplateLiteral(["bag of many confections"]))))) {
    var taffy = template_string_$item(_templateObject121 || (_templateObject121 = asmohccs_lib_taggedTemplateLiteral(["Daffy Taffy"])));
    var taffys = (0,external_kolmafia_namespaceObject.availableAmount)(taffy);
    var candy = template_string_$item(_templateObject122 || (_templateObject122 = asmohccs_lib_taggedTemplateLiteral(["Cold Hots candy"])));
    var candys = (0,external_kolmafia_namespaceObject.availableAmount)(candy);
    var yellowHeart = template_string_$item(_templateObject123 || (_templateObject123 = asmohccs_lib_taggedTemplateLiteral(["yellow candy heart"])));

    var yellowHearts = () => (0,external_kolmafia_namespaceObject.availableAmount)(yellowHeart);

    var n = 0;

    while (taffys + yellowHearts() + candys === 0 && n < 11) {
      (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(_templateObject124 || (_templateObject124 = asmohccs_lib_taggedTemplateLiteral(["Summon Candy Heart"]))));
      n++;
    }

    if (taffys + yellowHearts() + candys === 0) {
      throw "Failed to summon hearts in a timely manner";
    }

    if (taffys >= 1) {
      (0,external_kolmafia_namespaceObject.sweetSynthesis)(taffy, template_string_$item(_templateObject125 || (_templateObject125 = asmohccs_lib_taggedTemplateLiteral(["bag of many confections"]))));
    } else if (yellowHearts() >= 1) {
      (0,external_kolmafia_namespaceObject.sweetSynthesis)(yellowHeart, template_string_$item(_templateObject126 || (_templateObject126 = asmohccs_lib_taggedTemplateLiteral(["bag of many confections"]))));
    } else if (candys >= 1) {
      (0,external_kolmafia_namespaceObject.sweetSynthesis)(candy, template_string_$item(_templateObject127 || (_templateObject127 = asmohccs_lib_taggedTemplateLiteral(["bag of many confections"]))));
    } else {
      (0,external_kolmafia_namespaceObject.sweetSynthesis)(template_string_$item(_templateObject128 || (_templateObject128 = asmohccs_lib_taggedTemplateLiteral(["peppermint sprout"]))), template_string_$item(_templateObject129 || (_templateObject129 = asmohccs_lib_taggedTemplateLiteral(["Chubby and Plump bar"]))));
    }
  } else if (barks >= 1) {
    (0,external_kolmafia_namespaceObject.sweetSynthesis)(template_string_$item(_templateObject130 || (_templateObject130 = asmohccs_lib_taggedTemplateLiteral(["peppermint sprout"]))), template_string_$item(_templateObject131 || (_templateObject131 = asmohccs_lib_taggedTemplateLiteral(["Chubby and Plump bar"]))));
  }

  if ((0,external_kolmafia_namespaceObject.haveEffect)(template_string_$effect(_templateObject132 || (_templateObject132 = asmohccs_lib_taggedTemplateLiteral(["Synthesis: Cool"])))) === 0) {
    throw "I'm very embarrassed, and I'm sorry to admit it, but I failed to synthesize cool. Good Luck Buster.";
  }
}
function kramcoCheck() {
  var kramcoNumber = 5 + 3 * property_get("_sausageFights") + Math.pow(Math.max(0, property_get("_sausageFights") - 5), 3);
  return (0,external_kolmafia_namespaceObject.totalTurnsPlayed)() - property_get("_lastSausageMonsterTurn") + 1 >= kramcoNumber;
}
function asmohccs_lib_useDefaultFamiliar() {
  var canAttack = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  if (!property_get("_bagOfCandy") && canAttack) {
    (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(_templateObject133 || (_templateObject133 = asmohccs_lib_taggedTemplateLiteral(["Stocking Mimic"]))));
  } else if (!(0,external_kolmafia_namespaceObject.haveEffect)(template_string_$effect(_templateObject134 || (_templateObject134 = asmohccs_lib_taggedTemplateLiteral(["Spit Upon"])))) && !property_get("csServicesPerformed").split(",").includes("Reduce Gazelle Population")) {
    (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(_templateObject135 || (_templateObject135 = asmohccs_lib_taggedTemplateLiteral(["Melodramedary"]))));
    (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(_templateObject136 || (_templateObject136 = asmohccs_lib_taggedTemplateLiteral(["familiar"]))), template_string_$item(_templateObject137 || (_templateObject137 = asmohccs_lib_taggedTemplateLiteral(["dromedary drinking helmet"]))));
  } else if (canAttack && !lib_have(template_string_$item(_templateObject138 || (_templateObject138 = asmohccs_lib_taggedTemplateLiteral(["short stack of pancakes"])))) && !lib_have(template_string_$effect(_templateObject139 || (_templateObject139 = asmohccs_lib_taggedTemplateLiteral(["Shortly Stacked"])))) && !property_get("csServicesPerformed").split(",").includes("Breed More Collies")) {
    (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(_templateObject140 || (_templateObject140 = asmohccs_lib_taggedTemplateLiteral(["Shorter-Order Cook"]))));
  } else if (!lib_have(template_string_$item(_templateObject141 || (_templateObject141 = asmohccs_lib_taggedTemplateLiteral(["burning newspaper"])))) && !lib_have(template_string_$item(_templateObject142 || (_templateObject142 = asmohccs_lib_taggedTemplateLiteral(["burning paper crane"]))))) {
    (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(_templateObject143 || (_templateObject143 = asmohccs_lib_taggedTemplateLiteral(["Garbage Fire"]))));
  } else {
    (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(_templateObject144 || (_templateObject144 = asmohccs_lib_taggedTemplateLiteral(["Puck Man"]))));
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
  (0,external_kolmafia_namespaceObject.print)("Checking test ".concat(testNum, "..."));
  var text = (0,external_kolmafia_namespaceObject.visitUrl)("council.php");
  return !(0,external_kolmafia_namespaceObject.containsText)(text, "<input type=hidden name=option value=".concat(testNum, ">"));
}
function doTest(testNum) {
  //stolen directly from bean
  if (!testDone(testNum)) {
    (0,external_kolmafia_namespaceObject.visitUrl)("choice.php?whichchoice=1089&option=".concat(testNum));

    if (!testDone(testNum)) {
      throw 'Failed to do test " + testNum + ". Maybe we are out of turns.';
    }
  } else {
    (0,external_kolmafia_namespaceObject.print)("Test ".concat(testNum, " already completed."));
  }
}
function ensureInnerElf() {
  //stolen merely mostly from bean
  if (!lib_have(template_string_$effect(_templateObject145 || (_templateObject145 = asmohccs_lib_taggedTemplateLiteral(["Inner Elf"]))))) {
    setClan(property_get("asmocs_elfClan", "Hobopolis Vacation Home"));

    try {
      withOutfit(new Outfit(new Map([[template_string_$slot(_templateObject146 || (_templateObject146 = asmohccs_lib_taggedTemplateLiteral(["acc3"]))), template_string_$item(_templateObject147 || (_templateObject147 = asmohccs_lib_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"])))]]), template_string_$familiar(_templateObject148 || (_templateObject148 = asmohccs_lib_taggedTemplateLiteral(["Machine Elf"])))), () => {
        asmohccs_lib_ensureEffect(template_string_$effect(_templateObject149 || (_templateObject149 = asmohccs_lib_taggedTemplateLiteral(["Blood Bubble"]))));
        advMacro(template_string_$location(_templateObject150 || (_templateObject150 = asmohccs_lib_taggedTemplateLiteral(["The Slime Tube"]))), combat_Macro.trySkill($skill(_templateObject151 || (_templateObject151 = asmohccs_lib_taggedTemplateLiteral(["KGB tranquilizer dart"])))).trySkill($skill(_templateObject152 || (_templateObject152 = asmohccs_lib_taggedTemplateLiteral(["Snokebomb"])))));
      });
    } finally {
      setClan(property_get("asmocs_mainClan", "Alliance From Heck"));
    }
  }
}
function fightSausageIfAble(location, macro) {
  if (kramcoCheck()) {
    (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(_templateObject153 || (_templateObject153 = asmohccs_lib_taggedTemplateLiteral(["off-hand"]))), template_string_$item(_templateObject154 || (_templateObject154 = asmohccs_lib_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))));
    var sausages = property_get("_sausageFights");
    asmohccs_lib_advMacroAA(location, macro, () => {
      return sausages === property_get("_sausageFights");
    });

    if (property_get("lastEncounter") !== "sausage goblin") {
      throw "Did not fight a sausage, but I thought I would. Uh oh!";
    }
  }
}
function shrug(ef) {
  if ((0,external_kolmafia_namespaceObject.haveEffect)(ef) > 0) {
    (0,external_kolmafia_namespaceObject.cliExecute)("shrug ".concat(ef.name));
  }
} // We have Stevedave's, Ur-Kel's on at all times during leveling (managed via mood); third and fourth slots are variable.

var songSlots = [$effects(_templateObject155 || (_templateObject155 = asmohccs_lib_taggedTemplateLiteral(["Stevedave's Shanty of Superiority"]))), $effects(_templateObject156 || (_templateObject156 = asmohccs_lib_taggedTemplateLiteral(["Ur-Kel's Aria of Annoyance"]))), $effects(_templateObject157 || (_templateObject157 = asmohccs_lib_taggedTemplateLiteral(["Power Ballad of the Arrowsmith, The Magical Mojomuscular Melody, The Moxious Madrigal, Ode to Booze, Jackasses' Symphony of Destruction"]))), $effects(_templateObject158 || (_templateObject158 = asmohccs_lib_taggedTemplateLiteral(["Carlweather's Cantata of Confrontation, The Sonata of Sneakiness, Fat Leon's Phat Loot Lyric, Polka of Plenty"])))];

var allKnownSongs = (_ref = []).concat.apply(_ref, songSlots);

var allSongs = Skill.all().filter(skill => (0,external_kolmafia_namespaceObject.toString)(skill.class) === "Accordion Thief" && skill.buff).map(skill => (0,external_kolmafia_namespaceObject.toEffect)(skill));
function openSongSlot(song) {
  var _iterator = asmohccs_lib_createForOfIteratorHelper(songSlots),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var songSlot = _step.value;

      if (songSlot.includes(song)) {
        var _iterator3 = asmohccs_lib_createForOfIteratorHelper(songSlot),
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

  var _iterator2 = asmohccs_lib_createForOfIteratorHelper(allSongs),
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
  if ((0,external_kolmafia_namespaceObject.haveEffect)(ef) === 0) {
    openSongSlot(ef);

    if (!(0,external_kolmafia_namespaceObject.cliExecute)(ef.default) || (0,external_kolmafia_namespaceObject.haveEffect)(ef) === 0) {
      throw "Failed to get effect ".concat(ef.name);
    }
  } else {
    (0,external_kolmafia_namespaceObject.print)("Already have effect ".concat(ef.name, "."));
  }
}
function asmohccs_lib_ensureEffect(ef) {
  var turns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  //stolen directly from bean
  if ((0,external_kolmafia_namespaceObject.haveEffect)(ef) < turns) {
    if (!(0,external_kolmafia_namespaceObject.cliExecute)(ef.default) || (0,external_kolmafia_namespaceObject.haveEffect)(ef) === 0) {
      throw "Failed to get effect ".concat(ef.name, ".");
    }
  } else {
    (0,external_kolmafia_namespaceObject.print)("Already have effect ".concat(ef.name, "."));
  }
}
function setClan(target) {
  //stolen directly from bean
  if ((0,external_kolmafia_namespaceObject.getClanName)() !== target) {
    var clanCache = JSON.parse((0,external_kolmafia_namespaceObject.getProperty)("hccs_clanCache") || "{}");

    if (clanCache.target === undefined) {
      var recruiter = (0,external_kolmafia_namespaceObject.visitUrl)("clan_signup.php");
      var clanRe = /<option value=([0-9]+)>([^<]+)<\/option>/g;
      var match;

      while ((match = clanRe.exec(recruiter)) !== null) {
        clanCache[match[2]] = match[1];
      }
    }

    (0,external_kolmafia_namespaceObject.setProperty)("hccs_clanCache", JSON.stringify(clanCache));
    (0,external_kolmafia_namespaceObject.visitUrl)("showclan.php?whichclan=".concat(clanCache[target], "&action=joinclan&confirm=on&pwd"));

    if ((0,external_kolmafia_namespaceObject.getClanName)() !== target) {
      throw "failed to switch clans to ".concat(target, ". Did you spell it correctly? Are you whitelisted?");
    }
  }

  return true;
}
function setChoice(adv, choice) {
  PropertyManager.setChoices(asmohccs_lib_defineProperty({}, adv, choice));
}
function tryUse(quantity, it) {
  //ripped straight from bean
  if ((0,external_kolmafia_namespaceObject.availableAmount)(it) > 0) {
    return (0,external_kolmafia_namespaceObject.use)(quantity, it);
  } else {
    return false;
  }
}
function multiFightAutoAttack() {
  while ((0,external_kolmafia_namespaceObject.choiceFollowsFight)() || (0,external_kolmafia_namespaceObject.inMultiFight)()) {
    (0,external_kolmafia_namespaceObject.visitUrl)("choice.php");
  }
}
function asmohccs_lib_heal() {
  (0,external_kolmafia_namespaceObject.restoreHp)((0,external_kolmafia_namespaceObject.myMaxhp)());
}
function asmohccs_lib_advMacroAA(location, macro) {
  var parameter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var afterCombatAction = arguments.length > 3 ? arguments[3] : undefined;
  var n = 0;

  var condition = () => {
    return typeof parameter === "number" ? n < parameter : parameter();
  };

  macro.setAutoAttack();

  while (condition()) {
    (0,external_kolmafia_namespaceObject.adv1)(location, -1, () => {
      return combat_Macro.if_("!pastround 2", macro).abort().toString();
    });
    if (afterCombatAction) afterCombatAction();
    n++;
  }
}
function advMacro(location, macro) {
  var parameter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var afterCombatAction = arguments.length > 3 ? arguments[3] : undefined;
  (0,external_kolmafia_namespaceObject.setAutoAttack)(0);
  var n = 0;

  var condition = () => {
    return typeof parameter === "number" ? n < parameter : parameter();
  };

  while (condition()) {
    (0,external_kolmafia_namespaceObject.adv1)(location, -1, () => {
      return combat_Macro.if_("!pastround 2", macro).abort().toString();
    });
    if (afterCombatAction) afterCombatAction();
    n++;
  }
}
function mapMacro(location, monster, macro) {
  macro.setAutoAttack();
  (0,external_kolmafia_namespaceObject.useSkill)($skill(_templateObject159 || (_templateObject159 = asmohccs_lib_taggedTemplateLiteral(["Map the Monsters"]))));
  if (!property_get("mappingMonsters")) throw "I am not actually mapping anything. Weird!";else {
    while (property_get("mappingMonsters") && !lib_have(template_string_$effect(_templateObject160 || (_templateObject160 = asmohccs_lib_taggedTemplateLiteral(["Meteor Showered"]))))) {
      (0,external_kolmafia_namespaceObject.visitUrl)((0,external_kolmafia_namespaceObject.toUrl)(location));
      (0,external_kolmafia_namespaceObject.runChoice)(1, "heyscriptswhatsupwinkwink=".concat(monster.id));
      (0,external_kolmafia_namespaceObject.runCombat)(macro.toString());
    }
  }
}
function horsery() {
  return property_get("_horsery");
}
function horse(horse) {
  if (!horse.includes("horse")) horse = "".concat(horse, " horse");
  if (horsery() !== horse) (0,external_kolmafia_namespaceObject.cliExecute)("horsery ".concat(horse));
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
  (0,external_kolmafia_namespaceObject.cliExecute)("fax receive");
  if (getString("photocopyMonster").toLowerCase() === monster.name.toLowerCase()) return true;
  (0,external_kolmafia_namespaceObject.cliExecute)("fax send");
  return false;
}

function fax(monster) {
  if (!property_get("_photocopyUsed")) {
    if (checkFax(monster)) return;
    (0,external_kolmafia_namespaceObject.chatPrivate)("cheesefax", monster.name);

    for (var i = 0; i < 3; i++) {
      (0,external_kolmafia_namespaceObject.wait)(10);
      if (checkFax(monster)) return;
    }

    (0,external_kolmafia_namespaceObject.abort)("Failed to acquire photocopied ".concat(monster.name, "."));
  }
}
var tests = [];
function testWrapper(name, test, prepare) {
  if (testDone(test)) return;
  var startTurns = (0,external_kolmafia_namespaceObject.myTurncount)();
  var predictedTurns = prepare();
  doTest(test);
  tests.push({
    testName: name,
    turnPrediction: predictedTurns,
    turnCost: (0,external_kolmafia_namespaceObject.myTurncount)() - startTurns
  });
}
function asmohccs_lib_questStep(questName) {
  var stringStep = getString(questName);
  if (stringStep === "unstarted" || stringStep === "") return -1;else if (stringStep === "started") return 0;else if (stringStep === "finished") return 999;else {
    if (stringStep.substring(0, 4) !== "step") {
      throw "Quest state parsing error.";
    }

    return parseInt(stringStep.substring(4), 10);
  }
}
function ensureMp(mp) {
  if ((0,external_kolmafia_namespaceObject.myMp)() > mp) return;
  if (mp > (0,external_kolmafia_namespaceObject.myMaxmp)()) throw "Insufficient maximum mp!";

  while (lib_have(template_string_$item(_templateObject161 || (_templateObject161 = asmohccs_lib_taggedTemplateLiteral(["magical sausage"])))) || lib_have(template_string_$item(_templateObject162 || (_templateObject162 = asmohccs_lib_taggedTemplateLiteral(["magical sausage casing"])))) && (0,external_kolmafia_namespaceObject.myMp)() < mp && property_get("_sausagesEaten") < 23) {
    (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(_templateObject163 || (_templateObject163 = asmohccs_lib_taggedTemplateLiteral(["magical sausage"]))));
    (0,external_kolmafia_namespaceObject.eat)(template_string_$item(_templateObject164 || (_templateObject164 = asmohccs_lib_taggedTemplateLiteral(["magical sausage"]))));
  }

  while (lib_have(template_string_$item(_templateObject165 || (_templateObject165 = asmohccs_lib_taggedTemplateLiteral(["psychokinetic energy blob"])))) && (0,external_kolmafia_namespaceObject.myMp)() < mp) {
    (0,external_kolmafia_namespaceObject.use)(template_string_$item(_templateObject166 || (_templateObject166 = asmohccs_lib_taggedTemplateLiteral(["psychokinetic energy blob"]))));
  }

  if ((0,external_kolmafia_namespaceObject.myMp)() < mp) (0,external_kolmafia_namespaceObject.restoreMp)(mp);
}
var maximizeFamiliar = lib_have(template_string_$familiar(_templateObject167 || (_templateObject167 = asmohccs_lib_taggedTemplateLiteral(["Disembodied Hand"])))) ? template_string_$familiar(_templateObject168 || (_templateObject168 = asmohccs_lib_taggedTemplateLiteral(["Disembodied Hand"]))) : template_string_$familiar(_templateObject169 || (_templateObject169 = asmohccs_lib_taggedTemplateLiteral(["Left-Hand Man"]))); // Checks that you don't already have the tonic or effect and if your syringe has the right phylum and if so, makes the appropriate tonic.

function geneTonic(ph) {
  if (tonicsLeft() < 1) throw "You can't make any more tonics";

  if (!lib_have(DNALab_getEffect(ph)) && !lib_have(getTonic(ph))) {
    if (property_get("dnaSyringe") !== ph) throw "You have the wrong DNA in your syringe";
    makeTonic();

    if (!lib_have(getTonic(ph))) {
      throw "something went wrong getting your gene tonic";
    } else {
      (0,external_kolmafia_namespaceObject.print)("successfully created ".concat(getTonic(ph).name));
    }
  } else {
    (0,external_kolmafia_namespaceObject.print)("You already have ".concat(ph, " DNA"));
  }
}

function canCastLibrams() {
  var summonNumber = 1 + property_get("libramSummons");
  var cost = 1 + summonNumber * (summonNumber - 10) / 2;
  return (0,external_kolmafia_namespaceObject.myMp)() >= cost + 100;
}

function burnLibrams() {
  if (!$skills(_templateObject170 || (_templateObject170 = asmohccs_lib_taggedTemplateLiteral(["Summon Candy Heart, Summon Taffy, Summon Love Song"]))).some(skill => lib_have(skill))) return;

  while (canCastLibrams()) {
    var testsDone = property_get("csServicesPerformed").split(",");

    if ((!testsDone.includes("Breed More Collies") && !lib_have(template_string_$item(_templateObject171 || (_templateObject171 = asmohccs_lib_taggedTemplateLiteral(["green candy heart"])))) || !testsDone.includes("Make Margaritas") && !lib_have(template_string_$item(_templateObject172 || (_templateObject172 = asmohccs_lib_taggedTemplateLiteral(["lavender candy heart"]))))) && lib_have($skill(_templateObject173 || (_templateObject173 = asmohccs_lib_taggedTemplateLiteral(["Summon Candy Heart"]))))) {
      (0,external_kolmafia_namespaceObject.useSkill)($skill(_templateObject174 || (_templateObject174 = asmohccs_lib_taggedTemplateLiteral(["Summon Candy Heart"]))));
    } else if (!testsDone.includes("Breed More Collies") && !lib_have(template_string_$item(_templateObject175 || (_templateObject175 = asmohccs_lib_taggedTemplateLiteral(["love song of icy revenge"]))), 4) && lib_have($skill(_templateObject176 || (_templateObject176 = asmohccs_lib_taggedTemplateLiteral(["Summon Love Song"]))))) {
      (0,external_kolmafia_namespaceObject.useSkill)($skill(_templateObject177 || (_templateObject177 = asmohccs_lib_taggedTemplateLiteral(["Summon Love Song"]))));
    }
    /*else if (have($skill`Summon BRICKOs`) && get("_brickoEyeSummons") < 3) {
      useSkill($skill`Summon BRICKOs`);
    } else if (
          have($skill`Summon Taffy`) &&
          (!testsDone.includes("Breed More Collies") && !have($item`Pulled Blue Taffy`, 5))
    ) {
      useSkill($skill`Summon Taffy`);
    }*/
    else {
      var summonSkill = $skills(_templateObject178 || (_templateObject178 = asmohccs_lib_taggedTemplateLiteral(["Summon Candy Heart, Summon Love Song"]))).find(skill => lib_have(skill));
      if (!summonSkill) return;
      (0,external_kolmafia_namespaceObject.useSkill)(summonSkill);
    }
  }
}
var moonBonus = (/* unused pure expression or super */ null && ([["weapon damage percent", "mongoose", 20], ["spell damage percent", "wallaby", 20], ["familiar weight", "platypus", 5], ["meat drop", "wombat", 20], ["item drop", "packrat", 10]]));
function asmohccs_lib_pullIfPossible(quantity, it, maxPrice) {
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
    if (availableAmount(it) > 0 || asmohccs_lib_pullIfPossible(1, it, 50000)) asmohccs_lib_ensureEffect(ef);
  }
}
function modTraceList(modifier) {
  var totalVal = 0;
  (0,external_kolmafia_namespaceObject.print)("");
  (0,external_kolmafia_namespaceObject.print)("MOD TRACE: " + modifier, "red");

  for (var effect in (0,external_kolmafia_namespaceObject.myEffects)()) {
    var ef = (0,external_kolmafia_namespaceObject.toEffect)(effect);

    if ((0,external_kolmafia_namespaceObject.numericModifier)(ef, modifier) != 0) {
      totalVal = totalVal + (0,external_kolmafia_namespaceObject.numericModifier)(ef, modifier);
      (0,external_kolmafia_namespaceObject.print)("EFFECT " + ef + " : " + (0,external_kolmafia_namespaceObject.numericModifier)(ef, modifier) + " " + modifier + " for " + (0,external_kolmafia_namespaceObject.haveEffect)(ef) + " more turns");
    }
  }

  var _iterator4 = asmohccs_lib_createForOfIteratorHelper($slots(_templateObject182 || (_templateObject182 = asmohccs_lib_taggedTemplateLiteral([""])))),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var slot = _step4.value;
      var it = (0,external_kolmafia_namespaceObject.equippedItem)(slot);

      if ((0,external_kolmafia_namespaceObject.numericModifier)(it, modifier) != 0 && ((0,external_kolmafia_namespaceObject.haveEquipped)(it) || (0,external_kolmafia_namespaceObject.haveEquipped)(template_string_$item(_templateObject183 || (_templateObject183 = asmohccs_lib_taggedTemplateLiteral(["your cowboy boots"])))) && $slots(_templateObject184 || (_templateObject184 = asmohccs_lib_taggedTemplateLiteral(["bootspur, bootskin"]))).includes(slot))) {
        totalVal = totalVal + (0,external_kolmafia_namespaceObject.numericModifier)(it, modifier);
        (0,external_kolmafia_namespaceObject.print)("SLOT " + slot + " ITEM " + it + " : " + (0,external_kolmafia_namespaceObject.numericModifier)(it, modifier));
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  var famMod = (0,external_kolmafia_namespaceObject.numericModifier)((0,external_kolmafia_namespaceObject.myFamiliar)(), modifier, (0,external_kolmafia_namespaceObject.familiarWeight)((0,external_kolmafia_namespaceObject.myFamiliar)()) + (0,external_kolmafia_namespaceObject.weightAdjustment)(), template_string_$item(_templateObject179 || (_templateObject179 = asmohccs_lib_taggedTemplateLiteral(["none"]))));

  if (famMod != 0) {
    totalVal = totalVal + famMod;
    (0,external_kolmafia_namespaceObject.print)("FAMILIAR " + (0,external_kolmafia_namespaceObject.myFamiliar)() + " : " + famMod);
  }

  var _iterator5 = asmohccs_lib_createForOfIteratorHelper($skills(_templateObject185 || (_templateObject185 = asmohccs_lib_taggedTemplateLiteral([""])))),
      _step5;

  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var sk = _step5.value;

      if ((0,external_kolmafia_namespaceObject.haveSkill)(sk) && (0,external_kolmafia_namespaceObject.numericModifier)(sk, modifier) != 0) {
        totalVal = totalVal + (0,external_kolmafia_namespaceObject.numericModifier)(sk, modifier);
        (0,external_kolmafia_namespaceObject.print)("SKILL " + sk + " : " + (0,external_kolmafia_namespaceObject.numericModifier)(sk, modifier));
      }
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }

  var moon = (0,external_kolmafia_namespaceObject.mySign)();

  if (modifier.includes("experience percent")) {
    if (modifier.includes("muscle") && (0,external_kolmafia_namespaceObject.inMuscleSign)()) {
      totalVal = totalVal + 10;
      (0,external_kolmafia_namespaceObject.print)("MOON " + moon + " : " + 10);
    } else if (modifier.includes("mysticality") && (0,external_kolmafia_namespaceObject.inMysticalitySign)()) {
      totalVal = totalVal + 10;
      (0,external_kolmafia_namespaceObject.print)("MOON " + moon + " : " + 10);
    } else if (modifier.includes("moxie") && (0,external_kolmafia_namespaceObject.inMoxieSign)()) {
      totalVal = totalVal + 10;
      (0,external_kolmafia_namespaceObject.print)("MOON " + moon + " : " + 10);
    }
  } else if (modifier.includes("damage percent")) {
    if (modifier.includes("weapon") && moon === "Mongoose") {
      totalVal = totalVal + 20;
      (0,external_kolmafia_namespaceObject.print)("MOON " + moon + " : " + 20);
    } else if (modifier.includes("spell") && moon === "Wallaby") {
      totalVal = totalVal + 20;
      (0,external_kolmafia_namespaceObject.print)("MOON " + moon + " : " + 20);
    }
  } else if (modifier === "familiar weight" && moon === "Platypus") {
    totalVal = totalVal + 5;
    (0,external_kolmafia_namespaceObject.print)("MOON " + moon + " : " + 5);
  }

  var squint = template_string_$effect(_templateObject180 || (_templateObject180 = asmohccs_lib_taggedTemplateLiteral(["Steely-Eyed Squint"])));
  var swagger = template_string_$effect(_templateObject181 || (_templateObject181 = asmohccs_lib_taggedTemplateLiteral(["Bow-Legged Swagger"])));

  if (modifier === "item drop" && (0,external_kolmafia_namespaceObject.haveEffect)(squint)) {
    (0,external_kolmafia_namespaceObject.print)("EFFECT " + squint + " : " + totalVal);
    totalVal = totalVal * 2;
  }

  if ((0,external_kolmafia_namespaceObject.haveEffect)(swagger) && ["weapon damage", "weapon damage percent", "initiative"].includes(modifier)) {
    (0,external_kolmafia_namespaceObject.print)("EFFECT " + swagger + " : " + totalVal);
    totalVal = totalVal * 2;
  }

  (0,external_kolmafia_namespaceObject.print)("Total " + modifier + ": " + totalVal, "purple");
  (0,external_kolmafia_namespaceObject.print)("");
}
function inMysClass() {
  if ($classes(_templateObject186 || (_templateObject186 = asmohccs_lib_taggedTemplateLiteral(["Sauceror, Pastamancer"]))).includes((0,external_kolmafia_namespaceObject.myClass)())) {
    return true;
  } else {
    return false;
  }
}
function inMoxClass() {
  if ($classes(_templateObject187 || (_templateObject187 = asmohccs_lib_taggedTemplateLiteral(["Accordion Thief, Disco Bandit"]))).includes((0,external_kolmafia_namespaceObject.myClass)())) {
    return true;
  } else {
    return false;
  }
}
function inMusClass() {
  if ($classes(_templateObject188 || (_templateObject188 = asmohccs_lib_taggedTemplateLiteral(["Seal Clubber, Turtle Tamer"]))).includes((0,external_kolmafia_namespaceObject.myClass)())) {
    return true;
  } else {
    return false;
  }
}
;// CONCATENATED MODULE: ./src/outfits.ts
var outfits_templateObject, outfits_templateObject2, outfits_templateObject3, outfits_templateObject4, outfits_templateObject5, outfits_templateObject6, outfits_templateObject7, outfits_templateObject8, outfits_templateObject9, outfits_templateObject10, outfits_templateObject11, outfits_templateObject12, outfits_templateObject13, outfits_templateObject14, outfits_templateObject15, outfits_templateObject16, outfits_templateObject17, outfits_templateObject18, outfits_templateObject19, outfits_templateObject20, outfits_templateObject21, outfits_templateObject22, outfits_templateObject23, outfits_templateObject24, outfits_templateObject25, outfits_templateObject26, outfits_templateObject27, outfits_templateObject28, outfits_templateObject29, outfits_templateObject30, outfits_templateObject31, outfits_templateObject32, outfits_templateObject33, outfits_templateObject34, outfits_templateObject35, outfits_templateObject36, outfits_templateObject37, outfits_templateObject38, outfits_templateObject39, outfits_templateObject40, outfits_templateObject41, outfits_templateObject42, outfits_templateObject43, outfits_templateObject44, outfits_templateObject45, outfits_templateObject46, outfits_templateObject47, outfits_templateObject48, outfits_templateObject49, outfits_templateObject50, outfits_templateObject51, outfits_templateObject52, outfits_templateObject53, outfits_templateObject54, outfits_templateObject55, outfits_templateObject56, outfits_templateObject57, outfits_templateObject58, outfits_templateObject59, outfits_templateObject60, outfits_templateObject61, outfits_templateObject62, outfits_templateObject63, outfits_templateObject64, outfits_templateObject65, outfits_templateObject66, outfits_templateObject67, outfits_templateObject68, outfits_templateObject69, outfits_templateObject70, outfits_templateObject71, outfits_templateObject72, outfits_templateObject73, outfits_templateObject74, outfits_templateObject75, outfits_templateObject76, outfits_templateObject77, outfits_templateObject78, outfits_templateObject79, outfits_templateObject80, outfits_templateObject81, outfits_templateObject82, outfits_templateObject83, outfits_templateObject84, outfits_templateObject85, outfits_templateObject86, outfits_templateObject87, outfits_templateObject88, outfits_templateObject89, outfits_templateObject90, outfits_templateObject91, outfits_templateObject92, outfits_templateObject93, outfits_templateObject94, outfits_templateObject95, outfits_templateObject96, outfits_templateObject97, outfits_templateObject98, outfits_templateObject99, outfits_templateObject100, outfits_templateObject101, outfits_templateObject102, outfits_templateObject103, outfits_templateObject104, outfits_templateObject105, outfits_templateObject106, outfits_templateObject107, outfits_templateObject108, outfits_templateObject109, outfits_templateObject110, outfits_templateObject111, outfits_templateObject112, outfits_templateObject113, outfits_templateObject114, outfits_templateObject115, outfits_templateObject116, outfits_templateObject117, outfits_templateObject118, outfits_templateObject119, outfits_templateObject120, outfits_templateObject121, outfits_templateObject122, outfits_templateObject123, outfits_templateObject124, outfits_templateObject125, outfits_templateObject126, outfits_templateObject127, outfits_templateObject128, outfits_templateObject129, outfits_templateObject130, outfits_templateObject131, outfits_templateObject132, outfits_templateObject133, outfits_templateObject134, outfits_templateObject135, outfits_templateObject136, outfits_templateObject137, outfits_templateObject138, outfits_templateObject139, outfits_templateObject140, outfits_templateObject141, outfits_templateObject142, outfits_templateObject143, outfits_templateObject144, outfits_templateObject145, outfits_templateObject146, outfits_templateObject147, outfits_templateObject148, outfits_templateObject149, outfits_templateObject150, outfits_templateObject151, outfits_templateObject152, outfits_templateObject153, outfits_templateObject154, outfits_templateObject155, outfits_templateObject156, outfits_templateObject157, outfits_templateObject158, outfits_templateObject159, outfits_templateObject160, outfits_templateObject161, outfits_templateObject162, outfits_templateObject163, outfits_templateObject164, outfits_templateObject165, outfits_templateObject166, outfits_templateObject167, outfits_templateObject168, outfits_templateObject169, outfits_templateObject170, outfits_templateObject171, outfits_templateObject172, outfits_templateObject173, outfits_templateObject174, outfits_templateObject175, outfits_templateObject176, outfits_templateObject177, outfits_templateObject178, outfits_templateObject179, outfits_templateObject180, outfits_templateObject181, outfits_templateObject182, outfits_templateObject183, outfits_templateObject184, outfits_templateObject185, outfits_templateObject186, outfits_templateObject187, outfits_templateObject188, _templateObject189, _templateObject190, _templateObject191, _templateObject192, _templateObject193, _templateObject194, _templateObject195, _templateObject196, _templateObject197, _templateObject198, _templateObject199, _templateObject200, _templateObject201, _templateObject202, _templateObject203, _templateObject204, _templateObject205, _templateObject206, _templateObject207, _templateObject208, _templateObject209, _templateObject210, _templateObject211, _templateObject212, _templateObject213, _templateObject214, _templateObject215, _templateObject216, _templateObject217, _templateObject218, _templateObject219, _templateObject220, _templateObject221, _templateObject222, _templateObject223, _templateObject224, _templateObject225, _templateObject226, _templateObject227, _templateObject228, _templateObject229, _templateObject230;

function outfits_slicedToArray(arr, i) { return outfits_arrayWithHoles(arr) || outfits_iterableToArrayLimit(arr, i) || outfits_unsupportedIterableToArray(arr, i) || outfits_nonIterableRest(); }

function outfits_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function outfits_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function outfits_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function outfits_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function outfits_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = outfits_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function outfits_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return outfits_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return outfits_arrayLikeToArray(o, minLen); }

function outfits_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function outfits_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function outfits_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function outfits_createClass(Constructor, protoProps, staticProps) { if (protoProps) outfits_defineProperties(Constructor.prototype, protoProps); if (staticProps) outfits_defineProperties(Constructor, staticProps); return Constructor; }

function outfits_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Outfit = /*#__PURE__*/function () {
  /**
   * Construct an outfit object, for rapid equipping
   * @param equips Map of what to equip and where
   * @param familiar Optional familiar to use with outfit
   */
  function Outfit(equips, familiar) {
    outfits_classCallCheck(this, Outfit);

    outfits_defineProperty(this, "equips", void 0);

    outfits_defineProperty(this, "familiar", void 0);

    this.equips = equips;
    this.familiar = familiar;
  }

  outfits_createClass(Outfit, [{
    key: "dress",
    value: function dress() {
      if (this.familiar) (0,external_kolmafia_namespaceObject.useFamiliar)(this.familiar);
      var targetEquipment = Array.from(this.equips.values());

      var _iterator = outfits_createForOfIteratorHelper(Slot.all()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var slot = _step.value;
          if (targetEquipment.includes((0,external_kolmafia_namespaceObject.equippedItem)(slot)) && this.equips.get(slot) !== (0,external_kolmafia_namespaceObject.equippedItem)(slot)) (0,external_kolmafia_namespaceObject.equip)(slot, template_string_$item(outfits_templateObject || (outfits_templateObject = outfits_taggedTemplateLiteral(["none"]))));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = outfits_createForOfIteratorHelper($slots(outfits_templateObject2 || (outfits_templateObject2 = outfits_taggedTemplateLiteral(["weapon, off-hand, hat, back, shirt, pants, acc1, acc2, acc3, familiar, buddy-bjorn, crown-of-thrones"])))),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _slot = _step2.value;
          var equipment = this.equips.get(_slot);
          if (equipment) (0,external_kolmafia_namespaceObject.equip)(_slot, equipment);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
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
     * Makes the best outfit it can with what you've got
     * @param equips Map of what to equip and where; will use first item in array that it can, and willl not add things to outfit otherwise
     * @param familiar Optional familiar to use with outfit
     */

  }], [{
    key: "doYourBest",
    value: function doYourBest(equips, familiar) {
      var returnValue = new Map();

      var _iterator3 = outfits_createForOfIteratorHelper(equips.entries()),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _step3$value = outfits_slicedToArray(_step3.value, 2),
              slot = _step3$value[0],
              itemOrItems = _step3$value[1];

          var item = Array.isArray(itemOrItems) ? itemOrItems.find(item => lib_have(item)) : itemOrItems;
          if (item) returnValue.set(slot, item);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return new Outfit(returnValue, familiar);
    }
    /**
     * Saves current outfit as an Outfit
     * @param withFamiliar Option to store current familiar as part of outfit
     */

  }, {
    key: "current",
    value: function current() {
      var withFamiliar = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var familiar = withFamiliar ? (0,external_kolmafia_namespaceObject.myFamiliar)() : undefined;
      var slots = $slots(outfits_templateObject3 || (outfits_templateObject3 = outfits_taggedTemplateLiteral(["hat, shirt, back, weapon, off-hand, pants, acc1, acc2, acc3"])));
      if (withFamiliar) slots.push(template_string_$slot(outfits_templateObject4 || (outfits_templateObject4 = outfits_taggedTemplateLiteral(["familiar"]))));
      var outfitMap = new Map();

      var _iterator4 = outfits_createForOfIteratorHelper(slots),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var slot = _step4.value;
          var item = (0,external_kolmafia_namespaceObject.equippedItem)(slot);
          if (item !== template_string_$item(outfits_templateObject5 || (outfits_templateObject5 = outfits_taggedTemplateLiteral(["none"])))) outfitMap.set(slot, item);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      return new Outfit(outfitMap, familiar);
    }
  }]);

  return Outfit;
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
function outfits_uniform() {
  if (inMoxClass()) {
    (0,external_kolmafia_namespaceObject.cliExecute)("retrocape robot");
  } else if (inMysClass()) {
    (0,external_kolmafia_namespaceObject.cliExecute)("retrocape heck");
  } else {
    (0,external_kolmafia_namespaceObject.cliExecute)("retrocape vampire");
  }

  Outfit.doYourBest(new Map([[template_string_$slot(outfits_templateObject6 || (outfits_templateObject6 = outfits_taggedTemplateLiteral(["hat"]))), inMoxClass() ? template_string_$items(outfits_templateObject7 || (outfits_templateObject7 = outfits_taggedTemplateLiteral(["very pointy crown, Iunion Crown"]))) : inMysClass() ? template_string_$items(outfits_templateObject8 || (outfits_templateObject8 = outfits_taggedTemplateLiteral(["astral chapeau, Iunion Crown"]))) : template_string_$item(outfits_templateObject9 || (outfits_templateObject9 = outfits_taggedTemplateLiteral(["Iunion Crown"])))], [template_string_$slot(outfits_templateObject10 || (outfits_templateObject10 = outfits_taggedTemplateLiteral(["shirt"]))), template_string_$items(outfits_templateObject11 || (outfits_templateObject11 = outfits_taggedTemplateLiteral(["LOV Eardigan, fresh coat of paint"])))], [template_string_$slot(outfits_templateObject12 || (outfits_templateObject12 = outfits_taggedTemplateLiteral(["pants"]))), template_string_$items(outfits_templateObject13 || (outfits_templateObject13 = outfits_taggedTemplateLiteral(["Cargo Cultist Shorts, old sweatpants"])))], [template_string_$slot(outfits_templateObject14 || (outfits_templateObject14 = outfits_taggedTemplateLiteral(["weapon"]))), template_string_$item(outfits_templateObject15 || (outfits_templateObject15 = outfits_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [template_string_$slot(outfits_templateObject16 || (outfits_templateObject16 = outfits_taggedTemplateLiteral(["off-hand"]))), template_string_$item(outfits_templateObject17 || (outfits_templateObject17 = outfits_taggedTemplateLiteral(["familiar scrapbook"])))], [template_string_$slot(outfits_templateObject18 || (outfits_templateObject18 = outfits_taggedTemplateLiteral(["acc1"]))), template_string_$item(outfits_templateObject19 || (outfits_templateObject19 = outfits_taggedTemplateLiteral(["hewn moon-rune spoon"])))], [template_string_$slot(outfits_templateObject20 || (outfits_templateObject20 = outfits_taggedTemplateLiteral(["acc2"]))), template_string_$item(outfits_templateObject21 || (outfits_templateObject21 = outfits_taggedTemplateLiteral(["beach comb"])))], [template_string_$slot(outfits_templateObject22 || (outfits_templateObject22 = outfits_taggedTemplateLiteral(["acc3"]))), template_string_$items(outfits_templateObject23 || (outfits_templateObject23 = outfits_taggedTemplateLiteral(["battle broom, LOV Earrings, Powerful Glove"])))], [template_string_$slot(outfits_templateObject24 || (outfits_templateObject24 = outfits_taggedTemplateLiteral(["back"]))), template_string_$items(outfits_templateObject25 || (outfits_templateObject25 = outfits_taggedTemplateLiteral(["LOV Epaulettes, Unwrapped knock-off retro superhero cape ,vampyric cloake"])))]])).dress();
}
function wireOutfit() {
  new Outfit(new Map([[template_string_$slot(outfits_templateObject26 || (outfits_templateObject26 = outfits_taggedTemplateLiteral(["hat"]))), template_string_$item(outfits_templateObject27 || (outfits_templateObject27 = outfits_taggedTemplateLiteral(["Iunion Crown"])))], [template_string_$slot(outfits_templateObject28 || (outfits_templateObject28 = outfits_taggedTemplateLiteral(["shirt"]))), template_string_$item(outfits_templateObject29 || (outfits_templateObject29 = outfits_taggedTemplateLiteral(["fresh coat of paint"])))], [template_string_$slot(outfits_templateObject30 || (outfits_templateObject30 = outfits_taggedTemplateLiteral(["pants"]))), template_string_$item(outfits_templateObject31 || (outfits_templateObject31 = outfits_taggedTemplateLiteral(["Cargo Cultist Shorts"])))], [template_string_$slot(outfits_templateObject32 || (outfits_templateObject32 = outfits_taggedTemplateLiteral(["weapon"]))), template_string_$item(outfits_templateObject33 || (outfits_templateObject33 = outfits_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [template_string_$slot(outfits_templateObject34 || (outfits_templateObject34 = outfits_taggedTemplateLiteral(["off-hand"]))), template_string_$item(outfits_templateObject35 || (outfits_templateObject35 = outfits_taggedTemplateLiteral(["familiar scrapbook"])))], [template_string_$slot(outfits_templateObject36 || (outfits_templateObject36 = outfits_taggedTemplateLiteral(["acc1"]))), template_string_$item(outfits_templateObject37 || (outfits_templateObject37 = outfits_taggedTemplateLiteral(["Eight Days a Week Pill Keeper"])))], [template_string_$slot(outfits_templateObject38 || (outfits_templateObject38 = outfits_taggedTemplateLiteral(["acc2"]))), template_string_$item(outfits_templateObject39 || (outfits_templateObject39 = outfits_taggedTemplateLiteral(["Powerful Glove"])))], [template_string_$slot(outfits_templateObject40 || (outfits_templateObject40 = outfits_taggedTemplateLiteral(["acc3"]))), template_string_$item(outfits_templateObject41 || (outfits_templateObject41 = outfits_taggedTemplateLiteral(["Lil' Doctor\u2122 bag"])))]])).dress();
}
function moxieOutfit() {
  (0,external_kolmafia_namespaceObject.cliExecute)("retrocape robot");
  Outfit.doYourBest(new Map([[template_string_$slot(outfits_templateObject42 || (outfits_templateObject42 = outfits_taggedTemplateLiteral(["hat"]))), template_string_$item(outfits_templateObject43 || (outfits_templateObject43 = outfits_taggedTemplateLiteral(["very pointy crown"])))], [template_string_$slot(outfits_templateObject44 || (outfits_templateObject44 = outfits_taggedTemplateLiteral(["shirt"]))), template_string_$items(outfits_templateObject45 || (outfits_templateObject45 = outfits_taggedTemplateLiteral(["shoe ad T-shirt, fresh coat of paint"])))], [template_string_$slot(outfits_templateObject46 || (outfits_templateObject46 = outfits_taggedTemplateLiteral(["back"]))), template_string_$item(outfits_templateObject47 || (outfits_templateObject47 = outfits_taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"])))], [template_string_$slot(outfits_templateObject48 || (outfits_templateObject48 = outfits_taggedTemplateLiteral(["weapon"]))), template_string_$item(outfits_templateObject49 || (outfits_templateObject49 = outfits_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [template_string_$slot(outfits_templateObject50 || (outfits_templateObject50 = outfits_taggedTemplateLiteral(["pants"]))), template_string_$item(outfits_templateObject51 || (outfits_templateObject51 = outfits_taggedTemplateLiteral(["Cargo Cultist Shorts"])))], [template_string_$slot(outfits_templateObject52 || (outfits_templateObject52 = outfits_taggedTemplateLiteral(["acc1"]))), template_string_$item(outfits_templateObject53 || (outfits_templateObject53 = outfits_taggedTemplateLiteral(["Beach Comb"])))], [template_string_$slot(outfits_templateObject54 || (outfits_templateObject54 = outfits_taggedTemplateLiteral(["acc2"]))), template_string_$item(outfits_templateObject55 || (outfits_templateObject55 = outfits_taggedTemplateLiteral(["your cowboy boots"])))], [template_string_$slot(outfits_templateObject56 || (outfits_templateObject56 = outfits_taggedTemplateLiteral(["acc3"]))), template_string_$item(outfits_templateObject57 || (outfits_templateObject57 = outfits_taggedTemplateLiteral(["Retrospecs"])))]])).dress();
}
function hpOutfit() {
  (0,external_kolmafia_namespaceObject.cliExecute)("retrocape vampire");
  if (!lib_have(template_string_$item(outfits_templateObject58 || (outfits_templateObject58 = outfits_taggedTemplateLiteral(["wad of used tape"]))))) (0,external_kolmafia_namespaceObject.cliExecute)("fold wad of used tape");
  Outfit.doYourBest(new Map([[template_string_$slot(outfits_templateObject59 || (outfits_templateObject59 = outfits_taggedTemplateLiteral(["hat"]))), template_string_$item(outfits_templateObject60 || (outfits_templateObject60 = outfits_taggedTemplateLiteral(["wad of used tape"])))], [template_string_$slot(outfits_templateObject61 || (outfits_templateObject61 = outfits_taggedTemplateLiteral(["weapon"]))), template_string_$item(outfits_templateObject62 || (outfits_templateObject62 = outfits_taggedTemplateLiteral(["dented scepter"])))], [template_string_$slot(outfits_templateObject63 || (outfits_templateObject63 = outfits_taggedTemplateLiteral(["off-hand"]))), template_string_$item(outfits_templateObject64 || (outfits_templateObject64 = outfits_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [template_string_$slot(outfits_templateObject65 || (outfits_templateObject65 = outfits_taggedTemplateLiteral(["shirt"]))), template_string_$items(outfits_templateObject66 || (outfits_templateObject66 = outfits_taggedTemplateLiteral(["shoe ad T-shirt, fresh coat of paint"])))], [template_string_$slot(outfits_templateObject67 || (outfits_templateObject67 = outfits_taggedTemplateLiteral(["back"]))), template_string_$items(outfits_templateObject68 || (outfits_templateObject68 = outfits_taggedTemplateLiteral(["vampyric cloake, unwrapped knock-off retro superhero cape"])))], [template_string_$slot(outfits_templateObject69 || (outfits_templateObject69 = outfits_taggedTemplateLiteral(["pants"]))), template_string_$item(outfits_templateObject70 || (outfits_templateObject70 = outfits_taggedTemplateLiteral(["Cargo Cultist Shorts"])))], [template_string_$slot(outfits_templateObject71 || (outfits_templateObject71 = outfits_taggedTemplateLiteral(["acc1"]))), template_string_$item(outfits_templateObject72 || (outfits_templateObject72 = outfits_taggedTemplateLiteral(["Powerful Glove"])))], [template_string_$slot(outfits_templateObject73 || (outfits_templateObject73 = outfits_taggedTemplateLiteral(["acc2"]))), template_string_$item(outfits_templateObject74 || (outfits_templateObject74 = outfits_taggedTemplateLiteral(["Retrospecs"])))], [template_string_$slot(outfits_templateObject75 || (outfits_templateObject75 = outfits_taggedTemplateLiteral(["acc3"]))), template_string_$item(outfits_templateObject76 || (outfits_templateObject76 = outfits_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"])))], [template_string_$slot(outfits_templateObject77 || (outfits_templateObject77 = outfits_taggedTemplateLiteral(["familiar"]))), template_string_$item(outfits_templateObject78 || (outfits_templateObject78 = outfits_taggedTemplateLiteral(["miniature crystal ball"])))]])).dress();
}
function muscleOutfit() {
  (0,external_kolmafia_namespaceObject.cliExecute)("retrocape vampire");
  if (!lib_have(template_string_$item(outfits_templateObject79 || (outfits_templateObject79 = outfits_taggedTemplateLiteral(["wad of used tape"]))))) (0,external_kolmafia_namespaceObject.cliExecute)("fold wad of used tape");
  Outfit.doYourBest(new Map([[template_string_$slot(outfits_templateObject80 || (outfits_templateObject80 = outfits_taggedTemplateLiteral(["hat"]))), template_string_$item(outfits_templateObject81 || (outfits_templateObject81 = outfits_taggedTemplateLiteral(["wad of used tape"])))], [template_string_$slot(outfits_templateObject82 || (outfits_templateObject82 = outfits_taggedTemplateLiteral(["weapon"]))), template_string_$item(outfits_templateObject83 || (outfits_templateObject83 = outfits_taggedTemplateLiteral(["dented scepter"])))], [template_string_$slot(outfits_templateObject84 || (outfits_templateObject84 = outfits_taggedTemplateLiteral(["off-hand"]))), lib_have(template_string_$familiar(outfits_templateObject85 || (outfits_templateObject85 = outfits_taggedTemplateLiteral(["Disembodied Hand"])))) ? template_string_$item(outfits_templateObject86 || (outfits_templateObject86 = outfits_taggedTemplateLiteral(["cosmetic football"]))) : template_string_$item(outfits_templateObject87 || (outfits_templateObject87 = outfits_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [template_string_$slot(outfits_templateObject88 || (outfits_templateObject88 = outfits_taggedTemplateLiteral(["shirt"]))), template_string_$items(outfits_templateObject89 || (outfits_templateObject89 = outfits_taggedTemplateLiteral(["shoe ad T-shirt, fresh coat of paint"])))], [template_string_$slot(outfits_templateObject90 || (outfits_templateObject90 = outfits_taggedTemplateLiteral(["back"]))), template_string_$item(outfits_templateObject91 || (outfits_templateObject91 = outfits_taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"])))], [template_string_$slot(outfits_templateObject92 || (outfits_templateObject92 = outfits_taggedTemplateLiteral(["pants"]))), template_string_$item(outfits_templateObject93 || (outfits_templateObject93 = outfits_taggedTemplateLiteral(["Cargo Cultist Shorts"])))], [template_string_$slot(outfits_templateObject94 || (outfits_templateObject94 = outfits_taggedTemplateLiteral(["acc1"]))), template_string_$item(outfits_templateObject95 || (outfits_templateObject95 = outfits_taggedTemplateLiteral(["Brutal brogues"])))], [template_string_$slot(outfits_templateObject96 || (outfits_templateObject96 = outfits_taggedTemplateLiteral(["acc2"]))), template_string_$item(outfits_templateObject97 || (outfits_templateObject97 = outfits_taggedTemplateLiteral(["Retrospecs"])))], [template_string_$slot(outfits_templateObject98 || (outfits_templateObject98 = outfits_taggedTemplateLiteral(["acc3"]))), template_string_$item(outfits_templateObject99 || (outfits_templateObject99 = outfits_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"])))], [template_string_$slot(outfits_templateObject100 || (outfits_templateObject100 = outfits_taggedTemplateLiteral(["familiar"]))), lib_have(template_string_$familiar(outfits_templateObject101 || (outfits_templateObject101 = outfits_taggedTemplateLiteral(["Disembodied Hand"])))) ? template_string_$item(outfits_templateObject102 || (outfits_templateObject102 = outfits_taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))) : template_string_$item(outfits_templateObject103 || (outfits_templateObject103 = outfits_taggedTemplateLiteral(["miniature crystal ball"])))]]), lib_have(template_string_$familiar(outfits_templateObject104 || (outfits_templateObject104 = outfits_taggedTemplateLiteral(["Disembodied Hand"])))) ? template_string_$familiar(outfits_templateObject105 || (outfits_templateObject105 = outfits_taggedTemplateLiteral(["Disembodied Hand"]))) : undefined).dress();
}
function mysticalityOutfit() {
  (0,external_kolmafia_namespaceObject.cliExecute)("retrocape heck");
  Outfit.doYourBest(new Map([[template_string_$slot(outfits_templateObject106 || (outfits_templateObject106 = outfits_taggedTemplateLiteral(["hat"]))), template_string_$items(outfits_templateObject107 || (outfits_templateObject107 = outfits_taggedTemplateLiteral(["astral chapeau, wad of used tape"])))], [template_string_$slot(outfits_templateObject108 || (outfits_templateObject108 = outfits_taggedTemplateLiteral(["weapon"]))), template_string_$item(outfits_templateObject109 || (outfits_templateObject109 = outfits_taggedTemplateLiteral(["weeping willow wand"])))], [template_string_$slot(outfits_templateObject110 || (outfits_templateObject110 = outfits_taggedTemplateLiteral(["off-hand"]))), template_string_$item(outfits_templateObject111 || (outfits_templateObject111 = outfits_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [template_string_$slot(outfits_templateObject112 || (outfits_templateObject112 = outfits_taggedTemplateLiteral(["back"]))), template_string_$item(outfits_templateObject113 || (outfits_templateObject113 = outfits_taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"])))], [template_string_$slot(outfits_templateObject114 || (outfits_templateObject114 = outfits_taggedTemplateLiteral(["shirt"]))), template_string_$items(outfits_templateObject115 || (outfits_templateObject115 = outfits_taggedTemplateLiteral(["denim jacket, shoe ad T-shirt, fresh coat of paint"])))], [template_string_$slot(outfits_templateObject116 || (outfits_templateObject116 = outfits_taggedTemplateLiteral(["pants"]))), template_string_$items(outfits_templateObject117 || (outfits_templateObject117 = outfits_taggedTemplateLiteral(["cargo cultist shorts, pantogram pants"])))], [template_string_$slot(outfits_templateObject118 || (outfits_templateObject118 = outfits_taggedTemplateLiteral(["acc1"]))), template_string_$item(outfits_templateObject119 || (outfits_templateObject119 = outfits_taggedTemplateLiteral(["retrospecs"])))], //CHECK THIS
  [template_string_$slot(outfits_templateObject120 || (outfits_templateObject120 = outfits_taggedTemplateLiteral(["acc2"]))), template_string_$item(outfits_templateObject121 || (outfits_templateObject121 = outfits_taggedTemplateLiteral(["codpiece"])))], [template_string_$slot(outfits_templateObject122 || (outfits_templateObject122 = outfits_taggedTemplateLiteral(["acc3"]))), template_string_$item(outfits_templateObject123 || (outfits_templateObject123 = outfits_taggedTemplateLiteral(["battle broom"])))], [template_string_$slot(outfits_templateObject124 || (outfits_templateObject124 = outfits_taggedTemplateLiteral(["familiar"]))), template_string_$item(outfits_templateObject125 || (outfits_templateObject125 = outfits_taggedTemplateLiteral(["Abracandalabra"])))]]), template_string_$familiar(outfits_templateObject126 || (outfits_templateObject126 = outfits_taggedTemplateLiteral(["Left-Hand Man"])))).dress();
}
function itemOutfit() {
  if (!lib_have(template_string_$item(outfits_templateObject127 || (outfits_templateObject127 = outfits_taggedTemplateLiteral(["wad of used tape"]))))) (0,external_kolmafia_namespaceObject.cliExecute)("fold wad of used tape");
  Outfit.doYourBest(new Map([[template_string_$slot(outfits_templateObject128 || (outfits_templateObject128 = outfits_taggedTemplateLiteral(["hat"]))), template_string_$item(outfits_templateObject129 || (outfits_templateObject129 = outfits_taggedTemplateLiteral(["wad of used tape"])))], [template_string_$slot(outfits_templateObject130 || (outfits_templateObject130 = outfits_taggedTemplateLiteral(["off-hand"]))), template_string_$item(outfits_templateObject131 || (outfits_templateObject131 = outfits_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"])))], [template_string_$slot(outfits_templateObject132 || (outfits_templateObject132 = outfits_taggedTemplateLiteral(["back"]))), template_string_$items(outfits_templateObject133 || (outfits_templateObject133 = outfits_taggedTemplateLiteral(["vampyric cloake, protonic accelerator pack"])))], [template_string_$slot(outfits_templateObject134 || (outfits_templateObject134 = outfits_taggedTemplateLiteral(["acc1"]))), template_string_$item(outfits_templateObject135 || (outfits_templateObject135 = outfits_taggedTemplateLiteral(["Guzzlr tablet"])))], [template_string_$slot(outfits_templateObject136 || (outfits_templateObject136 = outfits_taggedTemplateLiteral(["acc2"]))), template_string_$item(outfits_templateObject137 || (outfits_templateObject137 = outfits_taggedTemplateLiteral(["gold detective badge"])))], [template_string_$slot(outfits_templateObject138 || (outfits_templateObject138 = outfits_taggedTemplateLiteral(["acc3"]))), template_string_$items(outfits_templateObject139 || (outfits_templateObject139 = outfits_taggedTemplateLiteral(["your cowboy boots, government-issued night-vision goggles"])))], [template_string_$slot(outfits_templateObject140 || (outfits_templateObject140 = outfits_taggedTemplateLiteral(["familiar"]))), template_string_$item(outfits_templateObject141 || (outfits_templateObject141 = outfits_taggedTemplateLiteral(["li'l ninja costume"])))]]), template_string_$familiar(outfits_templateObject142 || (outfits_templateObject142 = outfits_taggedTemplateLiteral(["Trick-or-Treating Tot"])))).dress();
}
function hotresOutfit() {
  (0,external_kolmafia_namespaceObject.cliExecute)("retrocape vampire hold");
  Outfit.doYourBest(new Map([[template_string_$slot(outfits_templateObject143 || (outfits_templateObject143 = outfits_taggedTemplateLiteral(["hat"]))), template_string_$items(outfits_templateObject144 || (outfits_templateObject144 = outfits_taggedTemplateLiteral(["high-temperature mining mask, Iunion crown"])))], [template_string_$slot(outfits_templateObject145 || (outfits_templateObject145 = outfits_taggedTemplateLiteral(["back"]))), template_string_$item(outfits_templateObject146 || (outfits_templateObject146 = outfits_taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"])))], [template_string_$slot(outfits_templateObject147 || (outfits_templateObject147 = outfits_taggedTemplateLiteral(["weapon"]))), template_string_$items(outfits_templateObject148 || (outfits_templateObject148 = outfits_taggedTemplateLiteral(["industrial fire extinguisher, Fourth of May Cosplay Saber"])))], [template_string_$slot(outfits_templateObject149 || (outfits_templateObject149 = outfits_taggedTemplateLiteral(["off-hand"]))), template_string_$items(outfits_templateObject150 || (outfits_templateObject150 = outfits_taggedTemplateLiteral(["meteorite guard, latte lovers member's mug"])))], [template_string_$slot(outfits_templateObject151 || (outfits_templateObject151 = outfits_taggedTemplateLiteral(["pants"]))), template_string_$items(outfits_templateObject152 || (outfits_templateObject152 = outfits_taggedTemplateLiteral(["lava-proof pants, pantogram pants"])))], [template_string_$slot(outfits_templateObject153 || (outfits_templateObject153 = outfits_taggedTemplateLiteral(["acc1"]))), template_string_$items(outfits_templateObject154 || (outfits_templateObject154 = outfits_taggedTemplateLiteral(["heat-resistant necktie, brutal brogues"])))], [template_string_$slot(outfits_templateObject155 || (outfits_templateObject155 = outfits_taggedTemplateLiteral(["acc2"]))), template_string_$item(outfits_templateObject156 || (outfits_templateObject156 = outfits_taggedTemplateLiteral(["heat-resistant gloves"])))], //[$slot`acc3`, $item`Kremlin's Greatest Briefcase`],
  [template_string_$slot(outfits_templateObject157 || (outfits_templateObject157 = outfits_taggedTemplateLiteral(["familiar"]))), template_string_$items(outfits_templateObject158 || (outfits_templateObject158 = outfits_taggedTemplateLiteral(["snow suit, cracker"])))]]), template_string_$familiar(outfits_templateObject159 || (outfits_templateObject159 = outfits_taggedTemplateLiteral(["Exotic Parrot"])))).dress();
}
function noncombatOutfit() {
  Outfit.doYourBest(new Map([[template_string_$slot(outfits_templateObject160 || (outfits_templateObject160 = outfits_taggedTemplateLiteral(["hat"]))), template_string_$item(outfits_templateObject161 || (outfits_templateObject161 = outfits_taggedTemplateLiteral(["very pointy crown"])))], [template_string_$slot(outfits_templateObject162 || (outfits_templateObject162 = outfits_taggedTemplateLiteral(["back"]))), template_string_$item(outfits_templateObject163 || (outfits_templateObject163 = outfits_taggedTemplateLiteral(["protonic accelerator pack"])))], [template_string_$slot(outfits_templateObject164 || (outfits_templateObject164 = outfits_taggedTemplateLiteral(["weapon"]))), template_string_$item(outfits_templateObject165 || (outfits_templateObject165 = outfits_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [template_string_$slot(outfits_templateObject166 || (outfits_templateObject166 = outfits_taggedTemplateLiteral(["off-hand"]))), template_string_$items(outfits_templateObject167 || (outfits_templateObject167 = outfits_taggedTemplateLiteral(["rope, burning paper crane, familiar scrapbook"])))], //[$slot`pants`, $item`pantogram pants`],
  [template_string_$slot(outfits_templateObject168 || (outfits_templateObject168 = outfits_taggedTemplateLiteral(["acc1"]))), template_string_$item(outfits_templateObject169 || (outfits_templateObject169 = outfits_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"])))], [template_string_$slot(outfits_templateObject170 || (outfits_templateObject170 = outfits_taggedTemplateLiteral(["acc2"]))), template_string_$item(outfits_templateObject171 || (outfits_templateObject171 = outfits_taggedTemplateLiteral(["codpiece"])))], [template_string_$slot(outfits_templateObject172 || (outfits_templateObject172 = outfits_taggedTemplateLiteral(["acc3"]))), template_string_$item(outfits_templateObject173 || (outfits_templateObject173 = outfits_taggedTemplateLiteral(["Brutal brogues"])))]]), template_string_$familiar(outfits_templateObject174 || (outfits_templateObject174 = outfits_taggedTemplateLiteral(["Disgeist"])))).dress();
}
function famweightOutfit() {
  var familiarAndEquip = !(0,external_kolmafia_namespaceObject.inHardcore)() ? {
    fam: template_string_$familiar(outfits_templateObject175 || (outfits_templateObject175 = outfits_taggedTemplateLiteral(["Exotic Parrot"]))),
    equip: template_string_$item(outfits_templateObject176 || (outfits_templateObject176 = outfits_taggedTemplateLiteral(["snow suit"])))
  } : lib_have(template_string_$item(outfits_templateObject177 || (outfits_templateObject177 = outfits_taggedTemplateLiteral(["cracker"])))) ? {
    fam: template_string_$familiar(outfits_templateObject178 || (outfits_templateObject178 = outfits_taggedTemplateLiteral(["Exotic Parrot"]))),
    equip: template_string_$item(outfits_templateObject179 || (outfits_templateObject179 = outfits_taggedTemplateLiteral(["cracker"])))
  } : lib_have(template_string_$familiar(outfits_templateObject180 || (outfits_templateObject180 = outfits_taggedTemplateLiteral(["Baby Bugged Bugbear"])))) ? {
    fam: template_string_$familiar(outfits_templateObject181 || (outfits_templateObject181 = outfits_taggedTemplateLiteral(["Baby Bugged Bugbear"]))),
    equip: template_string_$item(outfits_templateObject182 || (outfits_templateObject182 = outfits_taggedTemplateLiteral(["bugged beanie"])))
  } : {
    fam: template_string_$familiar(outfits_templateObject183 || (outfits_templateObject183 = outfits_taggedTemplateLiteral(["Blood-Faced Volleyball"]))),
    equip: lib_have(template_string_$item(outfits_templateObject184 || (outfits_templateObject184 = outfits_taggedTemplateLiteral(["astral pet sweater"])))) ? template_string_$item(outfits_templateObject185 || (outfits_templateObject185 = outfits_taggedTemplateLiteral(["astral pet sweater"]))) : template_string_$item(outfits_templateObject186 || (outfits_templateObject186 = outfits_taggedTemplateLiteral(["none"])))
  };
  Outfit.doYourBest(new Map([[template_string_$slot(outfits_templateObject187 || (outfits_templateObject187 = outfits_taggedTemplateLiteral(["hat"]))), template_string_$item(outfits_templateObject188 || (outfits_templateObject188 = outfits_taggedTemplateLiteral(["Daylight Shavings Helmet"])))], [template_string_$slot(_templateObject189 || (_templateObject189 = outfits_taggedTemplateLiteral(["weapon"]))), template_string_$item(_templateObject190 || (_templateObject190 = outfits_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [template_string_$slot(_templateObject191 || (_templateObject191 = outfits_taggedTemplateLiteral(["off-hand"]))), template_string_$items(_templateObject192 || (_templateObject192 = outfits_taggedTemplateLiteral(["rope, burning paper crane, familiar scrapbook"])))], [template_string_$slot(_templateObject193 || (_templateObject193 = outfits_taggedTemplateLiteral(["acc1"]))), template_string_$item(_templateObject194 || (_templateObject194 = outfits_taggedTemplateLiteral(["Beach Comb"])))], [template_string_$slot(_templateObject195 || (_templateObject195 = outfits_taggedTemplateLiteral(["acc2"]))), template_string_$item(_templateObject196 || (_templateObject196 = outfits_taggedTemplateLiteral(["Brutal brogues"])))], [template_string_$slot(_templateObject197 || (_templateObject197 = outfits_taggedTemplateLiteral(["acc3"]))), template_string_$item(_templateObject198 || (_templateObject198 = outfits_taggedTemplateLiteral(["hewn moon-rune spoon"])))], [template_string_$slot(_templateObject199 || (_templateObject199 = outfits_taggedTemplateLiteral(["familiar"]))), familiarAndEquip.equip]]), familiarAndEquip.fam).dress();
}
function weaponOutfit() {
  if (!lib_have(template_string_$item(_templateObject200 || (_templateObject200 = outfits_taggedTemplateLiteral(["broken champagne bottle"]))))) (0,external_kolmafia_namespaceObject.cliExecute)("fold broken champagne bottle");
  Outfit.doYourBest(new Map([[template_string_$slot(_templateObject201 || (_templateObject201 = outfits_taggedTemplateLiteral(["hat"]))), template_string_$items(_templateObject202 || (_templateObject202 = outfits_taggedTemplateLiteral(["seal-skull helmet"])))], [template_string_$slot(_templateObject203 || (_templateObject203 = outfits_taggedTemplateLiteral(["weapon"]))), template_string_$item(_templateObject204 || (_templateObject204 = outfits_taggedTemplateLiteral(["broken champagne bottle"])))], [template_string_$slot(_templateObject205 || (_templateObject205 = outfits_taggedTemplateLiteral(["off-hand"]))), template_string_$item(_templateObject206 || (_templateObject206 = outfits_taggedTemplateLiteral(["dented scepter"])))], [template_string_$slot(_templateObject207 || (_templateObject207 = outfits_taggedTemplateLiteral(["acc1"]))), template_string_$item(_templateObject208 || (_templateObject208 = outfits_taggedTemplateLiteral(["Brutal brogues"])))], [template_string_$slot(_templateObject209 || (_templateObject209 = outfits_taggedTemplateLiteral(["acc2"]))), template_string_$item(_templateObject210 || (_templateObject210 = outfits_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"])))], [template_string_$slot(_templateObject211 || (_templateObject211 = outfits_taggedTemplateLiteral(["acc3"]))), template_string_$item(_templateObject212 || (_templateObject212 = outfits_taggedTemplateLiteral(["Powerful Glove"])))], [template_string_$slot(_templateObject213 || (_templateObject213 = outfits_taggedTemplateLiteral(["familiar"]))), template_string_$items(_templateObject214 || (_templateObject214 = outfits_taggedTemplateLiteral(["stick-knife of loathing, fish hatchet, mutant arm"])))]]), //CHECK THIS
  template_string_$familiar(_templateObject215 || (_templateObject215 = outfits_taggedTemplateLiteral(["Disembodied Hand"])))).dress();
}
function spellOutfit() {
  Outfit.doYourBest(new Map([[template_string_$slot(_templateObject216 || (_templateObject216 = outfits_taggedTemplateLiteral(["hat"]))), template_string_$items(_templateObject217 || (_templateObject217 = outfits_taggedTemplateLiteral(["sugar chapeau, astral chapeau, Hollandaise helmet"])))], [template_string_$slot(_templateObject218 || (_templateObject218 = outfits_taggedTemplateLiteral(["weapon"]))), template_string_$item(_templateObject219 || (_templateObject219 = outfits_taggedTemplateLiteral(["weeping willow wand"])))], [template_string_$slot(_templateObject220 || (_templateObject220 = outfits_taggedTemplateLiteral(["familiar"]))), template_string_$items(_templateObject221 || (_templateObject221 = outfits_taggedTemplateLiteral(["stick-knife of loathing, wrench"])))], [template_string_$slot(_templateObject222 || (_templateObject222 = outfits_taggedTemplateLiteral(["off-hand"]))), template_string_$item(_templateObject223 || (_templateObject223 = outfits_taggedTemplateLiteral(["abracandalabra"])))], //[$slot`pants`, $item`pantogram pants`],
  [template_string_$slot(_templateObject224 || (_templateObject224 = outfits_taggedTemplateLiteral(["acc1"]))), template_string_$item(_templateObject225 || (_templateObject225 = outfits_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"])))], [template_string_$slot(_templateObject226 || (_templateObject226 = outfits_taggedTemplateLiteral(["acc2"]))), template_string_$item(_templateObject227 || (_templateObject227 = outfits_taggedTemplateLiteral(["powerful glove"])))], [template_string_$slot(_templateObject228 || (_templateObject228 = outfits_taggedTemplateLiteral(["acc3"]))), template_string_$item(_templateObject229 || (_templateObject229 = outfits_taggedTemplateLiteral(["battle broom"])))]]), template_string_$familiar(_templateObject230 || (_templateObject230 = outfits_taggedTemplateLiteral(["Disembodied Hand"])))).dress();
}
;// CONCATENATED MODULE: ./src/asmohccs-macros.ts

var asmohccs_macros_delevel = combat_Macro.skill("curse of weaksauce").skill("micrometeor").tryItem("time-spinner").skill("summon love gnats");
var asmohccs_macros_candyblast = combat_Macro.while_('!match "Hey, some of it is even intact afterwards!"', combat_Macro.skill("candyblast"));
var asmohccs_macros_easyFight = combat_Macro.skill("extract").skill("sing along");
var defaultKill = combat_Macro.step(asmohccs_macros_delevel).step(asmohccs_macros_easyFight).attack().repeat();
// EXTERNAL MODULE: ./node_modules/libram/node_modules/core-js/modules/es.object.values.js
var es_object_values = __webpack_require__(2231);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(7120);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
;// CONCATENATED MODULE: ./node_modules/libram/dist/Copier.js
function Copier_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Copier_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Copier = function Copier(couldCopy, prepare, canCopy, copiedMonster, fightCopy) {
  Copier_classCallCheck(this, Copier);

  Copier_defineProperty(this, "couldCopy", void 0);

  Copier_defineProperty(this, "prepare", void 0);

  Copier_defineProperty(this, "canCopy", void 0);

  Copier_defineProperty(this, "copiedMonster", void 0);

  Copier_defineProperty(this, "fightCopy", null);

  this.couldCopy = couldCopy;
  this.prepare = prepare;
  this.canCopy = canCopy;
  this.copiedMonster = copiedMonster;
  if (fightCopy) this.fightCopy = fightCopy;
};
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2016/SourceTerminal.js
var SourceTerminal_templateObject, SourceTerminal_templateObject2, SourceTerminal_templateObject3, SourceTerminal_templateObject4, SourceTerminal_templateObject5, SourceTerminal_templateObject6, SourceTerminal_templateObject7, SourceTerminal_templateObject8, SourceTerminal_templateObject9, SourceTerminal_templateObject10, SourceTerminal_templateObject11, SourceTerminal_templateObject12, SourceTerminal_templateObject13, SourceTerminal_templateObject14, SourceTerminal_templateObject15, SourceTerminal_templateObject16, SourceTerminal_templateObject17, SourceTerminal_templateObject18, SourceTerminal_templateObject19, SourceTerminal_templateObject20, SourceTerminal_templateObject21, SourceTerminal_templateObject22, SourceTerminal_templateObject23, SourceTerminal_templateObject24, SourceTerminal_templateObject25, SourceTerminal_templateObject26, SourceTerminal_templateObject27;

function SourceTerminal_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = SourceTerminal_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function SourceTerminal_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return SourceTerminal_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return SourceTerminal_arrayLikeToArray(o, minLen); }

function SourceTerminal_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function SourceTerminal_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var SourceTerminal_item = template_string_$item(SourceTerminal_templateObject || (SourceTerminal_templateObject = SourceTerminal_taggedTemplateLiteral(["Source terminal"])));
function SourceTerminal_have() {
  return haveInCampground(SourceTerminal_item);
}
/**
 * Buffs that can be acquired from Enhance
 *
 * - Items: +30% Item Drop
 * - Meat: +60% Meat Drop
 * - Init: +50% Initiative
 * - Critical: +10% chance of Critical Hit, +10% chance of Spell Critical Hit
 * - Damage: +5 Prismatic Damage
 * - Substats: +3 Stats Per Fight
 */

var Buffs = {
  Items: template_string_$effect(SourceTerminal_templateObject2 || (SourceTerminal_templateObject2 = SourceTerminal_taggedTemplateLiteral(["items.enh"]))),
  Meat: template_string_$effect(SourceTerminal_templateObject3 || (SourceTerminal_templateObject3 = SourceTerminal_taggedTemplateLiteral(["meat.enh"]))),
  Init: template_string_$effect(SourceTerminal_templateObject4 || (SourceTerminal_templateObject4 = SourceTerminal_taggedTemplateLiteral(["init.enh"]))),
  Critical: template_string_$effect(SourceTerminal_templateObject5 || (SourceTerminal_templateObject5 = SourceTerminal_taggedTemplateLiteral(["critical.enh"]))),
  Damage: template_string_$effect(SourceTerminal_templateObject6 || (SourceTerminal_templateObject6 = SourceTerminal_taggedTemplateLiteral(["damage.enh"]))),
  Substats: template_string_$effect(SourceTerminal_templateObject7 || (SourceTerminal_templateObject7 = SourceTerminal_taggedTemplateLiteral(["substats.enh"])))
};
/**
 * Acquire a buff from the Source Terminal
 * @param buff The buff to acquire
 * @see Buffs
 */

function enhance(buff) {
  if (!Object.values(Buffs).includes(buff)) {
    return false;
  }

  return cliExecute("terminal enhance ".concat(buff.name));
}
/**
 * Rollover buffs that can be acquired from Enquiry
 */

var RolloverBuffs = {
  /** +5 Familiar Weight */
  Familiar: template_string_$effect(SourceTerminal_templateObject8 || (SourceTerminal_templateObject8 = SourceTerminal_taggedTemplateLiteral(["familiar.enq"]))),

  /** +25 ML */
  Monsters: template_string_$effect(SourceTerminal_templateObject9 || (SourceTerminal_templateObject9 = SourceTerminal_taggedTemplateLiteral(["monsters.enq"]))),

  /** +5 Prismatic Resistance */
  Protect: template_string_$effect(SourceTerminal_templateObject10 || (SourceTerminal_templateObject10 = SourceTerminal_taggedTemplateLiteral(["protect.enq"]))),

  /** +100% Muscle, +100% Mysticality, +100% Moxie */
  Stats: template_string_$effect(SourceTerminal_templateObject11 || (SourceTerminal_templateObject11 = SourceTerminal_taggedTemplateLiteral(["stats.enq"])))
};
/**
 * Acquire a buff from the Source Terminal
 * @param buff The buff to acquire
 * @see RolloverBuffs
 */

function enquiry(rolloverBuff) {
  if (!Object.values(RolloverBuffs).includes(rolloverBuff)) {
    return false;
  }

  return cliExecute("terminal enquiry ".concat(rolloverBuff.name));
}
/**
 * Skills that can be acquired from Enhance
 */

var Skills = {
  /** Collect Source essence from enemies once per combat */
  Extract: $skill(SourceTerminal_templateObject12 || (SourceTerminal_templateObject12 = SourceTerminal_taggedTemplateLiteral(["Extract"]))),

  /** Stagger and create a wandering monster 1-3 times per day */
  Digitize: $skill(SourceTerminal_templateObject13 || (SourceTerminal_templateObject13 = SourceTerminal_taggedTemplateLiteral(["Digitize"]))),

  /** Stagger and deal 25% of enemy HP in damage once per combat */
  Compress: $skill(SourceTerminal_templateObject14 || (SourceTerminal_templateObject14 = SourceTerminal_taggedTemplateLiteral(["Compress"]))),

  /** Double monster's HP, attack, defence, attacks per round and item drops once per fight and once per day (five in The Source) */
  Duplicate: $skill(SourceTerminal_templateObject15 || (SourceTerminal_templateObject15 = SourceTerminal_taggedTemplateLiteral(["Duplicate"]))),

  /** Causes government agent/Source Agent wanderer next turn once per combat and three times per day */
  Portscan: $skill(SourceTerminal_templateObject16 || (SourceTerminal_templateObject16 = SourceTerminal_taggedTemplateLiteral(["Portscan"]))),

  /** Increase Max MP by 100% and recover 1000 MP once per combat with a 30 turn cooldown */
  Turbo: $skill(SourceTerminal_templateObject17 || (SourceTerminal_templateObject17 = SourceTerminal_taggedTemplateLiteral(["Turbo"])))
};
/**
 * Make a skill available.
 * The Source Terminal can give the player access to two skills at any time
 * @param skill Skill to learn
 * @see Skills
 */

function educate(skills) {
  var skillsArray = Array.isArray(skills) ? skills.slice(0, 2) : [skills];
  if (isEqual_default()(skillsArray, getSkills())) return true;

  var _iterator = SourceTerminal_createForOfIteratorHelper(skillsArray),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var skill = _step.value;
      if (!Object.values(Skills).includes(skill)) return false;
      (0,external_kolmafia_namespaceObject.cliExecute)("terminal educate ".concat(skill.name.toLowerCase(), ".edu"));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return true;
}
/**
 * Return the Skills currently available from Source Terminal
 */

function getSkills() {
  return ["sourceTerminalEducate1", "sourceTerminalEducate2"].map(p => property_get(p)).filter(s => s !== "").map(s => Skill.get(s.slice(0, -4)));
}
function isCurrentSkill(skills) {
  var currentSkills = getSkills();
  var skillsArray = Array.isArray(skills) ? skills.slice(0, 2) : [skills];
  return skillsArray.every(skill => currentSkills.includes(skill));
}
/**
 * Items that can be generated by the Source Terminal
 */

var Items = new Map([[template_string_$item(SourceTerminal_templateObject18 || (SourceTerminal_templateObject18 = SourceTerminal_taggedTemplateLiteral(["browser cookie"]))), "food.ext"], [template_string_$item(SourceTerminal_templateObject19 || (SourceTerminal_templateObject19 = SourceTerminal_taggedTemplateLiteral(["hacked gibson"]))), "booze.ext"], [template_string_$item(SourceTerminal_templateObject20 || (SourceTerminal_templateObject20 = SourceTerminal_taggedTemplateLiteral(["Source shades"]))), "goggles.ext"], [template_string_$item(SourceTerminal_templateObject21 || (SourceTerminal_templateObject21 = SourceTerminal_taggedTemplateLiteral(["Source terminal GRAM chip"]))), "gram.ext"], [template_string_$item(SourceTerminal_templateObject22 || (SourceTerminal_templateObject22 = SourceTerminal_taggedTemplateLiteral(["Source terminal PRAM chip"]))), "pram.ext"], [template_string_$item(SourceTerminal_templateObject23 || (SourceTerminal_templateObject23 = SourceTerminal_taggedTemplateLiteral(["Source terminal SPAM chip"]))), "spam.ext"], [template_string_$item(SourceTerminal_templateObject24 || (SourceTerminal_templateObject24 = SourceTerminal_taggedTemplateLiteral(["Source terminal CRAM chip"]))), "cram.ext"], [template_string_$item(SourceTerminal_templateObject25 || (SourceTerminal_templateObject25 = SourceTerminal_taggedTemplateLiteral(["Source terminal DRAM chip"]))), "dram.ext"], [template_string_$item(SourceTerminal_templateObject26 || (SourceTerminal_templateObject26 = SourceTerminal_taggedTemplateLiteral(["Source terminal TRAM chip"]))), "tram.ext"], [template_string_$item(SourceTerminal_templateObject27 || (SourceTerminal_templateObject27 = SourceTerminal_taggedTemplateLiteral(["software bug"]))), "familiar.ext"]]);
/**
 * Collect an item from the Source Terminal (up to three times a day)
 * @param item Item to collect
 * @see Items
 */

function extrude(item) {
  var fileName = Items.get(item);
  if (!fileName) return false;
  return cliExecute("terminal extrude ".concat(fileName));
}
/**
 * Return chips currently installed to player's Source Terminal
 */

function getChips() {
  return property_get("sourceTerminalChips").split(",");
}
/**
 * Return number of times digitize was cast today
 */

function getDigitizeUses() {
  return property_get("_sourceTerminalDigitizeUses");
}
/**
 * Return Monster that is currently digitized, else null
 */

function getDigitizeMonster() {
  return property_get("_sourceTerminalDigitizeMonster");
}
/**
 * Return number of digitized monsters encountered since it was last cast
 */

function getDigitizeMonsterCount() {
  return get("_sourceTerminalDigitizeMonsterCount");
}
/**
 * Return maximum number of digitizes player can cast
 */

function getMaximumDigitizeUses() {
  var chips = getChips();
  return 1 + (chips.includes("TRAM") ? 1 : 0) + (chips.includes("TRIGRAM") ? 1 : 0);
}
/**
 * Returns the current day's number of remaining digitize uses
 */

function getDigitizeUsesRemaining() {
  return getMaximumDigitizeUses() - getDigitizeUses();
}
/**
 * Returns whether the player could theoretically cast Digitize
 */

function couldDigitize() {
  return getDigitizeUses() < getMaximumDigitizeUses();
}
function prepareDigitize() {
  if (!isCurrentSkill(Skills.Digitize)) {
    return educate(Skills.Digitize);
  }

  return true;
}
/**
 * Returns whether the player can cast Digitize immediately
 * This only considers whether the player has learned the skill
 * and has sufficient daily casts remaining, not whether they have sufficient MP
 */

function canDigitize() {
  return couldDigitize() && getSkills().includes(Skills.Digitize);
}
var Digitize = new Copier(() => couldDigitize(), () => prepareDigitize(), () => canDigitize(), () => getDigitizeMonster());
/**
 * Return number of times duplicate was cast today
 */

function getDuplicateUses() {
  return get("_sourceTerminalDuplicateUses");
}
/**
 * Return number of times enhance was cast today
 */

function getEnhanceUses() {
  return get("_sourceTerminalEnhanceUses");
}
/**
 * Return number of times portscan was cast today
 */

function getPortscanUses() {
  return get("_sourceTerminalPortscanUses");
}
;// CONCATENATED MODULE: ./src/runstart.ts
var runstart_templateObject, runstart_templateObject2, runstart_templateObject3, runstart_templateObject4, runstart_templateObject5, runstart_templateObject6, runstart_templateObject7, runstart_templateObject8, runstart_templateObject9, runstart_templateObject10, runstart_templateObject11, runstart_templateObject12, runstart_templateObject13, runstart_templateObject14, runstart_templateObject15, runstart_templateObject16, runstart_templateObject17, runstart_templateObject18, runstart_templateObject19, runstart_templateObject20, runstart_templateObject21, runstart_templateObject22, runstart_templateObject23, runstart_templateObject24, runstart_templateObject25, runstart_templateObject26, runstart_templateObject27, runstart_templateObject28, runstart_templateObject29, runstart_templateObject30, runstart_templateObject31, runstart_templateObject32, runstart_templateObject33, runstart_templateObject34, runstart_templateObject35, runstart_templateObject36, runstart_templateObject37, runstart_templateObject38, runstart_templateObject39, runstart_templateObject40, runstart_templateObject41, runstart_templateObject42, runstart_templateObject43, runstart_templateObject44, runstart_templateObject45, runstart_templateObject46, runstart_templateObject47, runstart_templateObject48;

function runstart_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





function juiceBar() {
  (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=chateau&action=chateau_desk2");
  (0,external_kolmafia_namespaceObject.autosell)(1, template_string_$item(runstart_templateObject || (runstart_templateObject = runstart_taggedTemplateLiteral(["gremlin juice"]))));
}

function toot() {
  (0,external_kolmafia_namespaceObject.visitUrl)("tutorial.php?action=toot");
  tryUse(1, template_string_$item(runstart_templateObject2 || (runstart_templateObject2 = runstart_taggedTemplateLiteral(["letter from King Ralph XI"]))));
  tryUse(1, template_string_$item(runstart_templateObject3 || (runstart_templateObject3 = runstart_taggedTemplateLiteral(["pork elf goodies sack"]))));
  (0,external_kolmafia_namespaceObject.autosell)(5, template_string_$item(runstart_templateObject4 || (runstart_templateObject4 = runstart_taggedTemplateLiteral(["baconstone"]))));
  (0,external_kolmafia_namespaceObject.autosell)(5, template_string_$item(runstart_templateObject5 || (runstart_templateObject5 = runstart_taggedTemplateLiteral(["hamethyst"]))));
  (0,external_kolmafia_namespaceObject.autosell)((0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(runstart_templateObject6 || (runstart_templateObject6 = runstart_taggedTemplateLiteral(["porquoise"])))) - 2, template_string_$item(runstart_templateObject7 || (runstart_templateObject7 = runstart_taggedTemplateLiteral(["porquoise"]))));

  if (!lib_have(template_string_$item(runstart_templateObject8 || (runstart_templateObject8 = runstart_taggedTemplateLiteral(["toy accordion"]))))) {
    (0,external_kolmafia_namespaceObject.buy)(1, template_string_$item(runstart_templateObject9 || (runstart_templateObject9 = runstart_taggedTemplateLiteral(["toy accordion"]))));
  }
}

function grimoires() {
  if (!property_get("_grimoireConfiscatorSummons") && lib_have($skill(runstart_templateObject10 || (runstart_templateObject10 = runstart_taggedTemplateLiteral(["Summon Confiscated Things"]))))) {
    (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(runstart_templateObject11 || (runstart_templateObject11 = runstart_taggedTemplateLiteral(["Summon Confiscated Things"]))));
    template_string_$items(runstart_templateObject12 || (runstart_templateObject12 = runstart_taggedTemplateLiteral(["glow-in-the-dark necklace, \"KICK ME\" sign, LCD game: Burger Belt, LCD game: Food Eater, LCD game: Garbage River"]))).forEach(item => (0,external_kolmafia_namespaceObject.autosell)(1, item));
  }

  if (!property_get("grimoire2Summons") && lib_have($skill(runstart_templateObject13 || (runstart_templateObject13 = runstart_taggedTemplateLiteral(["Summon Tasteful Items"]))))) {
    (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(runstart_templateObject14 || (runstart_templateObject14 = runstart_taggedTemplateLiteral(["Summon Tasteful Items"]))));
    template_string_$items(runstart_templateObject15 || (runstart_templateObject15 = runstart_taggedTemplateLiteral(["black-and-blue light, blue plasma ball, cheap studded belt, flavored foot massage oil, foam dart, Loudmouth Larry Lamprey, personal massager, personalized coffee mug, stick-on eyebrow piercing"]))).forEach(item => (0,external_kolmafia_namespaceObject.autosell)(5, item));
  }

  if (!property_get("grimoire3Summons") && lib_have($skill(runstart_templateObject16 || (runstart_templateObject16 = runstart_taggedTemplateLiteral(["Summon Alice's Army Cards"]))))) {
    (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(runstart_templateObject17 || (runstart_templateObject17 = runstart_taggedTemplateLiteral(["Summon Alice's Army Cards"]))));
    (0,external_kolmafia_namespaceObject.buy)($coinmaster(runstart_templateObject18 || (runstart_templateObject18 = runstart_taggedTemplateLiteral(["Game Shoppe Snacks"]))), 1, template_string_$item(runstart_templateObject19 || (runstart_templateObject19 = runstart_taggedTemplateLiteral(["tobiko marble soda"]))));
  }

  if (!property_get("_grimoireGeekySummons") && lib_have($skill(runstart_templateObject20 || (runstart_templateObject20 = runstart_taggedTemplateLiteral(["Summon Geeky Gifts"]))))) {
    (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(runstart_templateObject21 || (runstart_templateObject21 = runstart_taggedTemplateLiteral(["Summon Geeky Gifts"]))));
  }
}

function setSettings() {
  educate([$skill(runstart_templateObject22 || (runstart_templateObject22 = runstart_taggedTemplateLiteral(["Digitize"]))), $skill(runstart_templateObject23 || (runstart_templateObject23 = runstart_taggedTemplateLiteral(["Extract"])))]);
  setClan(property_get("asmocs_mainClan", "Alliance From Heck"));
  _set("choiceAdventure1106", 1); //Halloweiner Dog get Buff to help with Stat Tests

  _set("mpAutoRecovery", 0.05);
  _set("mpAutoRecoveryTarget", 0.1);
  _set("hpAutoRecovery", 0.65);
  _set("hpAutoRecoveryTarget", 0.95);
  (0,external_kolmafia_namespaceObject.visitUrl)("clan_viplounge.php?action=fwshop"); //visit Fireworks shop to ensure can buy fireworks
}

function getTurns() {
  if ((0,external_kolmafia_namespaceObject.myLevel)() === 1 && !(0,external_kolmafia_namespaceObject.mySpleenUse)()) {
    while (property_get("_universeCalculated") < property_get("skillLevel144")) {
      (0,external_kolmafia_namespaceObject.cliExecute)("numberology 69");
    }
  }

  if (!property_get("_borrowedTimeUsed")) {
    if (!lib_have(template_string_$item(runstart_templateObject24 || (runstart_templateObject24 = runstart_taggedTemplateLiteral(["borrowed time"]))))) {
      (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(runstart_templateObject25 || (runstart_templateObject25 = runstart_taggedTemplateLiteral(["borrowed time"]))));
    }

    (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(runstart_templateObject26 || (runstart_templateObject26 = runstart_taggedTemplateLiteral(["borrowed time"]))));
  }
}

function prepGear() {
  if (!lib_have(template_string_$item(runstart_templateObject27 || (runstart_templateObject27 = runstart_taggedTemplateLiteral(["dromedary drinking helmet"]))))) {
    (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(runstart_templateObject28 || (runstart_templateObject28 = runstart_taggedTemplateLiteral(["Melodramedary"]))));

    if (!lib_have(template_string_$item(runstart_templateObject29 || (runstart_templateObject29 = runstart_taggedTemplateLiteral(["box of Familiar Jacks"]))))) {
      (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(runstart_templateObject30 || (runstart_templateObject30 = runstart_taggedTemplateLiteral(["box of Familiar Jacks"]))));
    }

    (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(runstart_templateObject31 || (runstart_templateObject31 = runstart_taggedTemplateLiteral(["box of Familiar Jacks"]))));
    (0,external_kolmafia_namespaceObject.cliExecute)("mummery myst");
  }

  if (!lib_have(template_string_$item(runstart_templateObject32 || (runstart_templateObject32 = runstart_taggedTemplateLiteral(["your cowboy boots"]))))) {
    (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=town_right&action=townright_ltt");
    (0,external_kolmafia_namespaceObject.runChoice)(5);
  }

  if (lib_have(template_string_$item(runstart_templateObject33 || (runstart_templateObject33 = runstart_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))) && !property_get("_saberMod")) {
    (0,external_kolmafia_namespaceObject.visitUrl)("main.php?action=may4");
    (0,external_kolmafia_namespaceObject.runChoice)(4);
  }

  if (!lib_have(template_string_$item(runstart_templateObject34 || (runstart_templateObject34 = runstart_taggedTemplateLiteral(["gold detective badge"]))))) {
    (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=town_wrong&action=townwrong_precinct");
  }

  if (lib_have(template_string_$item(runstart_templateObject35 || (runstart_templateObject35 = runstart_taggedTemplateLiteral(["GameInformPowerDailyPro magazine"]))))) {
    (0,external_kolmafia_namespaceObject.visitUrl)("inv_use.php?whichitem=6174&confirm=Yep.");
  }

  if ((0,external_kolmafia_namespaceObject.eudoraItem)() === template_string_$item(runstart_templateObject36 || (runstart_templateObject36 = runstart_taggedTemplateLiteral(["GameInformPowerDailyPro subscription card"])))) {
    if (!lib_have(template_string_$item(runstart_templateObject37 || (runstart_templateObject37 = runstart_taggedTemplateLiteral(["scroll of Puddingskin"])))) && !lib_have(template_string_$item(runstart_templateObject38 || (runstart_templateObject38 = runstart_taggedTemplateLiteral(["dungeoneering kit"]))))) {
      (0,external_kolmafia_namespaceObject.visitUrl)("adventure.php?snarfblat=319");
      (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(runstart_templateObject39 || (runstart_templateObject39 = runstart_taggedTemplateLiteral(["dungeoneering kit"]))));
    }

    if (property_get("backupCameraReverserEnabled") === false) {
      (0,external_kolmafia_namespaceObject.cliExecute)("backupcamera reverser on");
    }
  }

  if (!property_get("_floundryItemCreated")) {
    setClan(property_get("asmocs_fishClan", "Alliance From Heck"));
    (0,external_kolmafia_namespaceObject.cliExecute)("acquire codpiece");
  } // Get flimsy hardwood scraps.


  (0,external_kolmafia_namespaceObject.visitUrl)("shop.php?whichshop=lathe");

  if ((0,external_kolmafia_namespaceObject.availableAmount)(template_string_$item(runstart_templateObject40 || (runstart_templateObject40 = runstart_taggedTemplateLiteral(["flimsy hardwood scraps"])))) > 0) {
    (0,external_kolmafia_namespaceObject.retrieveItem)(1, template_string_$item(runstart_templateObject41 || (runstart_templateObject41 = runstart_taggedTemplateLiteral(["weeping willow wand"]))));
  }
  /*if (!have($item`pantogram pants`)) {
      cliExecute("pantogram mysticality|hot|drops of blood|some self-respect|your dreams|silent");
  }*/


  if (property_get("boomBoxSong") !== "Total Eclipse of Your Meat") {
    (0,external_kolmafia_namespaceObject.cliExecute)("boombox meat");
  }

  (0,external_kolmafia_namespaceObject.cliExecute)("briefcase enchantment weapon -combat");
}

function vote() {
  if (!property_get("_voteToday")) {
    (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=town_right&action=townright_vote");
    (0,external_kolmafia_namespaceObject.visitUrl)("choice.php?option=1&whichchoice=1331&g=2&local%5B%5D=1&local%5B%5D=3");
  }
}

function deck() {
  if (!property_get("_deckCardsDrawn")) {
    if (!(0,external_kolmafia_namespaceObject.inHardcore)()) {
      (0,external_kolmafia_namespaceObject.cliExecute)("cheat rope"); //Don't get Wrench in Softcore as we can pull the Stick-Knife
    } else {
      (0,external_kolmafia_namespaceObject.cliExecute)("cheat wrench; cheat rope");
    }
  }
}

function scavenge() {
  if (!property_get("_daycareGymScavenges")) {
    (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=town_wrong&action=townwrong_boxingdaycare");
    var pg = (0,external_kolmafia_namespaceObject.runChoice)(3);
    if ((0,external_kolmafia_namespaceObject.containsText)(pg, "[free]")) (0,external_kolmafia_namespaceObject.runChoice)(2);
    (0,external_kolmafia_namespaceObject.runChoice)(5);
    (0,external_kolmafia_namespaceObject.runChoice)(4);
  }
}

function buff100() {
  if (!(0,external_kolmafia_namespaceObject.haveEffect)(template_string_$effect(runstart_templateObject42 || (runstart_templateObject42 = runstart_taggedTemplateLiteral(["That's Just Cloud-Talk, Man"]))))) {
    (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=campaway&action=campaway_sky");
  }

  ensureSong(template_string_$effect(runstart_templateObject43 || (runstart_templateObject43 = runstart_taggedTemplateLiteral(["The Magical Mojomuscular Melody"]))));

  if (!(0,external_kolmafia_namespaceObject.haveEffect)(template_string_$effect(runstart_templateObject44 || (runstart_templateObject44 = runstart_taggedTemplateLiteral(["Inscrutable Gaze"]))))) {
    //ensureMpTonic(10);
    asmohccs_lib_ensureEffect(template_string_$effect(runstart_templateObject45 || (runstart_templateObject45 = runstart_taggedTemplateLiteral(["Inscrutable Gaze"]))));
  }

  if (!property_get("_clanFortuneBuffUsed")) (0,external_kolmafia_namespaceObject.cliExecute)("fortune buff familiar");
}

function runstart_horsery() {
  //get Crazy Horse
  if (property_get("horseryAvailable") && property_get("_horsery") === "") {
    (0,external_kolmafia_namespaceObject.cliExecute)("horsery crazy");
  }
}

function softcorePulls() {
  //return true; //TODO - pull Stick-Knife of Loathing, Snow Suit, Corrupted Marrow
  if (pullsRemaining() > 4) {
    pullIfPossible(1, $item(runstart_templateObject46 || (runstart_templateObject46 = runstart_taggedTemplateLiteral(["stick-knife of loathing"]))), 100);
    pullIfPossible(1, $item(runstart_templateObject47 || (runstart_templateObject47 = runstart_taggedTemplateLiteral(["snow suit"]))), 100);
    pullIfPossible(1, $item(runstart_templateObject48 || (runstart_templateObject48 = runstart_taggedTemplateLiteral(["corrupted marrow"]))), 5000);
  }
}

function runStart() {
  setSettings();
  toot();
  getTurns();
  deck();
  juiceBar();
  vote(); //grimoires();

  prepGear();
  scavenge();
  buff100();
  runstart_horsery();
}
;// CONCATENATED MODULE: ./src/coil wire.ts
var coil_wire_templateObject, coil_wire_templateObject2, coil_wire_templateObject3, coil_wire_templateObject4, coil_wire_templateObject5, coil_wire_templateObject6, coil_wire_templateObject7, coil_wire_templateObject8, coil_wire_templateObject9, coil_wire_templateObject10, coil_wire_templateObject11, coil_wire_templateObject12, coil_wire_templateObject13, coil_wire_templateObject14, coil_wire_templateObject15, coil_wire_templateObject16, coil_wire_templateObject17, coil_wire_templateObject18, coil_wire_templateObject19, coil_wire_templateObject20, coil_wire_templateObject21, coil_wire_templateObject22, coil_wire_templateObject23, coil_wire_templateObject24;

function coil_wire_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








function firstFights() {
  outfits_uniform();
  (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(coil_wire_templateObject || (coil_wire_templateObject = coil_wire_taggedTemplateLiteral(["back"]))), template_string_$item(coil_wire_templateObject2 || (coil_wire_templateObject2 = coil_wire_taggedTemplateLiteral(["protonic accelerator pack"]))));
  if (!lib_have(template_string_$item(coil_wire_templateObject3 || (coil_wire_templateObject3 = coil_wire_taggedTemplateLiteral(["makeshiftgarbage shirt"]))))) (0,external_kolmafia_namespaceObject.cliExecute)("fold makeshift garbage shirt");
  (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(coil_wire_templateObject4 || (coil_wire_templateObject4 = coil_wire_taggedTemplateLiteral(["shirt"]))), template_string_$item(coil_wire_templateObject5 || (coil_wire_templateObject5 = coil_wire_taggedTemplateLiteral(["makeshift garbage shirt"]))));
  (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(coil_wire_templateObject6 || (coil_wire_templateObject6 = coil_wire_taggedTemplateLiteral(["off-hand"]))), template_string_$item(coil_wire_templateObject7 || (coil_wire_templateObject7 = coil_wire_taggedTemplateLiteral(["latte lovers member's mug"]))));
  asmohccs_lib_useDefaultFamiliar();
  combat_Macro.trySkill($skill(coil_wire_templateObject8 || (coil_wire_templateObject8 = coil_wire_taggedTemplateLiteral(["Micrometeorite"])))).trySkill($skill(coil_wire_templateObject9 || (coil_wire_templateObject9 = coil_wire_taggedTemplateLiteral(["Sing Along"])))).trySkill($skill(coil_wire_templateObject10 || (coil_wire_templateObject10 = coil_wire_taggedTemplateLiteral(["Gulp Latte"])))).trySkill($skill(coil_wire_templateObject11 || (coil_wire_templateObject11 = coil_wire_taggedTemplateLiteral(["Extract"])))).attack().step("repeat").setAutoAttack();

  if (!property_get("_witchessFights")) {
    fightPiece($monster(coil_wire_templateObject12 || (coil_wire_templateObject12 = coil_wire_taggedTemplateLiteral(["Witchess Bishop"]))));
  }

  grimoires();
  asmohccs_lib_useDefaultFamiliar();
  var ghostLocation = property_get("ghostLocation");

  if (ghostLocation) {
    (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(coil_wire_templateObject13 || (coil_wire_templateObject13 = coil_wire_taggedTemplateLiteral(["off-hand"]))), template_string_$item(coil_wire_templateObject14 || (coil_wire_templateObject14 = coil_wire_taggedTemplateLiteral(["latte lovers member's mug"]))));
    asmohccs_lib_useDefaultFamiliar();
    advMacro(ghostLocation, combat_Macro.step(asmohccs_macros_delevel).step(asmohccs_macros_easyFight).skill("shoot ghost").skill("shoot ghost").skill("shoot ghost").skill("trap ghost"));
  }

  (0,external_kolmafia_namespaceObject.equip)(template_string_$item(coil_wire_templateObject15 || (coil_wire_templateObject15 = coil_wire_taggedTemplateLiteral(["Kramco Sausage-o-Matic&trade;"]))));
  asmohccs_lib_useDefaultFamiliar();
  fightSausageIfAble(template_string_$location(coil_wire_templateObject16 || (coil_wire_templateObject16 = coil_wire_taggedTemplateLiteral(["The Haunted Kitchen"]))), combat_Macro.skill($skill(coil_wire_templateObject17 || (coil_wire_templateObject17 = coil_wire_taggedTemplateLiteral(["Micrometeorite"])))).attack().repeat());
  asmohccs_lib_useDefaultFamiliar(false);
  outfits_uniform();
  mapMacro(template_string_$location(coil_wire_templateObject18 || (coil_wire_templateObject18 = coil_wire_taggedTemplateLiteral(["The Haiku Dungeon"]))), $monster(coil_wire_templateObject19 || (coil_wire_templateObject19 = coil_wire_taggedTemplateLiteral(["amateur ninja"]))), combat_Macro.if_("monsterid ".concat($monster(coil_wire_templateObject20 || (coil_wire_templateObject20 = coil_wire_taggedTemplateLiteral(["amateur ninja"]))).id), combat_Macro.skill($skill(coil_wire_templateObject21 || (coil_wire_templateObject21 = coil_wire_taggedTemplateLiteral(["Gingerbread Mob Hit"]))))).step("abort"));
}

function terribleLove() {
  var lovePotion = template_string_$item(coil_wire_templateObject22 || (coil_wire_templateObject22 = coil_wire_taggedTemplateLiteral(["Love Potion #0"])));
  var loveEffect = template_string_$effect(coil_wire_templateObject23 || (coil_wire_templateObject23 = coil_wire_taggedTemplateLiteral(["Tainted Love Potion"])));

  if ((0,external_kolmafia_namespaceObject.haveEffect)(loveEffect) === 0) {
    if ((0,external_kolmafia_namespaceObject.availableAmount)(lovePotion) === 0) {
      (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(coil_wire_templateObject24 || (coil_wire_templateObject24 = coil_wire_taggedTemplateLiteral(["Love Mixology"]))));
    }

    (0,external_kolmafia_namespaceObject.visitUrl)("desc_effect.php?whicheffect=" + loveEffect.descid);

    if ((0,external_kolmafia_namespaceObject.numericModifier)(loveEffect, "mysticality") < 10 || (0,external_kolmafia_namespaceObject.numericModifier)(loveEffect, "muscle") < -30 || (0,external_kolmafia_namespaceObject.numericModifier)(loveEffect, "moxie") < -30 || (0,external_kolmafia_namespaceObject.numericModifier)(loveEffect, "maximum hp percent") < 0.001
    /*||
    numericModifier(loveEffect, "maximum mp percent") < 0.001*/
    ) {
      (0,external_kolmafia_namespaceObject.use)(1, lovePotion);
    }
  }
}
/*
Inital Setup & Prep
Fight a witchess Bishop with latte in offhand for MP
Fight Proto-Ghost (with latte in offhand?)
Fight a Sausage Goblin (in kitchen with latte in lefty?)
Map and Insta-kill Ninja for tot equip
MP Regen Outfit
Use Love Potion if Shitty
*/


function coilWire() {
  runStart();
  firstFights();
  wireOutfit();
  terribleLove();
  burnLibrams();
  return 60;
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2019/BeachComb.js
var BeachComb_templateObject, BeachComb_templateObject2, BeachComb_templateObject3, BeachComb_templateObject4, BeachComb_templateObject5, BeachComb_templateObject6, BeachComb_templateObject7, BeachComb_templateObject8, BeachComb_templateObject9, BeachComb_templateObject10, BeachComb_templateObject11;

function BeachComb_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var headBuffs = [template_string_$effect(BeachComb_templateObject || (BeachComb_templateObject = BeachComb_taggedTemplateLiteral(["Hot-Headed"]))), template_string_$effect(BeachComb_templateObject2 || (BeachComb_templateObject2 = BeachComb_taggedTemplateLiteral(["Cold as Nice"]))), template_string_$effect(BeachComb_templateObject3 || (BeachComb_templateObject3 = BeachComb_taggedTemplateLiteral(["A Brush with Grossness"]))), template_string_$effect(BeachComb_templateObject4 || (BeachComb_templateObject4 = BeachComb_taggedTemplateLiteral(["Does It Have a Skull In There??"]))), template_string_$effect(BeachComb_templateObject5 || (BeachComb_templateObject5 = BeachComb_taggedTemplateLiteral(["Oiled, Slick"]))), template_string_$effect(BeachComb_templateObject6 || (BeachComb_templateObject6 = BeachComb_taggedTemplateLiteral(["Lack of Body-Building"]))), template_string_$effect(BeachComb_templateObject7 || (BeachComb_templateObject7 = BeachComb_taggedTemplateLiteral(["We're All Made of Starfish"]))), template_string_$effect(BeachComb_templateObject8 || (BeachComb_templateObject8 = BeachComb_taggedTemplateLiteral(["Pomp & Circumsands"]))), template_string_$effect(BeachComb_templateObject9 || (BeachComb_templateObject9 = BeachComb_taggedTemplateLiteral(["Resting Beach Face"]))), template_string_$effect(BeachComb_templateObject10 || (BeachComb_templateObject10 = BeachComb_taggedTemplateLiteral(["Do I Know You From Somewhere?"]))), template_string_$effect(BeachComb_templateObject11 || (BeachComb_templateObject11 = BeachComb_taggedTemplateLiteral(["You Learned Something Maybe!"])))];
function tryHead(effect) {
  if (!headBuffs.includes(effect)) return false;
  var headNumber = 1 + headBuffs.indexOf(effect);
  if (getString("_beachHeadsUsed").split(",").includes(headNumber.toString())) return false;
  (0,external_kolmafia_namespaceObject.cliExecute)(effect.default);
  return lib_have(effect);
}
;// CONCATENATED MODULE: ./src/familiarweight.ts
var familiarweight_templateObject, familiarweight_templateObject2, familiarweight_templateObject3, familiarweight_templateObject4, familiarweight_templateObject5, familiarweight_templateObject6, familiarweight_templateObject7, familiarweight_templateObject8, familiarweight_templateObject9, familiarweight_templateObject10, familiarweight_templateObject11, familiarweight_templateObject12, familiarweight_templateObject13, familiarweight_templateObject14, familiarweight_templateObject15, familiarweight_templateObject16, familiarweight_templateObject17, familiarweight_templateObject18, familiarweight_templateObject19, familiarweight_templateObject20, familiarweight_templateObject21, familiarweight_templateObject22, familiarweight_templateObject23, familiarweight_templateObject24, familiarweight_templateObject25;

function familiarweight_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






function universalWeightBuffs() {
  asmohccs_lib_ensureEffect(template_string_$effect(familiarweight_templateObject || (familiarweight_templateObject = familiarweight_taggedTemplateLiteral(["Empathy"]))));
  asmohccs_lib_ensureEffect(template_string_$effect(familiarweight_templateObject2 || (familiarweight_templateObject2 = familiarweight_taggedTemplateLiteral(["Leash of Linguini"]))));
  asmohccs_lib_ensureEffect(template_string_$effect(familiarweight_templateObject3 || (familiarweight_templateObject3 = familiarweight_taggedTemplateLiteral(["Blood Bond"]))));
}
function universalWeightEffects() {
  asmohccs_lib_ensureEffect(template_string_$effect(familiarweight_templateObject4 || (familiarweight_templateObject4 = familiarweight_taggedTemplateLiteral(["Billiards Belligerence"]))));
  if (!property_get("_clanFortuneBuffUsed")) (0,external_kolmafia_namespaceObject.cliExecute)("fortune buff familiar");

  if (!property_get("_freePillKeeperUsed")) {
    (0,external_kolmafia_namespaceObject.cliExecute)("pillkeeper familiar");
  }

  if (!lib_have(template_string_$effect(familiarweight_templateObject5 || (familiarweight_templateObject5 = familiarweight_taggedTemplateLiteral(["Puzzle Champ"]))))) {
    (0,external_kolmafia_namespaceObject.cliExecute)("witchess");
  }

  tryHead(template_string_$effect(familiarweight_templateObject6 || (familiarweight_templateObject6 = familiarweight_taggedTemplateLiteral(["Do I Know You From Somewhere?"]))));
}

function gearAndUncommonBuffs() {
  if (!property_get("_clanFortuneBuffUsed")) (0,external_kolmafia_namespaceObject.cliExecute)("fortune buff familiar");
  if (lib_have(template_string_$item(familiarweight_templateObject7 || (familiarweight_templateObject7 = familiarweight_taggedTemplateLiteral(["burning newspaper"])))) && !lib_have(template_string_$item(familiarweight_templateObject8 || (familiarweight_templateObject8 = familiarweight_taggedTemplateLiteral(["rope"]))))) (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(familiarweight_templateObject9 || (familiarweight_templateObject9 = familiarweight_taggedTemplateLiteral(["burning paper crane"]))));
  if (lib_have(template_string_$item(familiarweight_templateObject10 || (familiarweight_templateObject10 = familiarweight_taggedTemplateLiteral(["short stack of pancakes"]))))) asmohccs_lib_ensureEffect(template_string_$effect(familiarweight_templateObject11 || (familiarweight_templateObject11 = familiarweight_taggedTemplateLiteral(["Shortly Stacked"]))));
  if (lib_have(template_string_$item(familiarweight_templateObject12 || (familiarweight_templateObject12 = familiarweight_taggedTemplateLiteral(["green candy heart"]))))) asmohccs_lib_ensureEffect(template_string_$effect(familiarweight_templateObject13 || (familiarweight_templateObject13 = familiarweight_taggedTemplateLiteral(["Heart of Green"]))));
  (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(familiarweight_templateObject14 || (familiarweight_templateObject14 = familiarweight_taggedTemplateLiteral(["Baby Bugged Bugbear"]))));
  (0,external_kolmafia_namespaceObject.visitUrl)("arena.php"); //removed due to Meat buff being better for aftercore than 1 turn saved

  /*if (!get("_madTeaParty")) {
  	visitUrl("clan_viplounge.php?action=lookingglass&whichfloor=2");
  	cliExecute("acquire sombrero-mounted sparkler");
  	ensureEffect($effect`You Can Really Taste The Dormouse`);
  }*/
}

function familiarStuff() {
  while (property_get("_shortOrderCookCharge") < 11 && 5 - fightsDone() > 11 - property_get("_shortOrderCookCharge")) {
    (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(familiarweight_templateObject15 || (familiarweight_templateObject15 = familiarweight_taggedTemplateLiteral(["Shorter-Order Cook"]))));
    outfits_uniform();
    defaultKill.setAutoAttack();
    fightPiece($monster(familiarweight_templateObject16 || (familiarweight_templateObject16 = familiarweight_taggedTemplateLiteral(["Witchess Bishop"]))));
  }

  while (property_get("garbageFireProgress") < 30 && 5 - fightsDone() > 30 - property_get("garbageFireProgress")) {
    (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(familiarweight_templateObject17 || (familiarweight_templateObject17 = familiarweight_taggedTemplateLiteral(["Garbage Fire"]))));
    outfits_uniform();
    defaultKill.setAutoAttack();
    fightPiece($monster(familiarweight_templateObject18 || (familiarweight_templateObject18 = familiarweight_taggedTemplateLiteral(["Witchess Bishop"]))));
  }
}

function takeAShower() {
  (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(familiarweight_templateObject19 || (familiarweight_templateObject19 = familiarweight_taggedTemplateLiteral(["Ms. Puck Man"]))));
  horse("dark");
  outfits_uniform();
  setChoice(1387, 3);

  if (property_get("_meteorShowerUses") < 5 && !lib_have(template_string_$effect(familiarweight_templateObject20 || (familiarweight_templateObject20 = familiarweight_taggedTemplateLiteral(["Meteor Showered"])))) && property_get("_saberForceUses") < 5) {
    asmohccs_lib_advMacroAA(template_string_$location(familiarweight_templateObject21 || (familiarweight_templateObject21 = familiarweight_taggedTemplateLiteral(["The Dire Warren"]))), combat_Macro.skill($skill(familiarweight_templateObject22 || (familiarweight_templateObject22 = familiarweight_taggedTemplateLiteral(["Meteor Shower"])))).skill($skill(familiarweight_templateObject23 || (familiarweight_templateObject23 = familiarweight_taggedTemplateLiteral(["Use the Force"])))), 1, () => {
      (0,external_kolmafia_namespaceObject.visitUrl)("choice.php");
      (0,external_kolmafia_namespaceObject.runChoice)(3);
    });
    _set("_meteorShowerUses", 1 + property_get("_meteorShowerUses"));
  }
}

function testPrep() {
  famweightOutfit();
  if (lib_have(template_string_$item(familiarweight_templateObject24 || (familiarweight_templateObject24 = familiarweight_taggedTemplateLiteral(["silver face paint"]))))) asmohccs_lib_ensureEffect(template_string_$effect(familiarweight_templateObject25 || (familiarweight_templateObject25 = familiarweight_taggedTemplateLiteral(["Robot Friends"]))));
}

function familiarTest() {
  universalWeightBuffs();
  universalWeightEffects();
  familiarStuff();
  gearAndUncommonBuffs();
  takeAShower();
  testPrep();
  modTraceList("familiar weight");
  return 60 - Math.floor(((0,external_kolmafia_namespaceObject.familiarWeight)((0,external_kolmafia_namespaceObject.myFamiliar)()) + (0,external_kolmafia_namespaceObject.weightAdjustment)()) / 5);
}
;// CONCATENATED MODULE: ./src/hotres.ts
var hotres_templateObject, hotres_templateObject2, hotres_templateObject3, hotres_templateObject4, hotres_templateObject5, hotres_templateObject6, hotres_templateObject7, hotres_templateObject8, hotres_templateObject9, hotres_templateObject10, hotres_templateObject11, hotres_templateObject12, hotres_templateObject13, hotres_templateObject14, hotres_templateObject15, hotres_templateObject16, hotres_templateObject17, hotres_templateObject18, hotres_templateObject19, hotres_templateObject20, hotres_templateObject21, hotres_templateObject22, hotres_templateObject23, hotres_templateObject24, hotres_templateObject25, hotres_templateObject26, hotres_templateObject27, hotres_templateObject28;

function hotres_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var predictor = () => 60 - (0,external_kolmafia_namespaceObject.numericModifier)("hot resistance");

function castBuffs() {
  universalWeightBuffs();
  tryHead(template_string_$effect(hotres_templateObject || (hotres_templateObject = hotres_taggedTemplateLiteral(["Hot-Headed"]))));
  /*if (!have($item`tenderizing hammer`)) {
      buy(1, $item`tenderizing hammer`);
  }
  cliExecute("smash * ratty knitted cap");
  cliExecute("smash * red-hot sausage fork");
  cliExecute("smash * smoldering bagel punch");
  if (!have($effect`Sleazy Hands`)) {
      if (!have($item`lotion of sleaziness`)) create(1, $item`lotion of sleaziness`);
      if (have($item`lotion of sleaziness`)) use(1, $item`lotion of sleaziness`);
  }
  if (!have($effect`Flame-Retardant Trousers`) && have($item`hot powder`)) {
      use(1, $item`hot powder`);
  } */

  asmohccs_lib_ensureEffect(template_string_$effect(hotres_templateObject2 || (hotres_templateObject2 = hotres_taggedTemplateLiteral(["Elemental Saucesphere"]))));
  asmohccs_lib_ensureEffect(template_string_$effect(hotres_templateObject3 || (hotres_templateObject3 = hotres_taggedTemplateLiteral(["Astral Shell"]))));
  asmohccs_lib_ensureEffect(template_string_$effect(hotres_templateObject4 || (hotres_templateObject4 = hotres_taggedTemplateLiteral(["Feeling Peaceful"]))));

  if (lib_have(template_string_$item(hotres_templateObject5 || (hotres_templateObject5 = hotres_taggedTemplateLiteral(["scroll of Protection from Bad Stuff"]))))) {
    asmohccs_lib_ensureEffect(template_string_$effect(hotres_templateObject6 || (hotres_templateObject6 = hotres_taggedTemplateLiteral(["Protection from Bad Stuff"]))));
  }

  if (property_get("latteUnlocks").includes("chili") && property_get("_latteRefillsUsed") < 3) {
    var latte = "pumpkin chili ".concat(property_get("latteUnlocks").includes("carrot") ? "carrot " : "vanilla ");
    (0,external_kolmafia_namespaceObject.cliExecute)("latte refill ".concat(latte));
  }

  if (!lib_have(template_string_$item(hotres_templateObject7 || (hotres_templateObject7 = hotres_taggedTemplateLiteral(["meteorite guard"])))) && lib_have(template_string_$item(hotres_templateObject8 || (hotres_templateObject8 = hotres_taggedTemplateLiteral(["metal meteoroid"])))) && !property_get("latteUnlocks").includes("chili")) {
    (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(hotres_templateObject9 || (hotres_templateObject9 = hotres_taggedTemplateLiteral(["meteorite guard"]))));
  }

  if (!lib_have(template_string_$effect(hotres_templateObject10 || (hotres_templateObject10 = hotres_taggedTemplateLiteral(["Puzzle Champ"]))))) {
    (0,external_kolmafia_namespaceObject.cliExecute)("witchess");
  }
}

function thisFireIsOutOfControl() {
  //Don't need to spend a Map for High-Temp Mining Mask when we can Foam ourselves
  if (property_get("_saberForceUses") < 5 && !lib_have(template_string_$effect(hotres_templateObject11 || (hotres_templateObject11 = hotres_taggedTemplateLiteral(["Fireproof Foam Suit"]))))) {
    outfits_uniform();
    (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(hotres_templateObject12 || (hotres_templateObject12 = hotres_taggedTemplateLiteral(["off-hand"]))), template_string_$item(hotres_templateObject13 || (hotres_templateObject13 = hotres_taggedTemplateLiteral(["industrial fire extinguisher"]))));
    (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(hotres_templateObject14 || (hotres_templateObject14 = hotres_taggedTemplateLiteral(["Ms. Puck Man"]))));
    horse("dark");
    asmohccs_lib_advMacroAA(template_string_$location(hotres_templateObject15 || (hotres_templateObject15 = hotres_taggedTemplateLiteral(["Noob Cave"]))), combat_Macro.skill($skill(hotres_templateObject16 || (hotres_templateObject16 = hotres_taggedTemplateLiteral(["Fire Extinguisher: Foam Yourself"])))).skill($skill(hotres_templateObject17 || (hotres_templateObject17 = hotres_taggedTemplateLiteral(["Use the Force"])))), () => (0,external_kolmafia_namespaceObject.haveEffect)(template_string_$effect(hotres_templateObject18 || (hotres_templateObject18 = hotres_taggedTemplateLiteral(["Fireproof Foam Suit"])))) < 1 && property_get("_saberForceUses") < 3, () => {
      (0,external_kolmafia_namespaceObject.visitUrl)("choice.php");
      (0,external_kolmafia_namespaceObject.runChoice)(3);

      if (!(0,external_kolmafia_namespaceObject.haveEffect)(template_string_$effect(hotres_templateObject19 || (hotres_templateObject19 = hotres_taggedTemplateLiteral(["Fireproof Foam Suit"]))))) {
        throw "failed to Get Fireproof Foam Suit, please Help";
      }
    });
    _set("_fireExtinguisherCharge", 90);
  }
}

function moonTune() {
  // Tune moon sign to Platypus
  var desertAccessItem = (0,external_kolmafia_namespaceObject.knollAvailable)() ? template_string_$item(hotres_templateObject20 || (hotres_templateObject20 = hotres_taggedTemplateLiteral(["bitchin' meatcar"]))) : template_string_$item(hotres_templateObject21 || (hotres_templateObject21 = hotres_taggedTemplateLiteral(["Desert Bus pass"])));

  if (!lib_have(desertAccessItem)) {
    (0,external_kolmafia_namespaceObject.cliExecute)("acquire ".concat(desertAccessItem.name));
  }

  (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=desertbeach&action=db_nukehouse");

  if (!property_get("moonTuned")) {
    if (property_get("_campAwaySmileBuffs") === 0) {
      (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=campaway&action=campaway_sky");
    } // Unequip spoon.


    (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(hotres_templateObject22 || (hotres_templateObject22 = hotres_taggedTemplateLiteral(["acc1"]))), template_string_$item(hotres_templateObject23 || (hotres_templateObject23 = hotres_taggedTemplateLiteral(["Eight Days a Week Pill Keeper"]))));
    (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(hotres_templateObject24 || (hotres_templateObject24 = hotres_taggedTemplateLiteral(["acc2"]))), template_string_$item(hotres_templateObject25 || (hotres_templateObject25 = hotres_taggedTemplateLiteral(["Powerful Glove"]))));
    (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(hotres_templateObject26 || (hotres_templateObject26 = hotres_taggedTemplateLiteral(["acc3"]))), template_string_$item(hotres_templateObject27 || (hotres_templateObject27 = hotres_taggedTemplateLiteral(["Lil' Doctor\u2122 bag"])))); // Actually tune the moon.

    (0,external_kolmafia_namespaceObject.visitUrl)("inv_use.php?whichitem=10254&doit=96&whichsign=4");
  }
}

function hotres_testPrep() {
  hotresOutfit();
  horse("pale");
  var improvements = [() => asmohccs_lib_ensureEffect(template_string_$effect(hotres_templateObject28 || (hotres_templateObject28 = hotres_taggedTemplateLiteral(["Amazing"]))))];

  for (var _i = 0, _improvements = improvements; _i < _improvements.length; _i++) {
    var improvement = _improvements[_i];
    if (predictor() > 1) improvement();
  }
}

function hotTest() {
  castBuffs();
  thisFireIsOutOfControl();
  moonTune();
  hotres_testPrep();
  modTraceList("hot resistance");
  return predictor();
}
;// CONCATENATED MODULE: ./src/item.ts
var item_templateObject, item_templateObject2, item_templateObject3, item_templateObject4, item_templateObject5, item_templateObject6, item_templateObject7, item_templateObject8, item_templateObject9, item_templateObject10, item_templateObject11, item_templateObject12, item_templateObject13, item_templateObject14, item_templateObject15, item_templateObject16, item_templateObject17, item_templateObject18, item_templateObject19, item_templateObject20, item_templateObject21, item_templateObject22, item_templateObject23, item_templateObject24, item_templateObject25, item_templateObject26, item_templateObject27, item_templateObject28, item_templateObject29, item_templateObject30, item_templateObject31, item_templateObject32, item_templateObject33, item_templateObject34, item_templateObject35, item_templateObject36, item_templateObject37, item_templateObject38, item_templateObject39, item_templateObject40, item_templateObject41, item_templateObject42, item_templateObject43, item_templateObject44, item_templateObject45, item_templateObject46, item_templateObject47, item_templateObject48, item_templateObject49;

function item_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var item_predictor = () => 60 - Math.floor((0,external_kolmafia_namespaceObject.numericModifier)("item drop") / 30 + 0.001) - Math.floor((0,external_kolmafia_namespaceObject.numericModifier)("booze drop") / 15 + 0.001);

function item_castBuffs() {
  if (!lib_have(template_string_$effect(item_templateObject || (item_templateObject = item_taggedTemplateLiteral(["Synthesis: Collection"]))))) synthItem();
  (0,external_kolmafia_namespaceObject.cliExecute)("shrug ode");
  asmohccs_lib_ensureEffect(template_string_$effect(item_templateObject2 || (item_templateObject2 = item_taggedTemplateLiteral(["Fat Leon's Phat Loot Lyric"]))));
  asmohccs_lib_ensureEffect(template_string_$effect(item_templateObject3 || (item_templateObject3 = item_taggedTemplateLiteral(["The Spirit of Taking"]))));
  asmohccs_lib_ensureEffect(template_string_$effect(item_templateObject4 || (item_templateObject4 = item_taggedTemplateLiteral(["items.enh"]))));
  asmohccs_lib_ensureEffect(template_string_$effect(item_templateObject5 || (item_templateObject5 = item_taggedTemplateLiteral(["Singer's Faithful Ocelot"]))));

  if ((0,external_kolmafia_namespaceObject.getWorkshed)() === template_string_$item(item_templateObject6 || (item_templateObject6 = item_taggedTemplateLiteral(["Asdon Martin keyfob"]))) && !lib_have(template_string_$effect(item_templateObject7 || (item_templateObject7 = item_taggedTemplateLiteral(["Driving Observantly"]))))) {
    if ((0,external_kolmafia_namespaceObject.getFuel)() < 37) fuelUp();
    (0,external_kolmafia_namespaceObject.cliExecute)("asdonmartin drive observantly");
  }

  if (!lib_have(template_string_$effect(item_templateObject8 || (item_templateObject8 = item_taggedTemplateLiteral(["I See Everything Thrice!"]))))) {
    if (!lib_have(template_string_$item(item_templateObject9 || (item_templateObject9 = item_taggedTemplateLiteral(["government"]))))) {
      if (!lib_have(template_string_$item(item_templateObject10 || (item_templateObject10 = item_taggedTemplateLiteral(["anticheese"]))))) {
        (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=desertbeach&action=db_nukehouse");
      }

      if (lib_have(template_string_$item(item_templateObject11 || (item_templateObject11 = item_taggedTemplateLiteral(["government cheese"]))))) {
        (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(item_templateObject12 || (item_templateObject12 = item_taggedTemplateLiteral(["government"]))));
      }
    }

    if (lib_have(template_string_$item(item_templateObject13 || (item_templateObject13 = item_taggedTemplateLiteral(["government"]))))) {
      (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(item_templateObject14 || (item_templateObject14 = item_taggedTemplateLiteral(["government"]))));
    }
  }

  if ((0,external_kolmafia_namespaceObject.myClass)() === template_string_$class(item_templateObject15 || (item_templateObject15 = item_taggedTemplateLiteral(["Pastamancer"]))) && !property_get("_barrelPrayer")) {
    (0,external_kolmafia_namespaceObject.cliExecute)("barrelprayer buff");
  }

  if (lib_have(template_string_$item(item_templateObject16 || (item_templateObject16 = item_taggedTemplateLiteral(["lavender candy heart"]))))) asmohccs_lib_ensureEffect(template_string_$effect(item_templateObject17 || (item_templateObject17 = item_taggedTemplateLiteral(["Heart of Lavender"]))));
}

function batForm() {
  if (property_get("_latteRefillsUsed") < 3 && (0,external_kolmafia_namespaceObject.numericModifier)(template_string_$item(item_templateObject18 || (item_templateObject18 = item_taggedTemplateLiteral(["latte lovers member's mug"]))), "Item Drop") < 20) {
    var latte = "pumpkin ".concat(property_get("latteUnlocks").includes("carrot") ? "carrot " : "vanilla ").concat(property_get("latteUnlocks").includes("butternut") ? "butternut" : "cinnamon");

    if (latte !== "") {
      (0,external_kolmafia_namespaceObject.cliExecute)("latte refill ".concat(latte));
    }
  }

  if (!lib_have(template_string_$effect(item_templateObject19 || (item_templateObject19 = item_taggedTemplateLiteral(["Bat-Adjacent Form"]))))) {
    var run = combat_Macro.skill($skill(item_templateObject20 || (item_templateObject20 = item_taggedTemplateLiteral(["Become a Bat"]))));

    if (!property_get("_latteBanishUsed")) {
      asmohccs_lib_useDefaultFamiliar(false);
      (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(item_templateObject21 || (item_templateObject21 = item_taggedTemplateLiteral(["off-hand"]))), template_string_$item(item_templateObject22 || (item_templateObject22 = item_taggedTemplateLiteral(["latte lovers member's mug"]))));
      (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(item_templateObject23 || (item_templateObject23 = item_taggedTemplateLiteral(["back"]))), template_string_$item(item_templateObject24 || (item_templateObject24 = item_taggedTemplateLiteral(["vampyric cloake"]))));
      run.skill($skill(item_templateObject25 || (item_templateObject25 = item_taggedTemplateLiteral(["Throw Latte on Opponent"]))));
    } else {
      (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(item_templateObject26 || (item_templateObject26 = item_taggedTemplateLiteral(["Frumious Bandersnatch"]))));
      asmohccs_lib_ensureEffect(template_string_$effect(item_templateObject27 || (item_templateObject27 = item_taggedTemplateLiteral(["Ode to Booze"]))));
      run.step("runaway");
    }

    asmohccs_lib_advMacroAA(template_string_$location(item_templateObject28 || (item_templateObject28 = item_taggedTemplateLiteral(["The Dire Warren"]))), run);
  }

  if (property_get("_latteRefillsUsed") < 3 && (0,external_kolmafia_namespaceObject.numericModifier)(template_string_$item(item_templateObject29 || (item_templateObject29 = item_taggedTemplateLiteral(["latte lovers member's mug"]))), "Item Drop") < 20) {
    var _latte = "pumpkin ".concat(property_get("latteUnlocks").includes("carrot") ? "carrot" : "vanilla", " ").concat(property_get("latteUnlocks").includes("butternut") ? "butternut" : "cinnamon");

    if (_latte !== "") {
      (0,external_kolmafia_namespaceObject.cliExecute)("latte refill ".concat(_latte));
    }
  }
}

function pirateDNA() {
  // get pirate DNA and make a gene tonic
  if (property_get("dnaSyringe") !== $phylum(item_templateObject30 || (item_templateObject30 = item_taggedTemplateLiteral(["pirate"]))) && (0,external_kolmafia_namespaceObject.haveEffect)(template_string_$effect(item_templateObject31 || (item_templateObject31 = item_taggedTemplateLiteral(["Human-Pirate Hybrid"])))) === 0) {
    (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(item_templateObject32 || (item_templateObject32 = item_taggedTemplateLiteral(["acc1"]))), template_string_$item(item_templateObject33 || (item_templateObject33 = item_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"]))));
    asmohccs_lib_advMacroAA(template_string_$location(item_templateObject34 || (item_templateObject34 = item_taggedTemplateLiteral(["Pirates of the Garbage Barges"]))), combat_Macro.item(template_string_$item(item_templateObject35 || (item_templateObject35 = item_taggedTemplateLiteral(["DNA extraction syringe"])))).skill($skill(item_templateObject36 || (item_templateObject36 = item_taggedTemplateLiteral(["Snokebomb"])))), () => {
      return property_get("dnaSyringe") !== $phylum(item_templateObject37 || (item_templateObject37 = item_taggedTemplateLiteral(["pirate"])));
    });
    geneTonic($phylum(item_templateObject38 || (item_templateObject38 = item_taggedTemplateLiteral(["pirate"]))));
    asmohccs_lib_ensureEffect(template_string_$effect(item_templateObject39 || (item_templateObject39 = item_taggedTemplateLiteral(["Human-Pirate Hybrid"]))));
  } else {
    throw "Something went wrong getting pirate DNA.";
  }
}

function item_testPrep() {
  if (!property_get("_steelyEyedSquintUsed")) {
    asmohccs_lib_ensureEffect(template_string_$effect(item_templateObject40 || (item_templateObject40 = item_taggedTemplateLiteral(["Steely-Eyed Squint"]))));
  }

  if (!(0,external_kolmafia_namespaceObject.haveEffect)(template_string_$effect(item_templateObject41 || (item_templateObject41 = item_taggedTemplateLiteral(["Feeling Lost"]))))) {
    asmohccs_lib_ensureEffect(template_string_$effect(item_templateObject42 || (item_templateObject42 = item_taggedTemplateLiteral(["Feeling Lost"]))));
  }

  (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(item_templateObject43 || (item_templateObject43 = item_taggedTemplateLiteral(["Trick-or-Treating Tot"]))));
  itemOutfit();

  if ((0,external_kolmafia_namespaceObject.numericModifier)(template_string_$item(item_templateObject44 || (item_templateObject44 = item_taggedTemplateLiteral(["latte lovers member's mug"]))), "Item Drop") === 20) {
    (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(item_templateObject45 || (item_templateObject45 = item_taggedTemplateLiteral(["offhand"]))), template_string_$item(item_templateObject46 || (item_templateObject46 = item_taggedTemplateLiteral(["latte lovers member's mug"]))));
  }

  if (item_predictor() > 1) (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(item_templateObject47 || (item_templateObject47 = item_taggedTemplateLiteral(["weapon"]))), template_string_$item(item_templateObject48 || (item_templateObject48 = item_taggedTemplateLiteral(["oversized sparkler"]))));
  if (item_predictor() > 1) asmohccs_lib_ensureEffect(template_string_$effect(item_templateObject49 || (item_templateObject49 = item_taggedTemplateLiteral(["Nearly All-Natural"]))));
}

function itemTest() {
  item_castBuffs();
  pirateDNA();
  batForm();
  item_testPrep();
  if (item_predictor() > 1) throw "Failed to cap item";
  modTraceList("item drop");
  modTraceList("booze drop");
  return item_predictor();
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2017/TunnelOfLove.js
var TunnelOfLove_templateObject, TunnelOfLove_templateObject2;

function TunnelOfLove_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






function TunnelOfLove_have() {
  return get("loveTunnelAvailable");
}
function isUsed() {
  return get("_loveTunnelUsed");
}
function haveLovEnamorang() {
  return lib_have(template_string_$item(TunnelOfLove_templateObject || (TunnelOfLove_templateObject = TunnelOfLove_taggedTemplateLiteral(["LOV Enamorang"]))));
}
function getLovEnamorangUses() {
  return property_get("_enamorangs");
}
function couldUseLoveEnamorang() {
  return !haveWandererCounter(Wanderer.Enamorang) && getLovEnamorangUses() < 3 && haveLovEnamorang();
}
function getLovEnamorangMonster() {
  return property_get("enamorangMonster");
}
var LovEnamorang = new Copier(() => couldUseLoveEnamorang(), null, () => couldUseLoveEnamorang(), () => getLovEnamorangMonster());

function equipmentChoice(equipment) {
  switch (equipment) {
    case "LOV Eardigan":
      return 1;

    case "LOV Epaulettes":
      return 2;

    case "LOV Earring":
      return 3;
  }
}

function effectChoice(effect) {
  switch (effect) {
    case "Lovebotamy":
      return 1;

    case "Open Heart Surgery":
      return 2;

    case "Wandering Eye Surgery":
      return 3;
  }
}

function extraChoice(extra) {
  switch (extra) {
    case "LOV Enamorang":
      return 1;

    case "LOV Emotionizer":
      return 2;

    case "LOV Extraterrestrial Chocolate":
      return 3;

    case "LOV Echinacea Bouquet":
      return 4;

    case "LOV Elephant":
      return 5;

    case "toast":
      return 6;

    case null:
      return 7;
  }
}
/**
 * Fight all LOV monsters and get buffs/equipment.
 * @param equipment Equipment to take from LOV.
 * @param effect Effect to take from LOV.
 * @param extra Extra item to take from LOV.
 */


function fightAll(equipment, effect, extra) {
  _set("choiceAdventure1222", 1); // Entrance

  _set("choiceAdventure1223", 1); // Fight LOV Enforcer

  _set("choiceAdventure1224", equipmentChoice(equipment));
  _set("choiceAdventure1225", 1); // Fight LOV Engineer

  _set("choiceAdventure1226", effectChoice(effect));
  _set("choiceAdventure1227", 1); // Fight LOV Equivocator

  _set("choiceAdventure1228", extraChoice(extra));
  (0,external_kolmafia_namespaceObject.adv1)(template_string_$location(TunnelOfLove_templateObject2 || (TunnelOfLove_templateObject2 = TunnelOfLove_taggedTemplateLiteral(["The Tunnel of L.O.V.E."]))), 0, "");
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2015/ChateauMantegna.js
var ChateauMantegna_templateObject, ChateauMantegna_templateObject2, ChateauMantegna_templateObject3, ChateauMantegna_templateObject4, ChateauMantegna_templateObject5, ChateauMantegna_templateObject6;

function ChateauMantegna_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




function ChateauMantegna_have() {
  return get("chateauAvailable");
}
function paintingMonster() {
  return get("chateauMonster");
}
function paintingFought() {
  return get("_chateauMonsterFought");
}
function fightPainting() {
  visitUrl("place.php?whichplace=chateau&action=chateau_painting", false);
  return runCombat();
}
var desks = template_string_$items(ChateauMantegna_templateObject || (ChateauMantegna_templateObject = ChateauMantegna_taggedTemplateLiteral(["fancy stationery set, Swiss piggy bank, continental juice bar"])));
var ceilings = template_string_$items(ChateauMantegna_templateObject2 || (ChateauMantegna_templateObject2 = ChateauMantegna_taggedTemplateLiteral(["antler chandelier, ceiling fan, artificial skylight"])));
var nightstands = template_string_$items(ChateauMantegna_templateObject3 || (ChateauMantegna_templateObject3 = ChateauMantegna_taggedTemplateLiteral(["foreign language tapes, bowl of potpourri, electric muscle stimulator"])));
function getDesk() {
  return desks.find(desk => Object.keys(getChateau()).includes(desk.name)) || $item(ChateauMantegna_templateObject4 || (ChateauMantegna_templateObject4 = ChateauMantegna_taggedTemplateLiteral(["none"])));
}
function getCeiling() {
  return ceilings.find(ceiling => Object.keys(getChateau()).includes(ceiling.name)) || $item(ChateauMantegna_templateObject5 || (ChateauMantegna_templateObject5 = ChateauMantegna_taggedTemplateLiteral(["none"])));
}
function getNightstand() {
  return nightstands.find(nightstand => Object.keys((0,external_kolmafia_namespaceObject.getChateau)()).includes(nightstand.name)) || template_string_$item(ChateauMantegna_templateObject6 || (ChateauMantegna_templateObject6 = ChateauMantegna_taggedTemplateLiteral(["none"])));
}
function changeDesk(desk) {
  if (getDesk() === desk) return true;
  if (!desks.includes(desk)) return false;
  buy(desk);
  return getDesk() === desk;
}
function changeCeiling(ceiling) {
  if (getCeiling() === ceiling) return true;
  if (!ceilings.includes(ceiling)) return false;
  buy(ceiling);
  return getCeiling() === ceiling;
}
function changeNightstand(nightstand) {
  if (getNightstand() === nightstand) return true;
  if (!nightstands.includes(nightstand)) return false;
  (0,external_kolmafia_namespaceObject.buy)(nightstand);
  return getNightstand() === nightstand;
}
;// CONCATENATED MODULE: ./src/level.ts
var level_templateObject, level_templateObject2, level_templateObject3, level_templateObject4, level_templateObject5, level_templateObject6, level_templateObject7, level_templateObject8, level_templateObject9, level_templateObject10, level_templateObject11, level_templateObject12, level_templateObject13, level_templateObject14, level_templateObject15, level_templateObject16, level_templateObject17, level_templateObject18, level_templateObject19, level_templateObject20, level_templateObject21, level_templateObject22, level_templateObject23, level_templateObject24, level_templateObject25, level_templateObject26, level_templateObject27, level_templateObject28, level_templateObject29, level_templateObject30, level_templateObject31, level_templateObject32, level_templateObject33, level_templateObject34, level_templateObject35, level_templateObject36, level_templateObject37, level_templateObject38, level_templateObject39, level_templateObject40, level_templateObject41, level_templateObject42, level_templateObject43, level_templateObject44, level_templateObject45, level_templateObject46, level_templateObject47, level_templateObject48, level_templateObject49, level_templateObject50, level_templateObject51, level_templateObject52, level_templateObject53, level_templateObject54, level_templateObject55, level_templateObject56, level_templateObject57, level_templateObject58, level_templateObject59, level_templateObject60, level_templateObject61, level_templateObject62, level_templateObject63, level_templateObject64, level_templateObject65, level_templateObject66, level_templateObject67, level_templateObject68, level_templateObject69, level_templateObject70, level_templateObject71, level_templateObject72, level_templateObject73, level_templateObject74, level_templateObject75, level_templateObject76, level_templateObject77, level_templateObject78, level_templateObject79, level_templateObject80, level_templateObject81, level_templateObject82, level_templateObject83, level_templateObject84, level_templateObject85, level_templateObject86, level_templateObject87, level_templateObject88, level_templateObject89, level_templateObject90, level_templateObject91, level_templateObject92, level_templateObject93, level_templateObject94, level_templateObject95, level_templateObject96, level_templateObject97, level_templateObject98, level_templateObject99, level_templateObject100, level_templateObject101, level_templateObject102, level_templateObject103, level_templateObject104, level_templateObject105, level_templateObject106, level_templateObject107, level_templateObject108, level_templateObject109, level_templateObject110, level_templateObject111, level_templateObject112, level_templateObject113, level_templateObject114, level_templateObject115, level_templateObject116, level_templateObject117, level_templateObject118, level_templateObject119, level_templateObject120, level_templateObject121, level_templateObject122, level_templateObject123, level_templateObject124, level_templateObject125, level_templateObject126, level_templateObject127, level_templateObject128, level_templateObject129, level_templateObject130, level_templateObject131, level_templateObject132, level_templateObject133, level_templateObject134, level_templateObject135, level_templateObject136, level_templateObject137, level_templateObject138, level_templateObject139, level_templateObject140, level_templateObject141, level_templateObject142, level_templateObject143, level_templateObject144, level_templateObject145, level_templateObject146, level_templateObject147, level_templateObject148, level_templateObject149, level_templateObject150, level_templateObject151, level_templateObject152, level_templateObject153, level_templateObject154, level_templateObject155, level_templateObject156, level_templateObject157, level_templateObject158, level_templateObject159, level_templateObject160, level_templateObject161, level_templateObject162, level_templateObject163, level_templateObject164, level_templateObject165, level_templateObject166, level_templateObject167, level_templateObject168, level_templateObject169, level_templateObject170, level_templateObject171, level_templateObject172, level_templateObject173, level_templateObject174, level_templateObject175, level_templateObject176, level_templateObject177, level_templateObject178, level_templateObject179, level_templateObject180, level_templateObject181, level_templateObject182, level_templateObject183, level_templateObject184, level_templateObject185, level_templateObject186, level_templateObject187, level_templateObject188, level_templateObject189, level_templateObject190, level_templateObject191, level_templateObject192;

function level_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








function initialExp() {
  if (!lib_have(template_string_$effect(level_templateObject || (level_templateObject = level_taggedTemplateLiteral(["That's Just Cloud-Talk, Man"]))))) {
    (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=campaway&action=campaway_sky");
  }

  if ((0,external_kolmafia_namespaceObject.myGardenType)() === "peppermint") {
    (0,external_kolmafia_namespaceObject.cliExecute)("garden pick");
  } else {
    (0,external_kolmafia_namespaceObject.print)("WARNING: This script is built for peppermint garden. Switch gardens or find other candy.");
  }

  if (inMysClass()) {
    asmohccs_lib_ensureEffect(template_string_$effect(level_templateObject2 || (level_templateObject2 = level_taggedTemplateLiteral(["Inscrutable Gaze"]))));
    asmohccs_lib_ensureEffect(template_string_$effect(level_templateObject3 || (level_templateObject3 = level_taggedTemplateLiteral(["Thaumodynamic"]))));
    if (!lib_have(template_string_$effect(level_templateObject4 || (level_templateObject4 = level_taggedTemplateLiteral(["Synthesis: Learning"]))))) synthMysExp();
    (0,external_kolmafia_namespaceObject.equip)(template_string_$item(level_templateObject5 || (level_templateObject5 = level_taggedTemplateLiteral(["LOV Epaulettes"]))), template_string_$slot(level_templateObject6 || (level_templateObject6 = level_taggedTemplateLiteral(["back"]))));
  } else if (inMusClass()) {
    asmohccs_lib_ensureEffect(template_string_$effect(level_templateObject7 || (level_templateObject7 = level_taggedTemplateLiteral(["Muscle Unbound"]))));
    if (!lib_have(template_string_$effect(level_templateObject8 || (level_templateObject8 = level_taggedTemplateLiteral(["Synthesis: Movement"]))))) synthMusExp();
    (0,external_kolmafia_namespaceObject.equip)(template_string_$item(level_templateObject9 || (level_templateObject9 = level_taggedTemplateLiteral(["LOV Eardigan"]))), template_string_$slot(level_templateObject10 || (level_templateObject10 = level_taggedTemplateLiteral(["shirt"]))));
  } else if (inMoxClass()) {
    asmohccs_lib_ensureEffect(template_string_$effect(level_templateObject11 || (level_templateObject11 = level_taggedTemplateLiteral(["So Fresh and So Clean"]))));
    if (!lib_have(template_string_$effect(level_templateObject12 || (level_templateObject12 = level_taggedTemplateLiteral(["Synthesis: Style"]))))) synthMoxExp();
    (0,external_kolmafia_namespaceObject.equip)(template_string_$item(level_templateObject13 || (level_templateObject13 = level_taggedTemplateLiteral(["LOV Earrings"]))), template_string_$slot(level_templateObject14 || (level_templateObject14 = level_taggedTemplateLiteral(["acc1"]))));
  }

  (0,external_kolmafia_namespaceObject.equip)(template_string_$item(level_templateObject15 || (level_templateObject15 = level_taggedTemplateLiteral(["familiar scrapbook"]))), template_string_$slot(level_templateObject16 || (level_templateObject16 = level_taggedTemplateLiteral(["off-hand"]))));

  if (lib_have(template_string_$item(level_templateObject17 || (level_templateObject17 = level_taggedTemplateLiteral(["white candy heart"]))))) {
    asmohccs_lib_ensureEffect(template_string_$effect(level_templateObject18 || (level_templateObject18 = level_taggedTemplateLiteral(["Heart of White"]))));
  }

  if ((0,external_kolmafia_namespaceObject.availableAmount)(template_string_$item(level_templateObject19 || (level_templateObject19 = level_taggedTemplateLiteral(["a ten-percent bonus"]))))) {
    (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(level_templateObject20 || (level_templateObject20 = level_taggedTemplateLiteral(["a ten-percent bonus"]))));
  }

  if (inMysClass()) {
    (0,external_kolmafia_namespaceObject.cliExecute)("bastille myst brutalist");
  } else if (inMusClass()) {
    (0,external_kolmafia_namespaceObject.cliExecute)("bastille muscle brutalist");
  } else if (inMoxClass()) {
    (0,external_kolmafia_namespaceObject.cliExecute)("bastille moxie brutalist");
  }
}

function buffMainstat() {
  var lovePotion = template_string_$item(level_templateObject21 || (level_templateObject21 = level_taggedTemplateLiteral(["Love Potion #0"])));
  var loveEffect = template_string_$effect(level_templateObject22 || (level_templateObject22 = level_taggedTemplateLiteral(["Tainted Love Potion"])));
  tryHead(template_string_$effect(level_templateObject23 || (level_templateObject23 = level_taggedTemplateLiteral(["You Learned Something Maybe!"]))));
  tryHead(template_string_$effect(level_templateObject24 || (level_templateObject24 = level_taggedTemplateLiteral(["Do I Know You From Somewhere?"]))));

  if (inMysClass()) {
    tryHead(template_string_$effect(level_templateObject25 || (level_templateObject25 = level_taggedTemplateLiteral(["We're All Made of Starfish"]))));
    asmohccs_lib_ensureEffect(template_string_$effect(level_templateObject26 || (level_templateObject26 = level_taggedTemplateLiteral(["Uncucumbered"]))));
    asmohccs_lib_ensureEffect(template_string_$effect(level_templateObject27 || (level_templateObject27 = level_taggedTemplateLiteral(["Glittering Eyelashes"]))));
    if (!lib_have(template_string_$effect(level_templateObject28 || (level_templateObject28 = level_taggedTemplateLiteral(["Synthesis: Smart"]))))) synthMyst();

    if (!lib_have(loveEffect)) {
      if (!lib_have(lovePotion)) {
        (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(level_templateObject29 || (level_templateObject29 = level_taggedTemplateLiteral(["Love Mixology"]))));
      }

      (0,external_kolmafia_namespaceObject.visitUrl)("desc_effect.php?whicheffect=".concat(loveEffect.descid));

      if ((0,external_kolmafia_namespaceObject.numericModifier)(loveEffect, "mysticality") > 10 && (0,external_kolmafia_namespaceObject.numericModifier)(loveEffect, "muscle") > -30 && (0,external_kolmafia_namespaceObject.numericModifier)(loveEffect, "moxie") > -30 && (0,external_kolmafia_namespaceObject.numericModifier)(loveEffect, "maximum hp percent") > -0.001) {
        (0,external_kolmafia_namespaceObject.use)(1, lovePotion);
      }
    }
  } else if (inMusClass()) {
    tryHead(template_string_$effect(level_templateObject30 || (level_templateObject30 = level_taggedTemplateLiteral(["Lack of Body-Building"]))));
    asmohccs_lib_ensureEffect(template_string_$effect(level_templateObject31 || (level_templateObject31 = level_taggedTemplateLiteral(["Muddled"]))));
    asmohccs_lib_ensureEffect(template_string_$effect(level_templateObject32 || (level_templateObject32 = level_taggedTemplateLiteral(["Quiet Determination"]))));

    if (!lib_have(template_string_$effect(level_templateObject33 || (level_templateObject33 = level_taggedTemplateLiteral(["Go Get 'Em, Tiger!"]))))) {
      (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(level_templateObject34 || (level_templateObject34 = level_taggedTemplateLiteral(["Ben-Gal\u2122 Balm"]))));
      (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(level_templateObject35 || (level_templateObject35 = level_taggedTemplateLiteral(["Ben-Gal\u2122 Balm"]))));
    }

    if (!lib_have(template_string_$effect(level_templateObject36 || (level_templateObject36 = level_taggedTemplateLiteral(["Synthesis: Strong"]))))) synthMus();

    if (!lib_have(loveEffect)) {
      if (!lib_have(lovePotion)) {
        (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(level_templateObject37 || (level_templateObject37 = level_taggedTemplateLiteral(["Love Mixology"]))));
      }

      (0,external_kolmafia_namespaceObject.visitUrl)("desc_effect.php?whicheffect=".concat(loveEffect.descid));

      if ((0,external_kolmafia_namespaceObject.numericModifier)(loveEffect, "mysticality") > -30 && (0,external_kolmafia_namespaceObject.numericModifier)(loveEffect, "muscle") > 10 && (0,external_kolmafia_namespaceObject.numericModifier)(loveEffect, "moxie") > -30 && (0,external_kolmafia_namespaceObject.numericModifier)(loveEffect, "maximum hp percent") > -0.001) {
        (0,external_kolmafia_namespaceObject.use)(1, lovePotion);
      }
    }
  } else if (inMoxClass()) {
    tryHead(template_string_$effect(level_templateObject38 || (level_templateObject38 = level_taggedTemplateLiteral(["Pomp & Circumsands"]))));
    asmohccs_lib_ensureEffect(template_string_$effect(level_templateObject39 || (level_templateObject39 = level_taggedTemplateLiteral(["Ten out of Ten"]))));
    asmohccs_lib_ensureEffect(template_string_$effect(level_templateObject40 || (level_templateObject40 = level_taggedTemplateLiteral(["Quiet Desperation"]))));

    if (!lib_have(template_string_$effect(level_templateObject41 || (level_templateObject41 = level_taggedTemplateLiteral(["Unrunnable Face"]))))) {
      tryUse(1, template_string_$item(level_templateObject42 || (level_templateObject42 = level_taggedTemplateLiteral(["runproof mascara"]))));
    }

    if (!lib_have(template_string_$effect(level_templateObject43 || (level_templateObject43 = level_taggedTemplateLiteral(["Synthesis: Cool"]))))) synthMox();

    if (!lib_have(loveEffect)) {
      if (!lib_have(lovePotion)) {
        (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(level_templateObject44 || (level_templateObject44 = level_taggedTemplateLiteral(["Love Mixology"]))));
      }

      (0,external_kolmafia_namespaceObject.visitUrl)("desc_effect.php?whicheffect=".concat(loveEffect.descid));

      if ((0,external_kolmafia_namespaceObject.numericModifier)(loveEffect, "mysticality") > -30 && (0,external_kolmafia_namespaceObject.numericModifier)(loveEffect, "muscle") > -30 && (0,external_kolmafia_namespaceObject.numericModifier)(loveEffect, "moxie") > 10 && (0,external_kolmafia_namespaceObject.numericModifier)(loveEffect, "maximum hp percent") > -0.001) {
        (0,external_kolmafia_namespaceObject.use)(1, lovePotion);
      }
    }
  }

  if (!property_get("_lyleFavored")) asmohccs_lib_ensureEffect(template_string_$effect(level_templateObject45 || (level_templateObject45 = level_taggedTemplateLiteral(["Favored by Lyle"]))));
  if (!property_get("telescopeLookedHigh")) asmohccs_lib_ensureEffect(template_string_$effect(level_templateObject46 || (level_templateObject46 = level_taggedTemplateLiteral(["Starry-Eyed"]))));
  asmohccs_lib_ensureEffect(template_string_$effect(level_templateObject47 || (level_templateObject47 = level_taggedTemplateLiteral(["Broad-Spectrum Vaccine"]))));

  if (!property_get("_streamsCrossed")) {
    (0,external_kolmafia_namespaceObject.cliExecute)("crossstreams");
  }

  (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(level_templateObject48 || (level_templateObject48 = level_taggedTemplateLiteral(["acc3"]))), template_string_$item(level_templateObject49 || (level_templateObject49 = level_taggedTemplateLiteral(["Powerful Glove"]))));
  asmohccs_lib_ensureEffect(template_string_$effect(level_templateObject50 || (level_templateObject50 = level_taggedTemplateLiteral(["Triple-Sized"]))));
  asmohccs_lib_ensureEffect(template_string_$effect(level_templateObject51 || (level_templateObject51 = level_taggedTemplateLiteral(["Feeling Excited"]))));
  if (!property_get("_favoriteBirdVisited")) (0,external_kolmafia_namespaceObject.useSkill)($skill(level_templateObject52 || (level_templateObject52 = level_taggedTemplateLiteral(["Visit your Favorite Bird"]))));
  if (lib_have(template_string_$item(level_templateObject53 || (level_templateObject53 = level_taggedTemplateLiteral(["votive of confidence"]))))) (0,external_kolmafia_namespaceObject.use)(template_string_$item(level_templateObject54 || (level_templateObject54 = level_taggedTemplateLiteral(["votive of confidence"]))));

  if (!property_get("_freePillKeeperUsed")) {
    (0,external_kolmafia_namespaceObject.cliExecute)("pillkeeper familiar");
  }
}

function level_castBuffs() {
  (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(level_templateObject55 || (level_templateObject55 = level_taggedTemplateLiteral(["Left-Hand Man"]))));
  (0,external_kolmafia_namespaceObject.maximize)("mp", false);

  if (property_get("_sausagesEaten") === 0) {
    (0,external_kolmafia_namespaceObject.cliExecute)("eat 1 magic sausage");
    (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(level_templateObject56 || (level_templateObject56 = level_taggedTemplateLiteral(["Advanced Saucecrafting"]))));
    (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(level_templateObject57 || (level_templateObject57 = level_taggedTemplateLiteral(["Advanced Cocktailcrafting"]))));
    (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(level_templateObject58 || (level_templateObject58 = level_taggedTemplateLiteral(["Acquire Rhinestones"]))));
    (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(level_templateObject59 || (level_templateObject59 = level_taggedTemplateLiteral(["Prevent Scurvy and Sobriety"]))));
  }

  if (!lib_have(template_string_$item(level_templateObject60 || (level_templateObject60 = level_taggedTemplateLiteral(["turtle totem"]))))) (0,external_kolmafia_namespaceObject.cliExecute)("acquire turtle totem");
  if (!lib_have(template_string_$item(level_templateObject61 || (level_templateObject61 = level_taggedTemplateLiteral(["saucepan"]))))) (0,external_kolmafia_namespaceObject.cliExecute)("acquire saucepan");
  $skills(level_templateObject62 || (level_templateObject62 = level_taggedTemplateLiteral(["The Magical Mojomuscular Melody, \n    Stevedave's Shanty of Superiority, Fat Leon's Phat Loot Lyric, \n     Polka of Plenty, Leash of Linguini, Empathy of the Newt, \n     Blood Bond, Blood Bubble, Song of Bravado, Get Big"]))).forEach(buff => {
    if (!lib_have((0,external_kolmafia_namespaceObject.toEffect)(buff))) {
      if ((0,external_kolmafia_namespaceObject.myMp)() < (0,external_kolmafia_namespaceObject.mpCost)(buff)) {
        if ((0,external_kolmafia_namespaceObject.totalFreeRests)() > property_get("timesRested")) {
          (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=chateau&action=chateau_restbox");
        } else if ((0,external_kolmafia_namespaceObject.availableAmount)(template_string_$item(level_templateObject63 || (level_templateObject63 = level_taggedTemplateLiteral(["psychokinetic energy blob"])))) >= 1) {
          (0,external_kolmafia_namespaceObject.use)(2, template_string_$item(level_templateObject64 || (level_templateObject64 = level_taggedTemplateLiteral(["psychokinetic energy blob"]))));
        } else {
          (0,external_kolmafia_namespaceObject.eat)(1, template_string_$item(level_templateObject65 || (level_templateObject65 = level_taggedTemplateLiteral(["magical sausage"]))));
        }
      }

      (0,external_kolmafia_namespaceObject.useSkill)(1, buff);
    }
  });
  universalWeightEffects();
}

function getYoked() {
  uniform();
  useFamiliar($familiar(level_templateObject66 || (level_templateObject66 = level_taggedTemplateLiteral(["Ghost of Crimbo Carols"]))));

  if (get("snojoSetting") === "NONE") {
    visitUrl("place.php?whichplace=snojo&action=snojo_controller");
    runChoice(2);
  }

  heal();
  advMacroAA($location(level_templateObject67 || (level_templateObject67 = level_taggedTemplateLiteral(["The X-32-F Combat Training Snowman"]))), Macro.step(delevel).attack().repeat(), () => {
    return !have($effect(level_templateObject68 || (level_templateObject68 = level_taggedTemplateLiteral(["Holiday Yoked"]))));
  });
}

function witchGhostAgent() {
  if (asmohccs_lib_questStep("questM25Armorer") === -1) {
    (0,external_kolmafia_namespaceObject.visitUrl)("shop.php?whichshop=armory&action=talk");
    (0,external_kolmafia_namespaceObject.runChoice)(1);
  }

  outfits_uniform();
  (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(level_templateObject69 || (level_templateObject69 = level_taggedTemplateLiteral(["back"]))), template_string_$item(level_templateObject70 || (level_templateObject70 = level_taggedTemplateLiteral(["protonic accelerator pack"]))));
  (0,external_kolmafia_namespaceObject.cliExecute)("fold makeshift garbage shirt");
  (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(level_templateObject71 || (level_templateObject71 = level_taggedTemplateLiteral(["shirt"]))), template_string_$item(level_templateObject72 || (level_templateObject72 = level_taggedTemplateLiteral(["makeshift garbage shirt"]))));
  asmohccs_lib_heal();
  asmohccs_lib_useDefaultFamiliar();
  ensureMp(100);
  combat_Macro.skill("curse of weaksauce").skill("micrometeor").attack().repeat().setAutoAttack();

  if (!lib_have(template_string_$item(level_templateObject73 || (level_templateObject73 = level_taggedTemplateLiteral(["battle broom"]))))) {
    fightPiece($monster(level_templateObject74 || (level_templateObject74 = level_taggedTemplateLiteral(["Witchess Witch"]))));
  }

  (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(level_templateObject75 || (level_templateObject75 = level_taggedTemplateLiteral(["acc3"]))), template_string_$item(level_templateObject76 || (level_templateObject76 = level_taggedTemplateLiteral(["battle broom"]))));
  var ghostLocation = property_get("ghostLocation");

  if (ghostLocation) {
    //moved acquiring portscan into the if to stop it doubling up on portscan if need to rerun the script.
    educate($skill(level_templateObject77 || (level_templateObject77 = level_taggedTemplateLiteral(["Portscan"]))));
    (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(level_templateObject78 || (level_templateObject78 = level_taggedTemplateLiteral(["off-hand"]))), template_string_$item(level_templateObject79 || (level_templateObject79 = level_taggedTemplateLiteral(["familiar scrapbook"]))));
    asmohccs_lib_useDefaultFamiliar();
    advMacro(ghostLocation, combat_Macro.step(asmohccs_macros_delevel).step(asmohccs_macros_easyFight).skill("portscan").skill("shoot ghost").skill("shoot ghost").skill("shoot ghost").skill("trap ghost"));
  }

  if (!lib_have(template_string_$item(level_templateObject80 || (level_templateObject80 = level_taggedTemplateLiteral(["government"])))) && !lib_have(template_string_$item(level_templateObject81 || (level_templateObject81 = level_taggedTemplateLiteral(["government cheese"]))))) {
    (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(level_templateObject82 || (level_templateObject82 = level_taggedTemplateLiteral(["back"]))), template_string_$item(level_templateObject83 || (level_templateObject83 = level_taggedTemplateLiteral(["vampyric cloake"]))));
    asmohccs_lib_useDefaultFamiliar();
    (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(level_templateObject84 || (level_templateObject84 = level_taggedTemplateLiteral(["acc2"]))), template_string_$item(level_templateObject85 || (level_templateObject85 = level_taggedTemplateLiteral(["gold detective badge"]))));
    (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(level_templateObject86 || (level_templateObject86 = level_taggedTemplateLiteral(["acc3"]))), template_string_$item(level_templateObject87 || (level_templateObject87 = level_taggedTemplateLiteral(["Lil' Doctor\u2122 bag"]))));
    (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(level_templateObject88 || (level_templateObject88 = level_taggedTemplateLiteral(["off-hand"]))), template_string_$item(level_templateObject89 || (level_templateObject89 = level_taggedTemplateLiteral(["familiar scrapbook"]))));
    asmohccs_lib_advMacroAA(template_string_$location(level_templateObject90 || (level_templateObject90 = level_taggedTemplateLiteral(["Noob Cave"]))), combat_Macro.step(asmohccs_macros_delevel).skill("otoscope").skill("become a bat").skill("chest x-ray"), () => {
      return (0,external_kolmafia_namespaceObject.getCounters)("Portscan", 0, 0) !== "";
    });
    var desertAccessItem = (0,external_kolmafia_namespaceObject.knollAvailable)() ? template_string_$item(level_templateObject91 || (level_templateObject91 = level_taggedTemplateLiteral(["bitchin' meatcar"]))) : template_string_$item(level_templateObject92 || (level_templateObject92 = level_taggedTemplateLiteral(["Desert Bus pass"])));

    if (!lib_have(desertAccessItem)) {
      (0,external_kolmafia_namespaceObject.cliExecute)("acquire ".concat(desertAccessItem.name));
    }

    (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=desertbeach&action=db_nukehouse");
  }
}

function lov() {
  outfits_uniform();
  (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(level_templateObject93 || (level_templateObject93 = level_taggedTemplateLiteral(["back"]))), template_string_$item(level_templateObject94 || (level_templateObject94 = level_taggedTemplateLiteral(["vampyric cloake"]))));
  (0,external_kolmafia_namespaceObject.cliExecute)("fold makeshift garbage shirt");
  (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(level_templateObject95 || (level_templateObject95 = level_taggedTemplateLiteral(["shirt"]))), template_string_$item(level_templateObject96 || (level_templateObject96 = level_taggedTemplateLiteral(["makeshift garbage shirt"]))));
  asmohccs_lib_heal();
  asmohccs_lib_useDefaultFamiliar();
  combat_Macro.if_("monstername LOV enforcer", combat_Macro.attack().repeat()).if_("monstername LOV Engineer", combat_Macro.step(asmohccs_macros_candyblast).skill("saucegeyser").repeat()).if_("monstername LOV equivocator", combat_Macro.step(asmohccs_macros_delevel).step(asmohccs_macros_easyFight).trySkill($skill(level_templateObject97 || (level_templateObject97 = level_taggedTemplateLiteral(["Become a Wolf"])))).step(asmohccs_macros_candyblast).attack().repeat()).setAutoAttack();

  if (!property_get("_loveTunnelUsed") && inMysClass()) {
    fightAll("LOV Epaulettes", "Open Heart Surgery", "LOV Extraterrestrial Chocolate");
    (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(level_templateObject98 || (level_templateObject98 = level_taggedTemplateLiteral(["LOV Extraterrestrial Chocolate"]))));
    burnLibrams();
  } else if (!property_get("_loveTunnelUsed") && inMusClass()) {
    fightAll("LOV Eardigan", "Open Heart Surgery", "LOV Extraterrestrial Chocolate");
    (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(level_templateObject99 || (level_templateObject99 = level_taggedTemplateLiteral(["LOV Extraterrestrial Chocolate"]))));
    burnLibrams();
  } else if (!property_get("_loveTunnelUsed") && inMoxClass()) {
    fightAll("LOV Earring", "Open Heart Surgery", "LOV Extraterrestrial Chocolate");
    (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(level_templateObject100 || (level_templateObject100 = level_taggedTemplateLiteral(["LOV Extraterrestrial Chocolate"]))));
    burnLibrams();
  }
}

function sauceCraft() {
  (0,external_kolmafia_namespaceObject.cliExecute)("backupcamera ml"); //TODO - map/wish for Lemon for Muscle Classes ???
  //TODO - Wish to fight Evil Olive for olive for Moxie Classes - needs to be done to get a Jumbo Olive anyway

  if (inMysClass()) {} else if (inMusClass()) {} else if (inMoxClass()) {}
  /*if (have($item`magical sausage casing`) || have($item`magical sausage`)) {
      cliExecute("eat magic sausage");
  }
  uniform();
  if (
      get("_monstersMapped") < 2 &&
      availableAmount($item`tomato`) +
          availableAmount($item`tomato juice of powerful power`) +
          haveEffect($effect`Tomato Power`) ===
          0
  ) {
      equip($slot`acc3`, $item`Lil' Doctor™ bag`);
      useDefaultFamiliar();
      mapMacro(
          $location`The Haunted Pantry`,
          $monster`possessed can of tomatoes`,
          Macro.if_(
              `monsterid ${$monster`possessed can of tomatoes`.id}`,
              Macro.skill($skill`Reflex Hammer`)
          )
      );
  }*/


  if (!property_get("hasRange")) {
    if (!lib_have(template_string_$item(level_templateObject101 || (level_templateObject101 = level_taggedTemplateLiteral(["Dramatic\u2122 range"]))))) {
      (0,external_kolmafia_namespaceObject.buy)(1, template_string_$item(level_templateObject102 || (level_templateObject102 = level_taggedTemplateLiteral(["Dramatic\u2122 range"]))));
    }

    (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(level_templateObject103 || (level_templateObject103 = level_taggedTemplateLiteral(["Dramatic\u2122 range"]))));
  }

  (0,external_kolmafia_namespaceObject.useSkill)($skill(level_templateObject104 || (level_templateObject104 = level_taggedTemplateLiteral(["Advanced Saucecrafting"]))));
  (0,external_kolmafia_namespaceObject.useSkill)($skill(level_templateObject105 || (level_templateObject105 = level_taggedTemplateLiteral(["Prevent Scurvy and Sobriety"]))));

  if (!lib_have(template_string_$effect(level_templateObject106 || (level_templateObject106 = level_taggedTemplateLiteral(["Tomato Power"]))))) {
    if (!lib_have(template_string_$item(level_templateObject107 || (level_templateObject107 = level_taggedTemplateLiteral(["tomato juice of powerful power"])))) && lib_have(template_string_$item(level_templateObject108 || (level_templateObject108 = level_taggedTemplateLiteral(["tomato"]))))) {
      (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(level_templateObject109 || (level_templateObject109 = level_taggedTemplateLiteral(["tomato juice of powerful power"]))));
    }

    if (lib_have(template_string_$item(level_templateObject110 || (level_templateObject110 = level_taggedTemplateLiteral(["tomato juice of powerful power"]))))) {
      (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(level_templateObject111 || (level_templateObject111 = level_taggedTemplateLiteral(["tomato juice of powerful power"]))));
    }
  }

  if (inMysClass()) {
    if (!lib_have(template_string_$effect(level_templateObject112 || (level_templateObject112 = level_taggedTemplateLiteral(["Mystically Oiled"]))))) {
      if (!lib_have(template_string_$item(level_templateObject113 || (level_templateObject113 = level_taggedTemplateLiteral(["ointment of the occult"]))))) {
        (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(level_templateObject114 || (level_templateObject114 = level_taggedTemplateLiteral(["ointment of the occult"]))));
      }

      if (lib_have(template_string_$item(level_templateObject115 || (level_templateObject115 = level_taggedTemplateLiteral(["ointment of the occult"]))))) {
        (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(level_templateObject116 || (level_templateObject116 = level_taggedTemplateLiteral(["ointment of the occult"]))));
      }
    }
  } else if (inMusClass()) {
    if (!lib_have(template_string_$effect(level_templateObject117 || (level_templateObject117 = level_taggedTemplateLiteral(["Phorcefullness"]))))) {
      if (!lib_have(template_string_$item(level_templateObject118 || (level_templateObject118 = level_taggedTemplateLiteral(["philter of phorce"]))))) {
        (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(level_templateObject119 || (level_templateObject119 = level_taggedTemplateLiteral(["philter of phorce"]))));
      }

      if (lib_have(template_string_$item(level_templateObject120 || (level_templateObject120 = level_taggedTemplateLiteral(["philter of phorce"]))))) {
        (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(level_templateObject121 || (level_templateObject121 = level_taggedTemplateLiteral(["philter of phorce"]))));
      }
    }
  } else if (inMoxClass()) {
    if (!lib_have(template_string_$effect(level_templateObject122 || (level_templateObject122 = level_taggedTemplateLiteral(["Superhuman Sarcasm"]))))) {
      if (!lib_have(template_string_$item(level_templateObject123 || (level_templateObject123 = level_taggedTemplateLiteral(["serum of sarcasm"]))))) {
        (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(level_templateObject124 || (level_templateObject124 = level_taggedTemplateLiteral(["serum of sarcasm"]))));
      }

      if (lib_have(template_string_$item(level_templateObject125 || (level_templateObject125 = level_taggedTemplateLiteral(["serum of sarcasm"]))))) {
        (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(level_templateObject126 || (level_templateObject126 = level_taggedTemplateLiteral(["serum of sarcasm"]))));
      }
    }
  }
}

function godLob() {
  if (property_get("_godLobsterFights") === 0) {
    combat_Macro.step(asmohccs_macros_delevel).step(asmohccs_macros_easyFight).attack().repeat().setAutoAttack();
    outfits_uniform();
    (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(level_templateObject127 || (level_templateObject127 = level_taggedTemplateLiteral(["shirt"]))), template_string_$item(level_templateObject128 || (level_templateObject128 = level_taggedTemplateLiteral(["makeshift garbage shirt"]))));
    asmohccs_lib_heal();
    (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(level_templateObject129 || (level_templateObject129 = level_taggedTemplateLiteral(["God Lobster"]))));
    setChoice(1310, 1);
    (0,external_kolmafia_namespaceObject.visitUrl)("main.php?fightgodlobster=1");
    (0,external_kolmafia_namespaceObject.runCombat)(combat_Macro.step(asmohccs_macros_delevel).step(asmohccs_macros_easyFight).attack().repeat().toString());
    multiFightAutoAttack();
    (0,external_kolmafia_namespaceObject.runChoice)(-1);
    (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(level_templateObject130 || (level_templateObject130 = level_taggedTemplateLiteral(["familiar"]))), template_string_$item(level_templateObject131 || (level_templateObject131 = level_taggedTemplateLiteral(["God Lobster's Scepter"]))));
    asmohccs_lib_heal();
    (0,external_kolmafia_namespaceObject.visitUrl)("main.php?fightgodlobster=1");
    (0,external_kolmafia_namespaceObject.runCombat)();
    multiFightAutoAttack();
    (0,external_kolmafia_namespaceObject.runChoice)(-1);
    (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(level_templateObject132 || (level_templateObject132 = level_taggedTemplateLiteral(["familiar"]))), template_string_$item(level_templateObject133 || (level_templateObject133 = level_taggedTemplateLiteral(["God Lobster's Ring"]))));
  }
}

function snojo() {
  outfits_uniform();
  asmohccs_lib_useDefaultFamiliar();

  if (property_get("snojoSetting") === "NONE") {
    (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=snojo&action=snojo_controller");

    if (inMysClass()) {
      (0,external_kolmafia_namespaceObject.runChoice)(2);
    } else if (inMusClass()) {
      (0,external_kolmafia_namespaceObject.runChoice)(1);
    } else if (inMoxClass()) {
      (0,external_kolmafia_namespaceObject.runChoice)(3);
    }
  }

  asmohccs_lib_advMacroAA(template_string_$location(level_templateObject134 || (level_templateObject134 = level_taggedTemplateLiteral(["The X-32-F Combat Training Snowman"]))), combat_Macro.item(template_string_$item(level_templateObject135 || (level_templateObject135 = level_taggedTemplateLiteral(["DNA extraction syringe"])))).step(asmohccs_macros_delevel).step(asmohccs_macros_easyFight).attack().repeat(), () => {
    return property_get("dnaSyringe") !== $phylum(level_templateObject136 || (level_templateObject136 = level_taggedTemplateLiteral(["construct"])));
  }, () => {
    asmohccs_lib_heal();
    asmohccs_lib_useDefaultFamiliar();
    geneTonic($phylum(level_templateObject137 || (level_templateObject137 = level_taggedTemplateLiteral(["construct"]))));
    asmohccs_lib_ensureEffect(template_string_$effect(level_templateObject138 || (level_templateObject138 = level_taggedTemplateLiteral(["Human-Machine Hybrid"]))));
  });
  asmohccs_lib_advMacroAA(template_string_$location(level_templateObject139 || (level_templateObject139 = level_taggedTemplateLiteral(["The X-32-F Combat Training Snowman"]))), combat_Macro.step(asmohccs_macros_delevel).step(asmohccs_macros_easyFight).attack().repeat(), () => {
    return property_get("_snojoFreeFights") < 10;
  }, () => {
    asmohccs_lib_heal();
    asmohccs_lib_useDefaultFamiliar();
  });
  (0,external_kolmafia_namespaceObject.cliExecute)("hottub");
}

function NEP() {
  if (property_get("_questPartyFair") === "unstarted") {
    setChoice(1322, "");
    (0,external_kolmafia_namespaceObject.visitUrl)("adventure.php?snarfblat=528");

    if (property_get("_questPartyFairQuest") === "food") {
      (0,external_kolmafia_namespaceObject.runChoice)(1);
      setChoice(1324, 2);
      setChoice(1326, 3);
    } else if (property_get("_questPartyFairQuest") === "booze") {
      (0,external_kolmafia_namespaceObject.runChoice)(1);
      setChoice(1324, 3);
      setChoice(1327, 3);
    } else {
      (0,external_kolmafia_namespaceObject.runChoice)(2);
      setChoice(1324, 5);
    }
  }

  outfits_uniform();
  (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(level_templateObject140 || (level_templateObject140 = level_taggedTemplateLiteral(["shirt"]))), template_string_$item(level_templateObject141 || (level_templateObject141 = level_taggedTemplateLiteral(["makeshift garbage shirt"]))));
  (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(level_templateObject142 || (level_templateObject142 = level_taggedTemplateLiteral(["off-hand"]))), template_string_$item(level_templateObject143 || (level_templateObject143 = level_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))));
  asmohccs_lib_useDefaultFamiliar();
  asmohccs_lib_advMacroAA(template_string_$location(level_templateObject144 || (level_templateObject144 = level_taggedTemplateLiteral(["The Neverending Party"]))), combat_Macro.step(asmohccs_macros_delevel).trySkill("feel pride").trySkill($skill(level_templateObject145 || (level_templateObject145 = level_taggedTemplateLiteral(["%fn, spit on me!"])))).step(asmohccs_macros_easyFight).attack().repeat(), () => {
    return property_get("_neverendingPartyFreeTurns") < 10;
  }, () => {
    asmohccs_lib_useDefaultFamiliar();
    asmohccs_lib_heal();

    if (property_get("_sausageFights") > 3 && (0,external_kolmafia_namespaceObject.haveEquipped)(template_string_$item(level_templateObject146 || (level_templateObject146 = level_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))))) {
      (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(level_templateObject147 || (level_templateObject147 = level_taggedTemplateLiteral(["off-hand"]))), template_string_$item(level_templateObject148 || (level_templateObject148 = level_taggedTemplateLiteral(["familiar scrapbook"]))));
    }

    if (property_get("choiceAdventure1324") !== 5 && asmohccs_lib_questStep("_questPartyFair") > 0) {
      setChoice(1324, 5);
    }

    if ((0,external_kolmafia_namespaceObject.myLevel)() >= 13 && !lib_have(template_string_$effect(level_templateObject149 || (level_templateObject149 = level_taggedTemplateLiteral(["Inner Elf"]))))) {
      ensureInnerElf();
    }
  });
  asmohccs_lib_advMacroAA(template_string_$location(level_templateObject150 || (level_templateObject150 = level_taggedTemplateLiteral(["The Neverending Party"]))), combat_Macro.if_("!monstername sausage goblin", combat_Macro.trySkill("shattering punch").trySkill("gingerbread mob hit").trySkill("chest x-ray")).if_("monstername sausage goblin", combat_Macro.step(asmohccs_macros_delevel).step(asmohccs_macros_candyblast).attack().repeat()), () => {
    return property_get("_shatteringPunchUsed") < 3 && !property_get("_gingerbreadMobHitUsed") && (0,external_kolmafia_namespaceObject.myLevel)() < 15;
  }, () => {
    asmohccs_lib_heal();
    asmohccs_lib_useDefaultFamiliar();

    if (property_get("_sausageFights") > 3 && (0,external_kolmafia_namespaceObject.haveEquipped)(template_string_$item(level_templateObject151 || (level_templateObject151 = level_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))))) {
      (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(level_templateObject152 || (level_templateObject152 = level_taggedTemplateLiteral(["off-hand"]))), template_string_$item(level_templateObject153 || (level_templateObject153 = level_taggedTemplateLiteral(["familiar scrapbook"]))));
    }

    if (property_get("choiceAdventure1324") !== 5 && asmohccs_lib_questStep("_questPartyFair") > 0) {
      setChoice(1324, 5);
    }

    if ((0,external_kolmafia_namespaceObject.myLevel)() >= 13 && !lib_have(template_string_$effect(level_templateObject154 || (level_templateObject154 = level_taggedTemplateLiteral(["Inner Elf"]))))) {
      ensureInnerElf();
    }
  });
  (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(level_templateObject155 || (level_templateObject155 = level_taggedTemplateLiteral(["acc3"]))), template_string_$item(level_templateObject156 || (level_templateObject156 = level_taggedTemplateLiteral(["Lil' Doctor\u2122 bag"]))));
  asmohccs_lib_advMacroAA(template_string_$location(level_templateObject157 || (level_templateObject157 = level_taggedTemplateLiteral(["The Neverending Party"]))), combat_Macro.if_("!monstername sausage goblin", combat_Macro.trySkill("shattering punch").trySkill("gingerbread mob hit").trySkill("chest x-ray")).if_("monstername sausage goblin", combat_Macro.step(asmohccs_macros_delevel).step(asmohccs_macros_candyblast).attack().repeat()), () => {
    return property_get("_chestXRayUsed") < 3 && (0,external_kolmafia_namespaceObject.myLevel)() < 15;
  }, () => {
    asmohccs_lib_heal();
    asmohccs_lib_useDefaultFamiliar();

    if (property_get("_sausageFights") > 3 && (0,external_kolmafia_namespaceObject.haveEquipped)(template_string_$item(level_templateObject158 || (level_templateObject158 = level_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))))) {
      (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(level_templateObject159 || (level_templateObject159 = level_taggedTemplateLiteral(["off-hand"]))), template_string_$item(level_templateObject160 || (level_templateObject160 = level_taggedTemplateLiteral(["familiar scrapbook"]))));
    }

    if (property_get("choiceAdventure1324") !== 5 && asmohccs_lib_questStep("_questPartyFair") > 0) {
      setChoice(1324, 5);
    }

    if ((0,external_kolmafia_namespaceObject.myLevel)() >= 13 && !lib_have(template_string_$effect(level_templateObject161 || (level_templateObject161 = level_taggedTemplateLiteral(["Inner Elf"]))))) {
      ensureInnerElf();
    }
  });
}

function mElfLeveling() {
  outfits_uniform();
  (0,external_kolmafia_namespaceObject.cliExecute)("fold garbage shirt");
  (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(level_templateObject162 || (level_templateObject162 = level_taggedTemplateLiteral(["shirt"]))), template_string_$item(level_templateObject163 || (level_templateObject163 = level_taggedTemplateLiteral(["makeshift garbage shirt"]))));
  (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(level_templateObject164 || (level_templateObject164 = level_taggedTemplateLiteral(["Machine Elf"]))));
  asmohccs_lib_advMacroAA(template_string_$location(level_templateObject165 || (level_templateObject165 = level_taggedTemplateLiteral(["The Deep Machine Tunnels"]))), defaultKill, () => {
    return property_get("_machineTunnelsAdv") < 5;
  }, asmohccs_lib_heal);
}

function royalty() {
  if (!lib_have(template_string_$item(level_templateObject166 || (level_templateObject166 = level_taggedTemplateLiteral(["very pointy crown"]))))) {
    combat_Macro.tryItem("jam band flyer").tryItem("gas can").tryItem("time-spinner").attack().repeat().setAutoAttack();
    outfits_uniform();
    asmohccs_lib_useDefaultFamiliar();
    asmohccs_lib_heal();
    fightPiece($monster(level_templateObject167 || (level_templateObject167 = level_taggedTemplateLiteral(["Witchess Queen"]))));
  }

  if (!lib_have(template_string_$item(level_templateObject168 || (level_templateObject168 = level_taggedTemplateLiteral(["dented scepter"]))))) {
    combat_Macro.step(asmohccs_macros_delevel).attack().repeat().setAutoAttack();
    outfits_uniform();
    asmohccs_lib_useDefaultFamiliar();
    asmohccs_lib_heal();
    fightPiece($monster(level_templateObject169 || (level_templateObject169 = level_taggedTemplateLiteral(["Witchess King"]))));
  }
}

function restAndBuff() {
  changeNightstand(template_string_$item(level_templateObject170 || (level_templateObject170 = level_taggedTemplateLiteral(["foreign language tapes"]))));

  while (property_get("timesRested") < (0,external_kolmafia_namespaceObject.totalFreeRests)()) {
    burnLibrams();
    (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=chateau&action=chateau_restbox");
  }
}

function digitwinked() {
  uniform();
  useDefaultFamiliar();

  if (!get("latteUnlocks").includes("chili")) {
    equip($slot(level_templateObject171 || (level_templateObject171 = level_taggedTemplateLiteral(["off-hand"]))), $item(level_templateObject172 || (level_templateObject172 = level_taggedTemplateLiteral(["latte lovers member's mug"]))));
  }

  advMacroAA($location(level_templateObject173 || (level_templateObject173 = level_taggedTemplateLiteral(["the haunted kitchen"]))), Macro.step(delevel).step(easyFight).step(candyblast).attack().repeat(), () => {
    return getCounters("Digitize", 0, 0).trim() !== "";
  });
  uniform();

  if (get("latteUnlocks").includes("chili")) {
    equip($slot(level_templateObject174 || (level_templateObject174 = level_taggedTemplateLiteral(["off-hand"]))), $item(level_templateObject175 || (level_templateObject175 = level_taggedTemplateLiteral(["familiar scrapbook"]))));
  }

  advMacroAA($location(level_templateObject176 || (level_templateObject176 = level_taggedTemplateLiteral(["the haunted kitchen"]))), Macro.step(delevel).step(easyFight).step(candyblast).attack().repeat(), () => {
    return getCounters("Romantic Monster window end", 0, 0).trim() !== "";
  });
}

function level_hybridize() {
  // become a human fish hybrid
  if (!isHybridized($phylum(level_templateObject177 || (level_templateObject177 = level_taggedTemplateLiteral(["fish"])))) && property_get("dnaSyringe") !== $phylum(level_templateObject178 || (level_templateObject178 = level_taggedTemplateLiteral(["fish"])))) {
    (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(level_templateObject179 || (level_templateObject179 = level_taggedTemplateLiteral(["ms puck man"]))));
    asmohccs_lib_advMacroAA(template_string_$location(level_templateObject180 || (level_templateObject180 = level_taggedTemplateLiteral(["The Bubblin' Caldera"]))), combat_Macro.while_("!monstername lava lamprey", combat_Macro.trySkill($skill(level_templateObject181 || (level_templateObject181 = level_taggedTemplateLiteral(["Extract"])))).trySkill($skill(level_templateObject182 || (level_templateObject182 = level_taggedTemplateLiteral(["Macrometeorite"]))))).if_("monstername lava lamprey", combat_Macro.trySkill($skill(level_templateObject183 || (level_templateObject183 = level_taggedTemplateLiteral(["Extract"])))).item(template_string_$item(level_templateObject184 || (level_templateObject184 = level_taggedTemplateLiteral(["DNA extraction syringe"])))).skill($skill(level_templateObject185 || (level_templateObject185 = level_taggedTemplateLiteral(["Feel Hatred"]))))), () => {
      return property_get("dnaSyringe") !== $phylum(level_templateObject186 || (level_templateObject186 = level_taggedTemplateLiteral(["fish"])));
    });
  }

  if (!hybridize()) {
    throw "Failed to hybridize fish";
  }

  asmohccs_lib_useDefaultFamiliar();

  if ((0,external_kolmafia_namespaceObject.haveEffect)(template_string_$effect(level_templateObject187 || (level_templateObject187 = level_taggedTemplateLiteral(["Drenched in Lava"]))))) {
    (0,external_kolmafia_namespaceObject.cliExecute)("hottub");
  }
}

function prelude() {
  horse("dark");
  if ((0,external_kolmafia_namespaceObject.availableAmount)(template_string_$item(level_templateObject188 || (level_templateObject188 = level_taggedTemplateLiteral(["astral six-pack"])))) !== 0) (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(level_templateObject189 || (level_templateObject189 = level_taggedTemplateLiteral(["astral six-pack"]))));
  if (lib_have(template_string_$effect(level_templateObject190 || (level_templateObject190 = level_taggedTemplateLiteral(["The Magical Mojomuscular Melody"]))))) (0,external_kolmafia_namespaceObject.cliExecute)("shrug The Magical Mojomuscular Melody");
  (0,external_kolmafia_namespaceObject.useSkill)($skill(level_templateObject191 || (level_templateObject191 = level_taggedTemplateLiteral(["The Ode to Booze"]))));

  while ((0,external_kolmafia_namespaceObject.myInebriety)() < 5) {
    (0,external_kolmafia_namespaceObject.drink)(1, template_string_$item(level_templateObject192 || (level_templateObject192 = level_taggedTemplateLiteral(["astral pilsner"]))));
  }
}
/*
Buff Up
LOV Tunnel
ALL THE EXP (Bastille + Ten Percent Bonus)
Fight Portscan - with protopack on (TODO - Move to DMT to reduce freekill usage?)
Fight Ghost
God Lob
Snojo - get construct DNA

Rest - should be level 9 by this point

Melf
NEP
Witch
Queen
King


*/


function levelUp() {
  buffMainstat();
  level_castBuffs();
  lov();
  initialExp();
  level_hybridize();
  sauceCraft(); //getYoked();
  //digitwinked();

  witchGhostAgent();
  godLob();
  snojo();
  restAndBuff();
  royalty();
  mElfLeveling();
  sauceCraft(); //done twice in case not enough meat for Dramatic Range when first run

  NEP();
  prelude();
}
;// CONCATENATED MODULE: ./src/noncombat.ts
var noncombat_templateObject, noncombat_templateObject2, noncombat_templateObject3, noncombat_templateObject4, noncombat_templateObject5, noncombat_templateObject6, noncombat_templateObject7, noncombat_templateObject8, noncombat_templateObject9, noncombat_templateObject10, noncombat_templateObject11, noncombat_templateObject12, noncombat_templateObject13, noncombat_templateObject14, noncombat_templateObject15, noncombat_templateObject16, noncombat_templateObject17, noncombat_templateObject18, noncombat_templateObject19, noncombat_templateObject20, noncombat_templateObject21;

function noncombat_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var noncombat_predictor = () => 60 + (20 + (0,external_kolmafia_namespaceObject.numericModifier)("combat rate")) * 3;

function noncombat_castBuffs() {
  universalWeightBuffs();
  asmohccs_lib_ensureEffect(template_string_$effect(noncombat_templateObject || (noncombat_templateObject = noncombat_taggedTemplateLiteral(["Smooth Movements"]))));
  asmohccs_lib_ensureEffect(template_string_$effect(noncombat_templateObject2 || (noncombat_templateObject2 = noncombat_taggedTemplateLiteral(["Feeling Lonely"]))));
  (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(noncombat_templateObject3 || (noncombat_templateObject3 = noncombat_taggedTemplateLiteral(["acc3"]))), template_string_$item(noncombat_templateObject4 || (noncombat_templateObject4 = noncombat_taggedTemplateLiteral(["Powerful Glove"]))));
  asmohccs_lib_ensureEffect(template_string_$effect(noncombat_templateObject5 || (noncombat_templateObject5 = noncombat_taggedTemplateLiteral(["Invisible Avatar"]))));
  asmohccs_lib_ensureEffect(template_string_$effect(noncombat_templateObject6 || (noncombat_templateObject6 = noncombat_taggedTemplateLiteral(["Blessing of the Bird"]))));
  if ((0,external_kolmafia_namespaceObject.haveEffect)(template_string_$effect(noncombat_templateObject7 || (noncombat_templateObject7 = noncombat_taggedTemplateLiteral(["Fat Leon's Phat Loot Lyric"]))))) (0,external_kolmafia_namespaceObject.cliExecute)("shrug fat leon's phat loot lyric");
  asmohccs_lib_ensureEffect(template_string_$effect(noncombat_templateObject8 || (noncombat_templateObject8 = noncombat_taggedTemplateLiteral(["The Sonata of Sneakiness"]))));
  if (!property_get("_olympicSwimmingPool")) (0,external_kolmafia_namespaceObject.cliExecute)("swim sprints"); //while (getFuel() < 37) fuelUp();
  //if (!have($effect`Driving Stealthily`)) cliExecute("asdonmartin drive stealthily");

  horse("dark");
}

function godLobster() {
  if (!lib_have(template_string_$effect(noncombat_templateObject9 || (noncombat_templateObject9 = noncombat_taggedTemplateLiteral(["Silence of the God Lobster"])))) && property_get("_godLobsterFights") < 3 && lib_have(template_string_$item(noncombat_templateObject10 || (noncombat_templateObject10 = noncombat_taggedTemplateLiteral(["God Lobster's Ring"]))))) {
    (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(noncombat_templateObject11 || (noncombat_templateObject11 = noncombat_taggedTemplateLiteral(["God Lobster"]))));
    (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(noncombat_templateObject12 || (noncombat_templateObject12 = noncombat_taggedTemplateLiteral(["familiar"]))), template_string_$item(noncombat_templateObject13 || (noncombat_templateObject13 = noncombat_taggedTemplateLiteral(["God Lobster's Ring"]))));
    outfits_uniform();
    defaultKill.setAutoAttack();
    asmohccs_lib_heal();
    setChoice(1310, 2);
    (0,external_kolmafia_namespaceObject.visitUrl)("main.php?fightgodlobster=1");
    (0,external_kolmafia_namespaceObject.runCombat)(defaultKill.toString());
    (0,external_kolmafia_namespaceObject.visitUrl)("choice.php");
    (0,external_kolmafia_namespaceObject.runChoice)(-1);
  }
}

function noncombat_testPrep() {
  noncombatOutfit();
  var improvements = [() => {
    if (!lib_have(template_string_$effect(noncombat_templateObject14 || (noncombat_templateObject14 = noncombat_taggedTemplateLiteral(["Gummed Shoes"]))))) {
      if ((0,external_kolmafia_namespaceObject.availableAmount)(template_string_$item(noncombat_templateObject15 || (noncombat_templateObject15 = noncombat_taggedTemplateLiteral(["cop dollar"])))) < 10) (0,external_kolmafia_namespaceObject.cliExecute)("detective solver.ash");
      (0,external_kolmafia_namespaceObject.buy)($coinmaster(noncombat_templateObject16 || (noncombat_templateObject16 = noncombat_taggedTemplateLiteral(["Precinct Materiel Division"]))), 1, template_string_$item(noncombat_templateObject17 || (noncombat_templateObject17 = noncombat_taggedTemplateLiteral(["shoe gum"]))));
      (0,external_kolmafia_namespaceObject.use)(template_string_$item(noncombat_templateObject18 || (noncombat_templateObject18 = noncombat_taggedTemplateLiteral(["shoe gum"]))));
    }
  }, () => {
    if ((0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(noncombat_templateObject19 || (noncombat_templateObject19 = noncombat_taggedTemplateLiteral(["squeaky toy rose"])))) > 0) {
      (0,external_kolmafia_namespaceObject.use)(template_string_$item(noncombat_templateObject20 || (noncombat_templateObject20 = noncombat_taggedTemplateLiteral(["squeaky toy rose"]))));
    }
  }, () => (0,external_kolmafia_namespaceObject.use)(template_string_$item(noncombat_templateObject21 || (noncombat_templateObject21 = noncombat_taggedTemplateLiteral(["shady shades"]))))];

  for (var _i = 0, _improvements = improvements; _i < _improvements.length; _i++) {
    var improvement = _improvements[_i];
    if (noncombat_predictor() > 1) improvement();
  }
}

function noncombatTest() {
  noncombat_castBuffs();
  godLobster();
  noncombat_testPrep();
  if (noncombat_predictor() > 1) throw "Failed to cap noncombat";
  modTraceList("combat rate");
  return noncombat_predictor();
}
;// CONCATENATED MODULE: ./src/spell.ts
var spell_templateObject, spell_templateObject2, spell_templateObject3, spell_templateObject4, spell_templateObject5, spell_templateObject6, spell_templateObject7, spell_templateObject8, spell_templateObject9, spell_templateObject10, spell_templateObject11, spell_templateObject12, spell_templateObject13, spell_templateObject14, spell_templateObject15, spell_templateObject16, spell_templateObject17, spell_templateObject18, spell_templateObject19, spell_templateObject20, spell_templateObject21, spell_templateObject22, spell_templateObject23, spell_templateObject24, spell_templateObject25, spell_templateObject26, spell_templateObject27, spell_templateObject28, spell_templateObject29, spell_templateObject30, spell_templateObject31, spell_templateObject32, spell_templateObject33, spell_templateObject34, spell_templateObject35, spell_templateObject36, spell_templateObject37, spell_templateObject38;

function spell_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var spell_predictor = () => 60 - Math.floor((0,external_kolmafia_namespaceObject.numericModifier)("spell damage") / 50 + 0.001) - Math.floor((0,external_kolmafia_namespaceObject.numericModifier)("spell damage percent") / 50 + 0.001);

function spell_castBuffs() {
  asmohccs_lib_ensureEffect(template_string_$effect(spell_templateObject || (spell_templateObject = spell_taggedTemplateLiteral(["Simmering"]))));
  $effects(spell_templateObject2 || (spell_templateObject2 = spell_taggedTemplateLiteral(["Pisces in the Skyces, Carol of the Hells, Arched Eyebrow of the Archmage, \n        Song of Sauce, We're All Made of Starfish, Mental A-cue-ity"]))).forEach(effect => asmohccs_lib_ensureEffect(effect));

  if (!property_get("_cargoPocketEmptied")) {
    (0,external_kolmafia_namespaceObject.cliExecute)("cargo 177");
    asmohccs_lib_ensureEffect(template_string_$effect(spell_templateObject3 || (spell_templateObject3 = spell_taggedTemplateLiteral(["Sigils of Yeg"]))));
  }

  if ((0,external_kolmafia_namespaceObject.availableAmount)(template_string_$item(spell_templateObject4 || (spell_templateObject4 = spell_taggedTemplateLiteral(["LOV Elixir #6"])))) > 0) asmohccs_lib_ensureEffect(template_string_$effect(spell_templateObject5 || (spell_templateObject5 = spell_taggedTemplateLiteral(["The Magic of LOV"]))));
  /*if (get("tomeSummons") < 3) useSkill(1, $skill`Summon Sugar Sheets`);
  if (have($item`sugar sheet`)) create(1, $item`sugar chapeau`);*/

  (0,external_kolmafia_namespaceObject.visitUrl)("shop.php?whichshop=lathe");

  if ((0,external_kolmafia_namespaceObject.availableAmount)(template_string_$item(spell_templateObject6 || (spell_templateObject6 = spell_taggedTemplateLiteral(["flimsy hardwood scraps"])))) > 0) {
    (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(spell_templateObject7 || (spell_templateObject7 = spell_taggedTemplateLiteral(["weeping willow wand"]))));
  }

  (0,external_kolmafia_namespaceObject.cliExecute)("briefcase enchantment spell");
  /* if (!get("_madTeaParty")) {
      visitUrl("clan_viplounge.php?action=lookingglass&whichfloor=2");
      cliExecute("acquire mariachi hat");
      ensureEffect($effect`Full Bottle in front of Me`);
   }*/

  (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(spell_templateObject8 || (spell_templateObject8 = spell_taggedTemplateLiteral(["Spirit of Cayenne"]))));

  if ((0,external_kolmafia_namespaceObject.availableAmount)(template_string_$item(spell_templateObject9 || (spell_templateObject9 = spell_taggedTemplateLiteral(["flask of baconstone juice"])))) > 0) {
    asmohccs_lib_ensureEffect(template_string_$effect(spell_templateObject10 || (spell_templateObject10 = spell_taggedTemplateLiteral(["Baconstoned"]))));
  }
}

function deepDarkVisions() {
  //horse("pale");
  (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(spell_templateObject11 || (spell_templateObject11 = spell_taggedTemplateLiteral(["Exotic Parrot"]))));

  if (!lib_have(template_string_$item(spell_templateObject12 || (spell_templateObject12 = spell_taggedTemplateLiteral(["astral pet sweater"])))) && property_get("tomeSummons") < 3 && (0,external_kolmafia_namespaceObject.inHardcore)()) {
    (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(spell_templateObject13 || (spell_templateObject13 = spell_taggedTemplateLiteral(["box of Familiar Jacks"]))));
    (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(spell_templateObject14 || (spell_templateObject14 = spell_taggedTemplateLiteral(["box of Familiar Jacks"]))));
  }

  (0,external_kolmafia_namespaceObject.maximize)("spooky res", false);

  while (lib_have($skill(spell_templateObject15 || (spell_templateObject15 = spell_taggedTemplateLiteral(["Deep Dark Visions"])))) && !(0,external_kolmafia_namespaceObject.haveEffect)(template_string_$effect(spell_templateObject16 || (spell_templateObject16 = spell_taggedTemplateLiteral(["Visions of the Deep Dark Deeps"]))))) {
    if ((0,external_kolmafia_namespaceObject.myMp)() < 20) {
      (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(spell_templateObject17 || (spell_templateObject17 = spell_taggedTemplateLiteral(["magical sausage"]))));
      (0,external_kolmafia_namespaceObject.eat)(1, template_string_$item(spell_templateObject18 || (spell_templateObject18 = spell_taggedTemplateLiteral(["magical sausage"]))));
    }

    while ((0,external_kolmafia_namespaceObject.myHp)() < (0,external_kolmafia_namespaceObject.myMaxhp)()) {
      (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(spell_templateObject19 || (spell_templateObject19 = spell_taggedTemplateLiteral(["Cannelloni Cocoon"]))));
    }

    if ((0,external_kolmafia_namespaceObject.myMp)() < 100) {
      (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(spell_templateObject20 || (spell_templateObject20 = spell_taggedTemplateLiteral(["magical sausage"]))));
      (0,external_kolmafia_namespaceObject.eat)(1, template_string_$item(spell_templateObject21 || (spell_templateObject21 = spell_taggedTemplateLiteral(["magical sausage"]))));
    }

    if (Math.round((0,external_kolmafia_namespaceObject.numericModifier)("spooky resistance")) < 10) {
      asmohccs_lib_ensureEffect(template_string_$effect(spell_templateObject22 || (spell_templateObject22 = spell_taggedTemplateLiteral(["Does It Have a Skull In There??"]))));

      if (Math.round((0,external_kolmafia_namespaceObject.numericModifier)("spooky resistance")) < 10) {
        throw "Not enough spooky res for Deep Dark Visions.";
      }
    }

    (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(spell_templateObject23 || (spell_templateObject23 = spell_taggedTemplateLiteral(["Deep Dark Visions"]))));
  }
}

function fingies() {
  if (!lib_have(template_string_$effect(spell_templateObject24 || (spell_templateObject24 = spell_taggedTemplateLiteral(["Saucefingers"])))) && (0,external_kolmafia_namespaceObject.myClass)() === template_string_$class(spell_templateObject25 || (spell_templateObject25 = spell_taggedTemplateLiteral(["Pastamancer"]))) && (0,external_kolmafia_namespaceObject.myLevel)() >= 15 && lib_have(template_string_$familiar(spell_templateObject26 || (spell_templateObject26 = spell_taggedTemplateLiteral(["Mini-Adventurer"]))))) {
    (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(spell_templateObject27 || (spell_templateObject27 = spell_taggedTemplateLiteral(["Mini-Adventurer"]))));
    horse("dark");
    outfits_uniform();
    setChoice(768, 4);
    asmohccs_lib_advMacroAA(template_string_$location(spell_templateObject28 || (spell_templateObject28 = spell_taggedTemplateLiteral(["The Dire Warren"]))), combat_Macro.skill($skill(spell_templateObject29 || (spell_templateObject29 = spell_taggedTemplateLiteral(["Feel Hatred"])))), () => !lib_have(template_string_$effect(spell_templateObject30 || (spell_templateObject30 = spell_taggedTemplateLiteral(["Saucefingers"])))));
  }
}

function shower() {
  (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(spell_templateObject31 || (spell_templateObject31 = spell_taggedTemplateLiteral(["ms. puck man"]))));

  if (!lib_have(template_string_$effect(spell_templateObject32 || (spell_templateObject32 = spell_taggedTemplateLiteral(["Meteor Showered"])))) && property_get("_meteorShowerUses") < 5) {
    outfits_uniform();
    setChoice(1387, 3);
    /*adv1($location`LavaCo&trade; Lamp Factory`, -1, "");
            if (
                !containsText(
                    $location`LavaCo&trade; Lamp Factory`.noncombatQueue,
                    "LavaCo&trade; Welcomes You"
                )
            ) {
                throw "Something went wrong at LavaCo.";
            }
        equip($item`Fourth of May Cosplay Saber`);
        */

    mapMacro(template_string_$location(spell_templateObject33 || (spell_templateObject33 = spell_taggedTemplateLiteral(["LavaCo\u2122 Lamp Factory"]))), $monster(spell_templateObject34 || (spell_templateObject34 = spell_taggedTemplateLiteral(["factory worker (female)"]))), combat_Macro.skill($skill(spell_templateObject35 || (spell_templateObject35 = spell_taggedTemplateLiteral(["Meteor Shower"])))).skill($skill(spell_templateObject36 || (spell_templateObject36 = spell_taggedTemplateLiteral(["Use the Force"])))));
    if ((0,external_kolmafia_namespaceObject.handlingChoice)()) (0,external_kolmafia_namespaceObject.runChoice)(-1);
    _set("_meteorShowerUses", 1 + property_get("_meteorShowerUses"));
    _set("mappingMonsters", false);
  }
}

function spell_testPrep() {
  (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(spell_templateObject37 || (spell_templateObject37 = spell_taggedTemplateLiteral(["left-hand man"]))));
  spellOutfit();
}

function getToxic() {
  outfits_uniform();
  asmohccs_lib_useDefaultFamiliar();
  fightSausageIfAble(template_string_$location(spell_templateObject38 || (spell_templateObject38 = spell_taggedTemplateLiteral(["The Toxic Teacups"]))), combat_Macro.step(asmohccs_macros_delevel).attack().repeat());
}

function spellTest() {
  spell_castBuffs();
  fingies();
  deepDarkVisions();
  getToxic();
  ensureInnerElf();
  shower();
  spell_testPrep();
  modTraceList("spell damage");
  modTraceList("spell damage percent");
  return 1 + spell_predictor();
}
;// CONCATENATED MODULE: ./src/stattests.ts
var stattests_templateObject, stattests_templateObject2, stattests_templateObject3, stattests_templateObject4, stattests_templateObject5, stattests_templateObject6, stattests_templateObject7, stattests_templateObject8, stattests_templateObject9, stattests_templateObject10, stattests_templateObject11, stattests_templateObject12, stattests_templateObject13, stattests_templateObject14, stattests_templateObject15, stattests_templateObject16, stattests_templateObject17, stattests_templateObject18, stattests_templateObject19, stattests_templateObject20, stattests_templateObject21, stattests_templateObject22, stattests_templateObject23, stattests_templateObject24, stattests_templateObject25, stattests_templateObject26, stattests_templateObject27, stattests_templateObject28, stattests_templateObject29, stattests_templateObject30, stattests_templateObject31, stattests_templateObject32, stattests_templateObject33, stattests_templateObject34, stattests_templateObject35, stattests_templateObject36, stattests_templateObject37, stattests_templateObject38, stattests_templateObject39, stattests_templateObject40, stattests_templateObject41, stattests_templateObject42, stattests_templateObject43, stattests_templateObject44, stattests_templateObject45, stattests_templateObject46, stattests_templateObject47, stattests_templateObject48, stattests_templateObject49, stattests_templateObject50, stattests_templateObject51, stattests_templateObject52, stattests_templateObject53, stattests_templateObject54, stattests_templateObject55, stattests_templateObject56;

function stattests_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var musclePredictor = () => 60 - Math.floor(1 / 30 * ((0,external_kolmafia_namespaceObject.myBuffedstat)($stat(stattests_templateObject || (stattests_templateObject = stattests_taggedTemplateLiteral(["muscle"])))) - (0,external_kolmafia_namespaceObject.myBasestat)($stat(stattests_templateObject2 || (stattests_templateObject2 = stattests_taggedTemplateLiteral(["mysticality"]))))));

function musclebuffs() {
  (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(stattests_templateObject3 || (stattests_templateObject3 = stattests_taggedTemplateLiteral(["Bind Undead Elbow Macaroni"]))));
  asmohccs_lib_ensureEffect(template_string_$effect(stattests_templateObject4 || (stattests_templateObject4 = stattests_taggedTemplateLiteral(["Big"]))));
  asmohccs_lib_ensureEffect(template_string_$effect(stattests_templateObject5 || (stattests_templateObject5 = stattests_taggedTemplateLiteral(["Song of Bravado"]))));
  asmohccs_lib_ensureEffect(template_string_$effect(stattests_templateObject6 || (stattests_templateObject6 = stattests_taggedTemplateLiteral(["Rage of the Reindeer"]))));
  asmohccs_lib_ensureEffect(template_string_$effect(stattests_templateObject7 || (stattests_templateObject7 = stattests_taggedTemplateLiteral(["Quiet Determination"]))));
  asmohccs_lib_ensureEffect(template_string_$effect(stattests_templateObject8 || (stattests_templateObject8 = stattests_taggedTemplateLiteral(["Disdain of the War Snapper"]))));
  asmohccs_lib_ensureEffect(template_string_$effect(stattests_templateObject9 || (stattests_templateObject9 = stattests_taggedTemplateLiteral(["Feeling Excited"]))));
  asmohccs_lib_ensureEffect(template_string_$effect(stattests_templateObject10 || (stattests_templateObject10 = stattests_taggedTemplateLiteral(["The Power of LOV"]))));

  if (!lib_have(template_string_$effect(stattests_templateObject11 || (stattests_templateObject11 = stattests_taggedTemplateLiteral(["Go Get 'Em, Tiger!"]))))) {
    (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(stattests_templateObject12 || (stattests_templateObject12 = stattests_taggedTemplateLiteral(["Ben-Gal\u2122 Balm"]))));
    (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(stattests_templateObject13 || (stattests_templateObject13 = stattests_taggedTemplateLiteral(["Ben-Gal\u2122 Balm"]))));
  }
}

function muscleTestPrep() {
  muscleOutfit();

  for (var _i = 0, _arr = [() => asmohccs_lib_ensureEffect(template_string_$effect(stattests_templateObject14 || (stattests_templateObject14 = stattests_taggedTemplateLiteral(["Lack of Body-Building"])))), () => asmohccs_lib_ensureEffect(template_string_$effect(stattests_templateObject15 || (stattests_templateObject15 = stattests_taggedTemplateLiteral(["Ham-Fisted"])))), () => ensureInnerElf()]; _i < _arr.length; _i++) {
    var increaser = _arr[_i];
    if (musclePredictor() > 1) increaser();
  }
}

function muscleTest() {
  musclebuffs();
  muscleTestPrep();
  modTraceList("muscle");
  modTraceList("muscle percent");
  return musclePredictor();
}

var mystPredictor = () => 60 - Math.floor(1 / 30 * ((0,external_kolmafia_namespaceObject.myBuffedstat)($stat(stattests_templateObject16 || (stattests_templateObject16 = stattests_taggedTemplateLiteral(["mysticality"])))) - (0,external_kolmafia_namespaceObject.myBasestat)($stat(stattests_templateObject17 || (stattests_templateObject17 = stattests_taggedTemplateLiteral(["mysticality"]))))));

function mystbuffs() {
  asmohccs_lib_ensureEffect(template_string_$effect(stattests_templateObject18 || (stattests_templateObject18 = stattests_taggedTemplateLiteral(["Feeling Excited"]))));
}

function mystTestPrep() {
  mysticalityOutfit();
}

function mystTest() {
  mystbuffs();
  mystTestPrep();
  if (mystPredictor() > 1) throw "Not enough mysticality to cap";
  modTraceList("mysticality");
  modTraceList("mysticality percent");
  return mystPredictor();
}

var moxPredictor = () => 60 - Math.floor(1 / 30 * ((0,external_kolmafia_namespaceObject.myBuffedstat)($stat(stattests_templateObject19 || (stattests_templateObject19 = stattests_taggedTemplateLiteral(["moxie"])))) - (0,external_kolmafia_namespaceObject.myBasestat)($stat(stattests_templateObject20 || (stattests_templateObject20 = stattests_taggedTemplateLiteral(["mysticality"]))))));

function moxBuffs() {
  if (lib_have(template_string_$item(stattests_templateObject21 || (stattests_templateObject21 = stattests_taggedTemplateLiteral(["magical sausage casing"]))))) {
    (0,external_kolmafia_namespaceObject.create)(1, template_string_$item(stattests_templateObject22 || (stattests_templateObject22 = stattests_taggedTemplateLiteral(["magical sausage"]))));
  }

  if (lib_have(template_string_$item(stattests_templateObject23 || (stattests_templateObject23 = stattests_taggedTemplateLiteral(["magical sausage"]))))) {
    (0,external_kolmafia_namespaceObject.eat)(1, template_string_$item(stattests_templateObject24 || (stattests_templateObject24 = stattests_taggedTemplateLiteral(["magical sausage"]))));
  }

  asmohccs_lib_ensureEffect(template_string_$effect(stattests_templateObject25 || (stattests_templateObject25 = stattests_taggedTemplateLiteral(["Feeling Excited"]))));
  (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(stattests_templateObject26 || (stattests_templateObject26 = stattests_taggedTemplateLiteral(["Bind Penne Dreadful"]))));
  asmohccs_lib_ensureEffect(template_string_$effect(stattests_templateObject27 || (stattests_templateObject27 = stattests_taggedTemplateLiteral(["Pomp & Circumsands"]))));
  (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(stattests_templateObject28 || (stattests_templateObject28 = stattests_taggedTemplateLiteral(["Bird-a-Day calendar"]))));
  asmohccs_lib_ensureEffect(template_string_$effect(stattests_templateObject29 || (stattests_templateObject29 = stattests_taggedTemplateLiteral(["Blessing of the Bird"]))));
  asmohccs_lib_ensureEffect(template_string_$effect(stattests_templateObject30 || (stattests_templateObject30 = stattests_taggedTemplateLiteral(["Quiet Desperation"]))));
  asmohccs_lib_ensureEffect(template_string_$effect(stattests_templateObject31 || (stattests_templateObject31 = stattests_taggedTemplateLiteral(["Disco Fever"]))));
  asmohccs_lib_ensureEffect(template_string_$effect(stattests_templateObject32 || (stattests_templateObject32 = stattests_taggedTemplateLiteral(["Blubbered Up"]))));
  asmohccs_lib_ensureEffect(template_string_$effect(stattests_templateObject33 || (stattests_templateObject33 = stattests_taggedTemplateLiteral(["Mariachi Mood"]))));
  asmohccs_lib_ensureEffect(template_string_$effect(stattests_templateObject34 || (stattests_templateObject34 = stattests_taggedTemplateLiteral(["Disco State of Mind"]))));
  asmohccs_lib_ensureEffect(template_string_$effect(stattests_templateObject35 || (stattests_templateObject35 = stattests_taggedTemplateLiteral(["Disco Smirk"]))));
}

function moxTestPrep() {
  (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(stattests_templateObject36 || (stattests_templateObject36 = stattests_taggedTemplateLiteral(["Left-Hand Man"])))); //maximize("moxie", false);

  moxieOutfit();

  for (var _i2 = 0, _arr2 = [() => (0,external_kolmafia_namespaceObject.use)((0,external_kolmafia_namespaceObject.availableAmount)(template_string_$item(stattests_templateObject37 || (stattests_templateObject37 = stattests_taggedTemplateLiteral(["rhinestone"])))), template_string_$item(stattests_templateObject38 || (stattests_templateObject38 = stattests_taggedTemplateLiteral(["rhinestone"])))), () => {
    if (!lib_have(template_string_$effect(stattests_templateObject39 || (stattests_templateObject39 = stattests_taggedTemplateLiteral(["Unrunnable Face"]))))) {
      tryUse(1, template_string_$item(stattests_templateObject40 || (stattests_templateObject40 = stattests_taggedTemplateLiteral(["runproof mascara"]))));
    }
  }, () => {
    if ((0,external_kolmafia_namespaceObject.availableAmount)(template_string_$item(stattests_templateObject41 || (stattests_templateObject41 = stattests_taggedTemplateLiteral(["dollop of barbecue sauce"])))) > 0) {
      (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(stattests_templateObject42 || (stattests_templateObject42 = stattests_taggedTemplateLiteral(["dollop of barbecue sauce"]))));
    }
  }, () => {
    if ((0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(stattests_templateObject43 || (stattests_templateObject43 = stattests_taggedTemplateLiteral(["confiscated love note"])))) > 0) {
      (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(stattests_templateObject44 || (stattests_templateObject44 = stattests_taggedTemplateLiteral(["confiscated love note"]))));
    }
  }, () => ensureInnerElf()]; _i2 < _arr2.length; _i2++) {
    var increaser = _arr2[_i2];
    if (musclePredictor() > 1) increaser();
  }
}

function moxTest() {
  moxBuffs();
  moxTestPrep();

  if (moxPredictor() > 1) {
    throw "Not enough moxie to cap.";
  }

  modTraceList("moxie");
  modTraceList("moxie percent");
  return moxPredictor();
}

function hpBuffs() {
  (0,external_kolmafia_namespaceObject.useSkill)(1, $skill(stattests_templateObject45 || (stattests_templateObject45 = stattests_taggedTemplateLiteral(["Bind Undead Elbow Macaroni"]))));
  asmohccs_lib_ensureEffect(template_string_$effect(stattests_templateObject46 || (stattests_templateObject46 = stattests_taggedTemplateLiteral(["Big"]))));
  asmohccs_lib_ensureEffect(template_string_$effect(stattests_templateObject47 || (stattests_templateObject47 = stattests_taggedTemplateLiteral(["Song of Starch"]))));
  asmohccs_lib_ensureEffect(template_string_$effect(stattests_templateObject48 || (stattests_templateObject48 = stattests_taggedTemplateLiteral(["Rage of the Reindeer"]))));
  asmohccs_lib_ensureEffect(template_string_$effect(stattests_templateObject49 || (stattests_templateObject49 = stattests_taggedTemplateLiteral(["Quiet Determination"]))));
  asmohccs_lib_ensureEffect(template_string_$effect(stattests_templateObject50 || (stattests_templateObject50 = stattests_taggedTemplateLiteral(["Disdain of the War Snapper"]))));
  asmohccs_lib_ensureEffect(template_string_$effect(stattests_templateObject51 || (stattests_templateObject51 = stattests_taggedTemplateLiteral(["Feeling Excited"]))));
  asmohccs_lib_ensureEffect(template_string_$effect(stattests_templateObject52 || (stattests_templateObject52 = stattests_taggedTemplateLiteral(["The Power of LOV"]))));

  if (!lib_have(template_string_$effect(stattests_templateObject53 || (stattests_templateObject53 = stattests_taggedTemplateLiteral(["Go Get 'Em, Tiger!"]))))) {
    (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(stattests_templateObject54 || (stattests_templateObject54 = stattests_taggedTemplateLiteral(["Ben-Gal\u2122 Balm"]))));
    (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(stattests_templateObject55 || (stattests_templateObject55 = stattests_taggedTemplateLiteral(["Ben-Gal\u2122 Balm"]))));
  }
}

var hpPredictor = () => 60 - Math.floor(((0,external_kolmafia_namespaceObject.myMaxhp)() - (0,external_kolmafia_namespaceObject.myBuffedstat)($stat(stattests_templateObject56 || (stattests_templateObject56 = stattests_taggedTemplateLiteral(["muscle"])))) - 3) / 30);

function hpTestPrep() {
  hpOutfit();
}

function HPTest() {
  hpBuffs();
  hpTestPrep();

  if (hpPredictor() > 1) {
    throw "Failed to cap HP";
  }

  modTraceList("maximum hp");
  modTraceList("maximum hp percent");
  return hpPredictor();
}
;// CONCATENATED MODULE: ./src/weapon.ts
var weapon_templateObject, weapon_templateObject2, weapon_templateObject3, weapon_templateObject4, weapon_templateObject5, weapon_templateObject6, weapon_templateObject7, weapon_templateObject8, weapon_templateObject9, weapon_templateObject10, weapon_templateObject11, weapon_templateObject12, weapon_templateObject13, weapon_templateObject14, weapon_templateObject15, weapon_templateObject16, weapon_templateObject17, weapon_templateObject18, weapon_templateObject19, weapon_templateObject20, weapon_templateObject21, weapon_templateObject22, weapon_templateObject23, weapon_templateObject24, weapon_templateObject25, weapon_templateObject26, weapon_templateObject27, weapon_templateObject28, weapon_templateObject29, weapon_templateObject30, weapon_templateObject31;

function weapon_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var weapon_predictor = () => 60 - Math.floor((0,external_kolmafia_namespaceObject.numericModifier)("weapon damage") / 25 + 0.001) - Math.floor((0,external_kolmafia_namespaceObject.numericModifier)("weapon damage percent") / 25 + 0.001);

function getCrushed() {
  if (!lib_have(template_string_$effect(weapon_templateObject || (weapon_templateObject = weapon_taggedTemplateLiteral(["Do You Crush What I Crush?"]))))) {
    if (lib_have(template_string_$effect(weapon_templateObject2 || (weapon_templateObject2 = weapon_taggedTemplateLiteral(["Holiday Yoked"])))) && lib_have(template_string_$item(weapon_templateObject3 || (weapon_templateObject3 = weapon_taggedTemplateLiteral(["soft green echo eyedrop antidote"]))))) {
      uneffect(template_string_$effect(weapon_templateObject4 || (weapon_templateObject4 = weapon_taggedTemplateLiteral(["Holiday Yoked"]))));
    }

    if (!lib_have(template_string_$effect(weapon_templateObject5 || (weapon_templateObject5 = weapon_taggedTemplateLiteral(["Holiday Yoked"]))))) {
      (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(weapon_templateObject6 || (weapon_templateObject6 = weapon_taggedTemplateLiteral(["Ghost of Crimbo Carols"]))));
      outfits_uniform();
      /*if (ChateauMantegna.paintingMonster() === $monster`Black Crayon Crimbo Elf`){
      	Macro.item($item`DNA extraction syringe`).step(delevel).step(easyFight).attack().repeat().setAutoAttack();
               	ChateauMantegna.fightPainting();
      }
               else{*/

      (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(weapon_templateObject7 || (weapon_templateObject7 = weapon_taggedTemplateLiteral(["acc3"]))), template_string_$item(weapon_templateObject8 || (weapon_templateObject8 = weapon_taggedTemplateLiteral(["Lil' Doctor\u2122 bag"]))));
      combat_Macro.item(template_string_$item(weapon_templateObject9 || (weapon_templateObject9 = weapon_taggedTemplateLiteral(["DNA extraction syringe"])))).if_("monstername black crayon crimbo elf", combat_Macro.step(asmohccs_macros_delevel).step(asmohccs_macros_easyFight).attack().repeat()).skill($skill(weapon_templateObject10 || (weapon_templateObject10 = weapon_taggedTemplateLiteral(["Feel Hatred"])))).setAutoAttack();
      (0,external_kolmafia_namespaceObject.cliExecute)("cheat phylum elf");
      (0,external_kolmafia_namespaceObject.runCombat)(); //}

      asmohccs_lib_useDefaultFamiliar();
    }

    geneTonic($phylum(weapon_templateObject11 || (weapon_templateObject11 = weapon_taggedTemplateLiteral(["elf"]))));
    asmohccs_lib_ensureEffect(template_string_$effect(weapon_templateObject12 || (weapon_templateObject12 = weapon_taggedTemplateLiteral(["human-elf hybrid"]))));
  }
}

function weapon_castBuffs() {
  $effects(weapon_templateObject13 || (weapon_templateObject13 = weapon_taggedTemplateLiteral(["Carol of the Bulls, Song of the North, \n        Rage of the Reindeer, Scowl of the Auk, Disdain of the War Snapper, \n        Tenacity of the Snapper, Billiards Belligerence, Blessing of the Bird"]))).forEach(effect => asmohccs_lib_ensureEffect(effect));
  asmohccs_lib_ensureEffect(template_string_$effect(weapon_templateObject14 || (weapon_templateObject14 = weapon_taggedTemplateLiteral(["Frenzied, Bloody"]))));
  if (lib_have(template_string_$item(weapon_templateObject15 || (weapon_templateObject15 = weapon_taggedTemplateLiteral(["LOV Elixir #3"]))))) (0,external_kolmafia_namespaceObject.use)(template_string_$item(weapon_templateObject16 || (weapon_templateObject16 = weapon_taggedTemplateLiteral(["LOV Elixir #3"]))));
  tryHead(template_string_$effect(weapon_templateObject17 || (weapon_templateObject17 = weapon_taggedTemplateLiteral(["Lack of Body-Building"]))));
} //moved Force Spit to occur during NEP Levelling, in order to get it during last little bit of levelling & as bonus to stat tests.


function kungFuMeteors() {
  if (!property_get("_photocopyUsed")) {
    outfits_uniform();
    (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(weapon_templateObject18 || (weapon_templateObject18 = weapon_taggedTemplateLiteral(["Disembodied Hand"]))));
    (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(weapon_templateObject19 || (weapon_templateObject19 = weapon_taggedTemplateLiteral(["weapon"]))), template_string_$item(weapon_templateObject20 || (weapon_templateObject20 = weapon_taggedTemplateLiteral(["none"]))));
    (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(weapon_templateObject21 || (weapon_templateObject21 = weapon_taggedTemplateLiteral(["off-hand"]))), template_string_$item(weapon_templateObject22 || (weapon_templateObject22 = weapon_taggedTemplateLiteral(["none"]))));
    (0,external_kolmafia_namespaceObject.equip)(template_string_$slot(weapon_templateObject23 || (weapon_templateObject23 = weapon_taggedTemplateLiteral(["familiar"]))), template_string_$item(weapon_templateObject24 || (weapon_templateObject24 = weapon_taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))));
    setChoice(1387, 3);
    combat_Macro.skill($skill(weapon_templateObject25 || (weapon_templateObject25 = weapon_taggedTemplateLiteral(["meteor shower"])))).skill($skill(weapon_templateObject26 || (weapon_templateObject26 = weapon_taggedTemplateLiteral(["Use the Force"])))).setAutoAttack();
    fax($monster(weapon_templateObject27 || (weapon_templateObject27 = weapon_taggedTemplateLiteral(["ungulith"]))));
    (0,external_kolmafia_namespaceObject.use)(template_string_$item(weapon_templateObject28 || (weapon_templateObject28 = weapon_taggedTemplateLiteral(["photocopied monster"]))));
    if ((0,external_kolmafia_namespaceObject.handlingChoice)()) (0,external_kolmafia_namespaceObject.runChoice)(-1);
    _set("_meteorShowerUses", 1 + property_get("_meteorShowerUses"));
  }
}
/*function kungFuMeteors() {
    if (!have($effect`Meteor Showered`) && get("_meteorShowerUses") < 5) {
        uniform();
        if (have($familiar`Disembodied Hand`)) {
            useFamiliar($familiar`Disembodied Hand`);
            equip($slot`weapon`, $item`none`);
            equip($slot`off-hand`, $item`none`);
            equip($slot`familiar`, $item`Fourth of May Cosplay Saber`);
        } else {
            useDefaultFamiliar(false);
        }
        setChoice(1387, 3);
        advMacroAA(
            $location`The Neverending Party`,
            Macro.skill($skill`Meteor Shower`).skill($skill`Use the Force`)
        );
        if (handlingChoice()) runChoice(-1);
        set("_meteorShowerUses", 1 + get("_meteorShowerUses"));
    }
}*/


function weapon_testPrep() {
  if (lib_have(template_string_$item(weapon_templateObject29 || (weapon_templateObject29 = weapon_taggedTemplateLiteral(["corrupted marrow"]))))) (0,external_kolmafia_namespaceObject.use)(template_string_$item(weapon_templateObject30 || (weapon_templateObject30 = weapon_taggedTemplateLiteral(["corrupted marrow"]))));
  if (!property_get("_bowleggedSwaggerUsed")) (0,external_kolmafia_namespaceObject.useSkill)($skill(weapon_templateObject31 || (weapon_templateObject31 = weapon_taggedTemplateLiteral(["Bow-Legged Swagger"]))));
  ;

  if (!property_get("_floundryItemCreated")) {
    setClan(property_get("asmocs_fishClan", "Alliance From Heck"));
    (0,external_kolmafia_namespaceObject.cliExecute)("acquire fish hatchet");
  }

  weaponOutfit();
}

function weaponTest() {
  weapon_castBuffs();
  getCrushed();
  ensureInnerElf();
  kungFuMeteors();
  weapon_testPrep();
  if (weapon_predictor() > 1) throw "Failed to cap weapon damage!";
  modTraceList("weapon damage");
  modTraceList("weapon damage percent");
  return weapon_predictor();
}
;// CONCATENATED MODULE: ./src/index.ts
var src_templateObject;

function src_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }












 //preamble

if ((0,external_kolmafia_namespaceObject.myPathId)() !== 25) (0,external_kolmafia_namespaceObject.abort)();
(0,external_kolmafia_namespaceObject.visitUrl)("council.php");
(0,external_kolmafia_namespaceObject.cliExecute)("ccs twiddle");
PropertyManager.set({
  customCombatScript: "twiddle",
  battleAction: "custom combat script",
  dontStopForCounters: true //logPreferenceChange: false,

});
var startTime = (0,external_kolmafia_namespaceObject.gametimeToInt)();

try {
  testWrapper("wire-coiling", Test.COIL_WIRE, coilWire);
  if ((0,external_kolmafia_namespaceObject.myLevel)() < 15) levelUp(); //want to make sure levelling script completes if it breaks mid-script

  testWrapper("muscle", Test.MUS, muscleTest);
  testWrapper("moxie", Test.MOX, moxTest);
  testWrapper("HP", Test.HP, HPTest);
  testWrapper("mysticality", Test.MYS, mystTest);
  testWrapper("weapon damage", Test.WEAPON, weaponTest);
  testWrapper("spell damage", Test.SPELL, spellTest);
  testWrapper("hot res", Test.HOT_RES, hotTest);
  testWrapper("noncombat", Test.NONCOMBAT, noncombatTest);
  testWrapper("familiar", Test.FAMILIAR, familiarTest);
  testWrapper("item", Test.ITEM, itemTest);
} finally {
  tests.forEach(testDuration => {
    (0,external_kolmafia_namespaceObject.print)("We expected the ".concat(testDuration.testName, " test to take ").concat(testDuration.turnPrediction, " turns, and it cost ").concat(testDuration.turnCost, " turns."), "blue");
  });
  (0,external_kolmafia_namespaceObject.print)("This loop took ".concat(convertMilliseconds((0,external_kolmafia_namespaceObject.gametimeToInt)() - startTime), ", assuming it ran contiguously, for a 1 day, ") + ((0,external_kolmafia_namespaceObject.myTurncount)() - 1) + " turn HCCS run. Organ use was " + (0,external_kolmafia_namespaceObject.myFullness)() + "/" + (0,external_kolmafia_namespaceObject.myInebriety)() + "/" + (0,external_kolmafia_namespaceObject.mySpleenUse)() + ". I drank " + (6 - (0,external_kolmafia_namespaceObject.availableAmount)(template_string_$item(src_templateObject || (src_templateObject = src_taggedTemplateLiteral(["astral pilsner"]))))) + " Astral Pilsners. Otherwise, this run of the program lasted that much time. Hope whatever number you see is good!", "red");
  (0,external_kolmafia_namespaceObject.setAutoAttack)(0);
  PropertyManager.resetAll();
}
})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;