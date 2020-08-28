module.exports = {
    cloneRegExp: ( regex ) => {
        if ('[object RegExp]' === Object.prototype.toString.call(regex)) {
            return new RegExp(regex.source, regex.flags);
        } else {
            const a = regex.split("/");
    
            flags = a.pop(); a.shift();
            pattern = a.join("/");
    
            return new RegExp(pattern, flags);
        }
    },
    createMetaKeywords: function(content, keywordPattern, callback) {
        setTimeout(() => {
            const regex = this.cloneRegExp(keywordPattern);
            
            keywordRaw = regex.exec(content);
            keywords = [];
            
            if (keywordRaw && keywordRaw[1]) {
                for (let keyword of keywordRaw[1].split(",")) {
                    keyword = keyword.trim();
                    keywords.push(keyword);
                }
                callback(keywords, 'keyword');
            }
        }, 0);
    }
}