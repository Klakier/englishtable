import * as modelTransformation from './../../Utils/model-transformation';

export function getName() {
    return 'textbox';
}

export function getData($) {
    let text = $('#texbox-input').val().trim();

    return modelTransformation.toTable(text);
}

export function activate($) {}