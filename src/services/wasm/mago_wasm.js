import * as wasm from "./mago_wasm_bg.wasm";
export * from "./mago_wasm_bg.js";
import { __wbg_set_wasm } from "./mago_wasm_bg.js";
__wbg_set_wasm(wasm);