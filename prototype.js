;
(function (global) {

    var jInit = function(text){
        this.text = text;
        this.val = text;
    }

    var jIn = function(text){
        return new jInit(text);
    }

    var jStringy = jStringy || jIn;

    jInit.prototype.valueOf = function() { return this.val; }
    jInit.prototype.toString = function() { return this.val; }


    jInit.prototype.left = function (num_char) {
        if (num_char == undefined) {
            throw "Number of characters is required!";
        }
        this.val = this.val.substring(0, num_char);
        return this;
    }

    jInit.prototype.right = function (numchar) {
        if (numchar == undefined) {
            throw "Number of characters is required!";
        }
        this.val = this.val.substring(this.val.length - numchar, this.val.length);
        return this;
    }
    
    jInit.prototype.midd  = function (startchar, endchar) {
        this.val = this.val.substring(startchar - 1, endchar);
        return this;
    }
    
    jInit.prototype.mid = function (startchar, numchar) {
        this.val = this.val.substring(startchar - 1, startchar - 1 + numchar);
        return this;
    }
    
    jInit.prototype.reversed = function () {
        var s = this.val;
        for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) {}
        this.val = o;
        return this;
    }
    
    jInit.prototype.wordCount = function () {
        var newtxt = this.val.replace(/,|\.|\:|\;|\?|\!|\(|\)/g, " ");
        newtxt = jStringy(newtxt).trimed().val;
        newtxt = newtxt.split(" ");
        this.val = newtxt.length;
        return this;
    }

    jInit.prototype.trimed = function () {
        this.val = this.val.replace(/ +/g, " ").trim();
        return this;
    }
    
    jInit.prototype.getWordByNum = function (word_number,type) {
        var text = jStringy(this.val).trimed().val;
        var dateArr = text.split(" ");
        
        if (type == 0) {
            this.val = dateArr[dateArr.length - word_number];
        }
        else
        {
            this.val = dateArr[word_number - 1];
        }
        return this;
    }

    jInit.prototype.getWords = function (start_word_number, end_word_number) {
        var text = jStringy(this.val).trimed().val;
        var strArray = text.split(" ");
        var nArr = [];
        var n = 0;
        for (i = start_word_number - 1; i < end_word_number; i++) {
            nArr[n] = strArray[i];
            n++;
        }
        this.val = jStringy(nArr.join(" ")).trimed().val;
        return this;
    }
    
    jInit.prototype.containsWord = function (wordtofind) {
        var nwheretofind = (" " + this.val + " ").toLowerCase();
        var nwordtofind = (" " + wordtofind + " ").toLowerCase();
        nwheretofind = nwheretofind.replace(/,|\.|\:|\;|\?|\!|\(|\)/g, " ");
        if (nwheretofind.indexOf(nwordtofind) >= 0) {
            this.val = true;
        } else {
            this.val = false;
        }
        return this;
    }

    jInit.prototype.repeat = function (numtimes) {
        var ttxt = this.val;
        for (i = 1; i < numtimes; i++) {
            this.val += ttxt
        }
        return this;
    }
    

    global.jStringy = global.S$ = jStringy;

    return this;

}(window));
