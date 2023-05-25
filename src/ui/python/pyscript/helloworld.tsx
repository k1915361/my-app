import type { Component } from "solid-js";
import { PyScript, PyScriptProvider } from "pyscript-solid";

export const HelloWorldPyScript: Component = () => {
    return (
        <div>
            <PyScriptProvider>
                <PyScript src="src/ui/python/pyscript/hello.py"/>
            </PyScriptProvider>
        </div>
    )
}