document.addEventListener("DOMContentLoaded", () => {

    const nameEl = document.querySelector('input#nome');
    const idadeEl = document.querySelector('input#idade');
    const generoEl = document.querySelector('select#genero');
    const btn = document.querySelector('#btn');
    const diretorEl = document.querySelector('input#diretor')
    const atoresEl = document.querySelector('input#atores')

    btn.addEventListener('click', async (e) => {
        let name = nameEl.value;
        let idade = idadeEl.value;
        let genero = generoEl.value;
        let diretor = diretorEl.value;
        let atores = atoresEl.value;

        if(name === "" || idade === "" || genero === "") {
            alert("Você deixou um dos campos em branco: Nome, Idade ou Gênero. Necessita preencher todos os citados")
        } else {
        e.preventDefault()
        console.log("Nome:", name);
        console.log("Idade:", idade);
        console.log("Gênero escolhido:", genero);
        console.log("Diretor de preferência escolhido:", diretor)
        console.log("Ator/Atriz selecionado:", atores)

        nameEl.value = "";
        idadeEl.value = "";
        generoEl.value = "";
        diretorEl.value = "";
        atoresEl.value = "";
        }
    });
});