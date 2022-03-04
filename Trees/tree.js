
class TreeNode {
    constructor(value) {
        this.value = value;
        this.descendants = [];
        this.parent = null;
    }

    get left() {
        return this.descendants[LEFT];
    }

    set left(node) {
        this.descendants = node;
        if (node) node.parent = this;
    }

    get right() {
        return this.descendants[RIGHT];
    }

    set right (node) {
        this.descendants[RIGHT] = node;
        if (node) node.parent = this;
    }
}


//creating nodes with vals
const abe = new TreeNode('Abe');
const homer = new TreeNode('Homer');
const bart = new TreeNode('Bart');
const lisa = new TreeNode('Lisa');
const maggie = new TreeNode('Maggie');

//associate root with its decendants

abe.descendants.push(homer);
homer.parent = abe
homer.descendants.push(bart,lisa,maggie);
console.log(abe.descendants)