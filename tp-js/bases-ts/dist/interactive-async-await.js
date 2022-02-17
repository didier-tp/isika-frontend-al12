"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractiveComputer = void 0;
//NB:  process.stdin n'est reconnu ici par typescript 
//que si dépendance "@types/node": "^14.11.2" dans package.json
var stdin = process.stdin;
var stdout = process.stdout;
var InteractiveComputer = /** @class */ (function () {
    function InteractiveComputer() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }
    InteractiveComputer.ask_ = function (question) {
        return new Promise(function (resolve, reject) {
            stdin.resume();
            stdout.write(question + ": ");
            stdin.once('data', function (data) {
                var dataAsString = data.toString().trim();
                if (dataAsString == "fin")
                    reject("end/reject");
                else
                    resolve(dataAsString);
            });
        });
    };
    /*
    static async ask_(question : string)  {
        stdin.once('data', function(data : Buffer) {
            let dataAsString = data.toString().trim();
            if(dataAsString=="fin")
               throw  "end/reject";
            else
               return dataAsString;
        });
    }
    //ne fonctionne pas bien .
    */
    InteractiveComputer.prototype.ask_and_compute_x_plus_y = function () {
        return __awaiter(this, void 0, void 0, function () {
            var valX, valY, res, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, InteractiveComputer.ask_("x")];
                    case 1:
                        valX = _a.sent();
                        this.x = Number(valX);
                        return [4 /*yield*/, InteractiveComputer.ask_("y")];
                    case 2:
                        valY = _a.sent();
                        this.y = Number(valY);
                        res = this.x + this.y;
                        console.log("(x+y)=" + res);
                        return [2 /*return*/, res];
                    case 3:
                        e_1 = _a.sent();
                        console.log(e_1);
                        throw new Error("xPlusY-error:" + e_1);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    InteractiveComputer.prototype.ask_and_compute_x_plus_y_fois_z = function () {
        return __awaiter(this, void 0, void 0, function () {
            var xPlusY, valZ, res, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.ask_and_compute_x_plus_y()];
                    case 1:
                        xPlusY = _a.sent();
                        return [4 /*yield*/, InteractiveComputer.ask_("z")];
                    case 2:
                        valZ = _a.sent();
                        this.z = Number(valZ);
                        res = xPlusY * this.z;
                        console.log("(x+y)*z=" + res);
                        process.exit();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.log(err_1);
                        process.exit();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return InteractiveComputer;
}());
exports.InteractiveComputer = InteractiveComputer;
//petit test:
var interactiveComputer = new InteractiveComputer();
interactiveComputer.ask_and_compute_x_plus_y_fois_z();
//# sourceMappingURL=interactive-async-await.js.map