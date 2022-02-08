import { createSimpleExpression } from "@vue/compiler-core";
import axios from "axios";
import apiRouters from "../../views/apiRoutes";

export default {
    state: {
        treeExport: [],
    },
    getters: {
        getTreeExport: (state) => {
            return state.treeExport;
        }
    },
    mutations: {
        setTreeExport: (state, data) => {
            state.treeExport = data;
        }
    },
    actions: {
        fetchTreeExport(ctx) {
            return createSimpleExpression(1).then(function (doneStr) {
                return axios.get(apiRouters.treeExport).then((res) => {
                    ctx.commit("setTreeExport", res.data)
                });
            });
        }
    }

};

function sleep(sec) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => { resolve("done!"); }, sec * 1000)
    })
}