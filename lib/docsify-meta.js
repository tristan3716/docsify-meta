(function () {
    const metaFieldName = 'META FIELD';
    const head = Docsify.dom.find('head');

    let $metaFieldStart = null;
    let $metaFieldEnd = null;

    let _$contentTitle = null;
    
    const isArray = (arguments) => {
        return Object.prototype.toString.call(arguments) === '[object Array]';
    }
    const isRegExp = (arguments) => {
        return Object.prototype.toString.call(arguments) === '[object RegExp]';
    }
    const isString = (arguments) => {
        return Object.prototype.toString.call(arguments) === '[object String]';
    }

    const createMetaTag = (content, name = null) => {
        const meta = Docsify.dom.create('meta');
        if (name) {
            meta.name = name;
        }
        if (isArray(content)) {
            meta.content = content.join(' ');
        } else {
            meta.content = content;
        }
    
        head.insertBefore(meta, $metaFieldEnd);
    }

    const createMetaTitle = () => {
        const title = _$contentTitle || Docsify.dom.$.title;
        const titleNode = Docsify.dom.find('head title');
        titleNode.textContent = title;

        head.removeChild(titleNode);
        head.insertBefore(titleNode, $metaFieldStart);
    }

    const createMetaDescription = (content) => {
        let copied = content;
        copied = copied.replace(/(\r\n|\n)+/g, '\r\n');
        copied = copied.replace(/#+ /g, '');
        copied = copied.replace(/<[^>]*>/g, '');

        copied = copied.slice(0, 160);

        createMetaTag(copied, 'description');
    }

    const keyword = require('./docsify-meta-keyword.js');

    const getContentTitle = (content) => {
        const title = /^(.*)(?:\r\n|\n)/g.exec(content);
        if (title && title[1]) {
            title[1] = title[1].replace(/# /g, '');
            return title[1];
        } else {
            return null;
        }
    }

    const removeMetaDatas = () => {
        while ($metaFieldStart.nextSibling !== $metaFieldEnd) {
            head.removeChild($metaFieldStart.nextSibling);
        }
    }

    const CONFIG = {
        aggressiveTitle: false,
        author: false,
        keyword: true,
        description: true,
        keywordPattern: /keyword: *(.*)(?:\r\n|\n)*$/g, // RegExp or String
    };

    var install = (hook, vm) => {
        let opt = vm.config.meta || CONFIG;

        CONFIG.author = opt.author || CONFIG.author;
        if (!isString(CONFIG.author)) {
            CONFIG.author = false;
        }
        CONFIG.aggressiveTitle = opt.aggressiveTitle || CONFIG.aggressiveTitle;
        CONFIG.description = opt.description || CONFIG.description;
        CONFIG.keywordPattern = opt.keywordPattern || CONFIG.keywordPattern;
        CONFIG.keyword = CONFIG.keywordPattern ? true : (opt.keyword || CONFIG.keyword);
        if (CONFIG.keyword 
            && !isRegExp(CONFIG.keywordPattern)
            && !isString(CONFIG.keywordPattern)) {
            CONFIG.keyword = false;
        }

        hook.mounted(() => {
            $metaFieldStart = document.createComment(metaFieldName);
            Docsify.dom.find('head').appendChild($metaFieldStart);

            $metaFieldEnd = document.createComment(metaFieldName);
            Docsify.dom.find('head').appendChild($metaFieldEnd);

            const metaDescription = Docsify.dom.find('meta[name="description"]');
        
            if (metaDescription) {
                Docsify.dom.find('head').removeChild(metaDescription);
            }
        });

        hook.beforeEach((content) => {
            removeMetaDatas();
            
            if (CONFIG.aggressiveTitle) {
                _$contentTitle = getContentTitle(content);
            }
            if (CONFIG.keyword) {
                keyword.createMetaKeywords(content, CONFIG.keywordPattern, createMetaTag);
            }

            if (CONFIG.description) {
                createMetaDescription(content);
            }
        });

        hook.doneEach(() => {
            if (CONFIG.aggressiveTitle) {
                createMetaTitle();
            }

            if (CONFIG.author) {
                createMetaTag(CONFIG.author, 'author');
            }
        })
    };
  
    $docsify.plugins = [].concat(install, $docsify.plugins);
}());