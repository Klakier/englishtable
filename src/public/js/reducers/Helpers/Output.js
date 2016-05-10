/// <reference path="./../../../../typings/main.d.ts" />

import shuffle from '../../../../Utils/shuffle';
import {removeItem} from '../../../../Utils/array-helpers';

class Output {
    constructor(sourceWords, destinationWords) {
        this.sourceWords = [...sourceWords];
        this.destinationWords = [...destinationWords];
    }

    addRow({rowId, sourceWord, destinationWord}) {
        this.sourceWords.push({rowId: rowId, text: sourceWord});
        this.destinationWords.push({rowId: rowId, text: destinationWord});
    }

    removeRow(rowId) {
        removeItem(this.sourceWords, v => v.rowId == rowId);
        removeItem(this.destinationWords, v => v.rowId == rowId);
    }

    textChanged({rowId, sourceWord, destinationWord}) {
        this.sourceWords.find(r => r.rowId === rowId).text = sourceWord;
        this.destinationWords.find(r => r.rowId === rowId).text = destinationWord;
    }

    shuffle() {
        this.sourceWords = shuffle(this.sourceWords);
        this.destinationWords = shuffle(this.destinationWords);
    }

    getResult() {
        return {
            sourceWords: this.sourceWords,
            destinationWords: this.destinationWords
        };
    }
}

const splitToSourceAndDestinationWords = (table) =>
{
    let sourceWords = [];
    let destinationWords = [];
    for(let value of table) {
        sourceWords.push({rowId: value.rowId, text: value.sourceWord});
        destinationWords.push({rowId: value.rowId, text: value.destinationWord});
    }
    
    return {sourceWords, destinationWords};
};

Output.tableChanged = (rows) => {
    const splited = splitToSourceAndDestinationWords(rows);
    
    let output = new Output(splited.sourceWords, splited.destinationWords);
    output.shuffle();
    return output.getResult();
};

Output.init = () => {
    return {
        sourceWords:[],
        destinationWords: []
    };
};


Output.add = (state, row) => {
    let output = new Output(state.sourceWords, state.destinationWords);
    output.addRow(row);
    output.shuffle();
    return output.getResult();
};

Output.remove = (state , rowId) => {
    let output = new Output(state.sourceWords, state.destinationWords);
    output.removeRow(rowId);
    output.shuffle();
    return output.getResult();
};

Output.inputChanged = (state, row) => {
    let output = new Output(state.sourceWords, state.destinationWords);
    output.textChanged(row);
    return output.getResult();
};

export default Output;
