class Question {
    constructor(name) {
        this.name = name;
        this.state = {};
    }
}

class NeutralizationConcentrationAcid {
    constructor() {
        this.name = "neutralization:c:acid";
        this.state = {
            acid: [
                {h: 1, name: 'HCl'},
                {h: 2, name: 'H<sub>2</sub>SO<sub>4</sub>'},
                {h: 1, name: 'HNO<sub>3</sub>'},
                {h: 2, name: 'H<sub>2</sub>CO<sub>3</sub>'},
                {h: 1, name: 'HNO<sub>2</sub>'},
            ][Math.floor(Math.random() * 5)],
            acidV: Math.round((Math.random() + Number.EPSILON) * 1000)/1000,
            base: [
                {oh: 1, name: 'NaOH'},
                {oh: 2, name: 'Ca(OH)<sub>2</sub>'},
                {oh: 1, name: 'NH<sub>4</sub>OH'},
                {oh: 2, name: 'Mg(OH)<sub>2</sub>'},
            ][Math.floor(Math.random() * 4)],
            baseC: Math.round((Math.random() * 3 + Number.EPSILON) * 1000)/1000,
            baseV: Math.round((Math.random() + Number.EPSILON) * 1000)/1000,
        }
        this.text = `${this.state.acidV}L of ${this.state.acid.name} are neutralized with ${this.state.baseV}L of ${this.state.baseC}M ${this.state.base.name}. What is the concentration of ${this.state.acid.name}? Round to the nearest thousandth. No units necessary.`;
        this.answer = Math.round(
            (((this.state.baseV*this.state.baseC/(this.state.base.oh/this.state.acid.h))/this.state.acidV) + Number.EPSILON) * 1000
        ) / 1000
        console.log(this.state);
    }   
}

class NeutralizationConcentrationBase {
    constructor() {
        this.name = "neutralization:c:base";
        this.state = {
            acid: [
                {h: 1, name: 'HCl'},
                {h: 2, name: 'H<sub>2</sub>SO<sub>4</sub>'},
                {h: 1, name: 'HNO<sub>3</sub>'},
                {h: 2, name: 'H<sub>2</sub>CO<sub>3</sub>'},
                {h: 1, name: 'HNO<sub>2</sub>'},
            ][Math.floor(Math.random() * 5)],
            acidC: Math.round((Math.random() * 3 + Number.EPSILON) * 1000)/1000,
            acidV: Math.round((Math.random() + Number.EPSILON) * 1000)/1000,
            base: [
                {oh: 1, name: 'NaOH'},
                {oh: 2, name: 'Ca(OH)<sub>2</sub>'},
                {oh: 1, name: 'NH<sub>4</sub>OH'},
                {oh: 2, name: 'Mg(OH)<sub>2</sub>'},
            ][Math.floor(Math.random() * 4)],
            baseV: Math.round((Math.random() + Number.EPSILON) * 1000)/1000,
        }
        this.text = `${this.state.baseV}L of ${this.state.base} are neutralized with ${this.state.acidV}L of ${this.state.acidC}M ${this.state.acid.name}. What is the concentration of ${this.state.base.name}? Round to the nearest thousandth. No units necessary.`;
        this.answer = Math.round(
            (this.state.acidV*this.state.acidC/this.state.baseV)/(this.state.acid.h/this.state.base.oh) + Number.EPSILON * 1000
        ) / 1000
    }   
}

class NeutralizationVolumeAcid {
    constructor() {
        this.name = "neutralization:v:acid";
        this.state = {
            acid: [
                {h: 1, name: 'HCl'},
                {h: 2, name: 'H<sub>2</sub>SO<sub>4</sub>'},
                {h: 1, name: 'HNO<sub>3</sub>'},
                {h: 2, name: 'H<sub>2</sub>CO<sub>3</sub>'},
                {h: 1, name: 'HNO<sub>2</sub>'},
            ][Math.floor(Math.random() * 5)],
            acidC: Math.round((Math.random() * 3 + Number.EPSILON) * 1000)/1000,
            base: [
                {oh: 1, name: 'NaOH'},
                {oh: 2, name: 'Ca(OH)<sub>2</sub>'},
                {oh: 1, name: 'NH<sub>4</sub>OH'},
                {oh: 2, name: 'Mg(OH)<sub>2</sub>'},
            ][Math.floor(Math.random() * 4)],
            baseC: Math.round((Math.random() * 3 + Number.EPSILON) * 1000)/1000,
            baseV: Math.round((Math.random() + Number.EPSILON) * 1000)/1000,
        }
        this.text = `${this.state.acidC}M ${this.state.acid.name} is neutralized with ${this.state.baseV}L of ${this.state.baseC}M ${this.state.base.name}. What is the volume of ${this.state.acid.name}? Round to the nearest thousandth. No units necessary.`;
        this.answer = Math.round(
            this.state.baseC*this.state.baseV*this.state.acid.h/this.state.base.oh/this.state.acidC + Number.EPSILON * 1000
        ) / 1000
    }   
}

class NeutralizationVolumeBase {
    constructor() {
        this.name = "neutralization:v:base";
        this.state = {
            acid: [
                {h: 1, name: 'HCl'},
                {h: 2, name: 'H<sub>2</sub>SO<sub>4</sub>'},
                {h: 1, name: 'HNO<sub>3</sub>'},
                {h: 2, name: 'H<sub>2</sub>CO<sub>3</sub>'},
                {h: 1, name: 'HNO<sub>2</sub>'},
            ][Math.floor(Math.random() * 5)],
            acidC: Math.round((Math.random() * 3 + Number.EPSILON) * 1000)/1000,
            acidV: Math.round((Math.random() + Number.EPSILON) * 1000)/1000,

            base: [
                {oh: 1, name: 'NaOH'},
                {oh: 2, name: 'Ca(OH)<sub>2</sub>'},
                {oh: 1, name: 'NH<sub>4</sub>OH'},
                {oh: 2, name: 'Mg(OH)<sub>2</sub>'},
            ][Math.floor(Math.random() * 4)],
            baseC: Math.round((Math.random() * 3 + Number.EPSILON) * 1000)/1000,
        }
        this.text = `${this.state.baseC}M ${this.state.base.name} is neutralized with ${this.state.acidV}L of ${this.state.acidC}M ${this.state.acid.name}. What is the volume of ${this.state.base.name}? Round to the nearest thousandth. No units necessary.`;
        this.answer = Math.round(
            this.state.acidV*this.state.acidC*this.state.base.oh/this.state.acid.h/this.state.baseC + Number.EPSILON * 1000
        ) / 1000
    }   
}

const QUESTION_TYPES = {
    'neutralization:c:acid': NeutralizationConcentrationAcid,
    'neutralization:c:base': NeutralizationConcentrationBase,
    'neutralization:v:acid': NeutralizationVolumeAcid,
    'neutralization:v:base': NeutralizationVolumeBase,
}
