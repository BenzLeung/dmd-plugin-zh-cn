exports.generatedDate = function(){
    return new Date().toUTCString();
};

function kindInChinese(kind) {
    var zh = {
        'class': '类(class)',
        'constant': '常量(const)',
        'event': '事件(event)',
        'external': '外部成员(external)',
        'file': '文件(file)',
        'function': '函数(function)',
        'member': '成员(member)',
        'mixin': '混入对象(mixin)',
        'module': '模块(module)',
        'namespace': '命名空间(namespace)',
        'typedef': '自定义类型(typedef)'
    };
    return zh[kind];
}

exports.kindInChinese = function () {
    return kindInChinese(this.kind);
};

exports.kindInThisContextInChinese = function (options) {
    if (this.kind === 'function' && this.memberof) {
        return '方法(method)'
    } else if (this.kind === 'member' && !this.isEnum && this.memberof) {
        return '属性(property)'
    } else if (this.kind === 'member' && this.isEnum && this.memberof) {
        return '枚举属性(enum property)'
    } else if (this.kind === 'member' && this.isEnum && !this.memberof) {
        return '枚举类型(enum)'
    } else if (this.kind === 'member' && this.scope === 'global') {
        return '变量(variable)'
    } else {
        return kindInChinese(this.kind)
    }
};

exports.scopeInChinese = function (options) {
    var zh = {
        'global': '全局',
        'static': '静态',
        'instance': '接口',
        'inner': '内部'
    };
    return zh[this.scope] || this.scope;
};

function titleCase(string) {
    return string[0].toUpperCase() + string.slice(1)
}

exports.customTagsInChinese = function (tagName) {
    var zh = {
        'fulfil': '完成回调',
        'fulfill': '完成回调',
        'fulfilled': '完成回调',
        'resolve': '完成回调',
        'resolved': '完成回调',
        'reject': '拒绝回调',
        'rejected': '拒绝回调'
    };
    return zh[tagName] || titleCase(tagName);
};
