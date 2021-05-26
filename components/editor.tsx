import React from 'react'
import {UnControlled as CodeMirrorControl} from 'react-codemirror2'
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/javascript/javascript';

const Editor = (props) => {
    CodeMirror.defineMode("rexs", function() {
        return {
            startState: function() {return {stage: 0, depth: 0}},
            // @ts-ignore
            token: function(stream, state) {
                if(state.stage === 0) {
                    stream.eatSpace();

                    if(stream.peek() === "}") {
                        state.depth--;
                        stream.next();
                        return "operator";
                    }

                    if(!stream.eol()) state.stage = 1;

                    return null;
                }

                if(state.stage === 1){
                    stream.eatWhile(inp => {
                        return inp !== "(";
                    });

                    state.stage = 2;
                    return "variable";
                }

                if(state.stage === 2){
                    stream.next();

                    state.stage = 3;

                    return "operator";
                }

                if(state.stage === 3){
                    stream.eatWhile(inp => {
                        return inp !== ")";
                    });

                    state.stage = 4;

                    return "keyword";
                }

                if(state.stage === 4){
                    stream.next();

                    state.stage = 5;

                    return "operator";
                }

                if(state.stage === 5){
                    stream.eatWhile(inp => {
                        return !stream.eol() && ![";", "{"].includes(inp);
                    });
                    if(stream.next() === "{") {
                        state.depth++;
                    }

                    state.stage = 0;

                    return "operator";
                }
            },
            indent: function(state, textAfter) {
                console.log(textAfter, textAfter.split("").filter(text => text === "}"));
                return Math.max(4 * (state.depth - textAfter.split("").filter(text => text === "}").length), 0);
            }
        };
    });

    return (
        <>
            <CodeMirrorControl
                {...props}
                value={props.value}
                options={{theme: 'material', mode: 'rexs', lineNumbers: true, gutter: true, lineWrapping: true}}
                onChange={() => null}
                lineNumbers={true}
                gutter={true}
                lineWrapping={true}
            />
        </>
    );
}

export default Editor;