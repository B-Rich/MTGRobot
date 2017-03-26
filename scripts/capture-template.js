var template = Array.prototype.slice.call(document.querySelectorAll('table tbody tr')).reduce((list, current) => {
    var section = current.querySelector('td > strong');
    if (section) {
        var content = current.querySelector('td > textarea');
        list.push({
            section: section.innerHTML,
            content: content.innerHTML
        });
        console.log(section.innerHTML + ':' + content);
        return list;
    }
}, []);