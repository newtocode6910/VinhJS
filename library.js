export function button(style_class='btn-default',function_id='',title='click me')
{return `<button class='${style_class}' id='${function_id}'>'${title}'</button>`}
export function searchBar(class_style, function_id, title) {
    return `
        <div>
            <input 
                type="text" 
                class="${class_style}" 
                id="${function_id}" 
                placeholder="${title}" 
                autocomplete="off"
            />
        </div>
    `;
}
;
export class Pages{constructor(pagename,innerHTML='',Default=false){this.name=pagename;this.noi_dung = document.createElement('div');
        this.noi_dung.classList.add(pagename);
        this.noi_dung.innerHTML = innerHTML;if (Default === false) {
            this.noi_dung.style.display = 'none'};document.body.appendChild(this.noi_dung);}}
;
export function Hide_pages(Page){Page.noi_dung.style.display='none'};
export function Open_pages(Page){Page.noi_dung.style.display=''};
