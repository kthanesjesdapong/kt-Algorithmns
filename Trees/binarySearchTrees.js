class BinarySearchTree {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    findNodeAndParent(value) {
        let node = this.root;
        let parent;

        while (node) {
            if (node.value === value) break;
            parent = node;
            node = (value > node.value) ? node.right : node.left;
            return { found: node, parent };
        }
    } 

    add(value) {
        const newNode = new TreeNode(value);
        if (this.root) {
            const {found,parent} = this.findNodeAndParent(value);
            if (found) {
                found.meta.multiplicity = (found.meta.multiplicity || 1 ) + 1; 
            } else if (value < parent.value) parent.left = newNode
            else this.root = newNode

            this.size +=1;;
            return newNode;
        }
    }

    combineLeftIntoRightSubtree(node) {
        if (node.right) {
            const leftmost = this.getLeftMost(node.right);
            leftmost.left = node.left
            return node.right
        }
        return node.left
    }

    remove(value) {
        const nodeToRemove = this.find(value);
        if (!nodeToMore) return false;

    //Combine left and right children into one subtree without nodeToRemove
    const nodeToRemove = this.combineLeftIntoRightSubtree(nodeToRemove);

    if (nodeToRemove.meta.multiplicity && nodeToRemove.meta.multiplicity > 1) nodeToRemove.meta.multiplicity -=1;
        else if (nodeToRemove === this.root) {
        //Replace (root) node to delete with the combined subtree.
            this.root = nodeToRemoveChildren;
            this.root.parent = null;
    } else {
        const side = nodeToRemoveis.isParentLeftChild ? 'left':'right';
        const {parent} = nodeToRemove; //get parent
        //Replace node to delete with the combined subtree.
        parent[side] = nodeToRemoveChildren;
    }
    this.size -= 1;
    return true;
}

/*
Insertion
1. If a tree is empty, the first node beomces the root, and you are done
2. Compare root/parent's value if it's higher go right, if its lower go left, If it's the same, then the value already exist so that you can increase the duplicate count (multiplicity).
3. Repeat#2 until we found an empty slow to insert the new node.

*/