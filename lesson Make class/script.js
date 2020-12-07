
window.onload = function() {

    let parent = document.querySelector('#parent');
    
    class Options {
    constructor(height, width, fontsize, color) {
        this.height = height;
        this.width = width;      
        this.fontsize = fontsize;
        this.color = color;
       
    }
 
    createDiv (e) {
         let div = document.createElement('div');
         div.className = 'someClass';
         div.innerHTML = e;
         div.style.cssText = `height: ${this.height}px; width: ${this.width}px; fontsize: ${this.fontsize}px; color: ${this.color}`;
         parent.appendChild(div);
    }
 }
 
 const complete = new Options(300, 400, 500, 'red');
 console.log(complete.createDiv('привет мир'));

};

