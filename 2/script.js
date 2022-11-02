const elemCreator = (tag, callback) => {
    const node = document.createElement(tag);
    callback(node);
    return node;
}
document.body.appendChild(elemCreator('div', (node) => {
    node.textContent = 'Test';
    node.style.backgroundColor = 'red';
}));