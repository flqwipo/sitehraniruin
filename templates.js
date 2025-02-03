export const templates = {
    title(block) {
        return <h1>${block.value}</h1>;
    },
    text(block) {
        return <p>${block.value}</p>;
    },
    columns(block) {
        return `
            <nav>
                <ul>
                    ${block.value.map(item => `<li><a href="#">${item}</a></li>`).join('')}
                </ul>
            </nav>
        `;
    },
    image: function (block) {
        return <img src="${block.value}" alt="Изображение" style="max-width:100%;">;
            }
            };})
            }