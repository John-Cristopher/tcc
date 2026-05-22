/**
 * Script da Landing Page Profissional
 */

document.addEventListener('DOMContentLoaded', () => {

    // Seleção de elementos
    const cabecalhoPrincipal = document.getElementById('cabecalho-principal');
    const barraNav = document.getElementById('barra-nav');
    const btnMenu = document.getElementById('botao-menu');
    const menuMovel = document.getElementById('menu-movel');

    /**
     * 1. Lógica do Cabeçalho Flutuante (Floating Header)
     */
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Estado Flutuante
            cabecalhoPrincipal.classList.add('pt-4'); // Adiciona espaçamento superior
            barraNav.classList.add('rounded-full', 'shadow-lg', 'border', 'border-slate-200/50');
            barraNav.classList.remove('rounded-none');
        } else {
            // Estado Inicial (Topo)
            cabecalhoPrincipal.classList.remove('pt-4');
            barraNav.classList.remove('rounded-full', 'shadow-lg', 'border', 'border-slate-200/50');
            barraNav.classList.add('rounded-none');
        }
    });

    /**
     * 2. Toggle do Menu Mobile
     */
    if (btnMenu && menuMovel) {
        btnMenu.addEventListener('click', () => {
            menuMovel.classList.toggle('hidden');
            // Opcional: Adicionar animação de fade
        });

        // Fecha o menu ao clicar em um link
        const linksMoveis = menuMovel.querySelectorAll('a');
        linksMoveis.forEach(link => {
            link.addEventListener('click', () => {
                menuMovel.classList.add('hidden');
            });
        });
    }

    console.log("Interface carregada com sucesso.");
});