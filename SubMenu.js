class SubMenu extends Menu {
    constructor(href, title, id, className){
        super(id, className);
        this.href = href;
        this.title = title;
    }
    render() {
        return `<li><a href="${this.href}">${this.title}</a>${super.render()}</li>`;
    }
}