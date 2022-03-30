const wfSel = (() => {
    let sel, range, content, node, liNode;
  
    return {
      setVariables: () => { 
        sel = window.getSelection();
        if (!sel || sel.getRangeAt(0) == null)return;
        
        range = sel.getRangeAt(0);
        content = range.cloneContents();
        node = document.createElement('span'); 
        liNode = document.createElement('li'); 

      },
      getTEXT() {
        this.setVariables();
        return sel.toString();  
      },
      getHTML() {
        this.setVariables(); 
        node.appendChild(content); 
        return node.innerHTML; 
      },

      replace(text,style) {
        this.setVariables();
        node.innerHTML = text; 
        node.style = style; 
        node.id = 'drtxt'; 
        range.deleteContents();
        range.insertNode(node);
      },

      liReplace(text,style) {
        this.setVariables();
        liNode.innerHTML = text; 
        liNode.style = style; 
        liNode.id = 'drtxt'; 
        range.deleteContents();
        range.insertNode(liNode);
      },

      removeTag: function() {
        this.replace(wfSel.getTEXT());
      },

      getSelectedRange() {
        this.setVariables();
        if(sel.toString() == ""){
          this.setVariables();
          return false;     
        }
        else
        return true;     
      }
    }
  })();