// Variáveis Globais
const appContent = document.getElementById('app-content');
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

// --- 1. Lógica de Navegação Dinâmica ---

// Conteúdo das "páginas"
const pages = {
    home: `
        <section id="home-section" class="page-content active">
            <div class="hero-section animate__animated animate__fadeInDown">
                <h1>Sua Festa Incrível Começa Aqui!</h1>
                <p>Aluguel de kits "Pegue e Monte" para tornar seu evento inesquecível com elegância e economia.</p>

                <!-- BOTÃO CORRIGIDO -->
                <a href="https://drive.google.com/drive/folders/1K5yJ361jtUQf3QReyjWmUUArGkAy2c5g?usp=sharing" class="cta-button">
                    Veja nosso portfólio completo de temas
                </a>
            </div>

            <h2 class="animated-element">✨ Pegue e Monte: Como Funciona?</h2>
            <div class="kits-grid animated-element">
                <div class="kit-card">
                    <i class="fas fa-box fa-3x" style="color: var(--color-primary);"></i>
                    <h3>1. Alugue</h3>
                    <p>Escolha o kit ideal em nosso portfólio.</p>
                </div>
                <div class="kit-card">
                    <i class="fas fa-truck-loading fa-3x" style="color: var(--color-primary);"></i>
                    <h3>2. Retire e Monte</h3>
                    <p>Você retira, transporta, monta e decora.</p>
                </div>
                <div class="kit-card">
                    <i class="fas fa-undo-alt fa-3x" style="color: var(--color-primary);"></i>
                    <h3>3. Devolva</h3>
                    <p>Devolva os itens no prazo.</p>
                </div>
            </div>
        </section>
    `,
    quemsomos: `
        <section id="about-section" class="page-content">
            <h2 class="animated-element">Quem Somos e o Conceito Pegue e Monte</h2>
            <div class="about-details">
                <div class="about-text animated-element">
                    <h2>Nossa Missão</h2>
                    <p>A <strong>Glipearte Pegue e Monte</strong> nasceu com o objetivo...</p>
                    <h2>O Conceito Pegue e Monte</h2>
                    <p>O conceito é desenhado para autonomia e economia:</p>
                    <ul>
                        <li><i class="fas fa-hand-holding-box"></i> Cliente aluga os kits.</li>
                        <li><i class="fas fa-car"></i> Ele é responsável por retirada, montagem e devolução.</li>
                        <li><i class="fas fa-shield-alt"></i> Itens devem ser devolvidos sem avarias.</li>
                    </ul>
                </div>
                <div class="about-image animated-element">
                    <img src="conceito.png" alt="Ilustração do conceito Pegue e Monte">
                </div>
            </div>
        </section>
    `,
    portfolio: `
        <section id="portfolio-section" class="page-content">
            <h2 class="animated-element">Portfólio & Galeria</h2>
            <p class="animated-element">Veja nossos kits em ação.</p>

            <div class="portfolio-grid">
                <div class="portfolio-item animated-element">
                    <img src="kit-basico.jpg" alt="Kit Bronze" width="280" height="360">
                    <h3>Kit Básico</h3>
                    <p>Simples e impactante.</p>
                </div>
                <div class="portfolio-item animated-element">
                    <img src="kit-charme.jpg" alt="Kit Prata" width="280" height="360">
                    <h3>Kit Charme</h3>
                    <p>Destaque para painel redondo.</p>
                </div>
                <div class="portfolio-item animated-element">
                    <img src="kit-encanto.jpg" alt="Kit Ouro" width="280" height="360">
                    <h3>Kit Encanto</h3>
                    <p>Combinação com peças personalizadas.</p>
                </div>
                <div class="portfolio-item animated-element">
                    <img src="kit-elegance.jpg" alt="Kit Ouro" width="280" height="360">
                    <h3>Kit Elegance</h3>
                    <p>Um toque de elegância</p>
                </div>
                <div class="portfolio-item animated-element">
                    <img src="kit-premium.jpg" alt="Kit Ouro" width="280" height="360">
                    <h3>Kit Premium</h3>
                    <p>Qualidade que encanta.</p>
                </div>


            </div>
        </section>
    `,
    orcamento: `
        <section id="budget-section" class="page-content budget-section">
            <h2 class="animated-element">Tabela de Orçamento - Kits e Opcionais</h2>
            <p class="animated-element" style="text-align: center;">Selecione o kit ideal!</p>

            ${generateBudgetTable()}

            <p class="animated-element" style="text-align: center; font-weight: 600; margin-top: 30px;">
                <i class="fas fa-exclamation-triangle" style="color: orange;"></i>
                As capas e kits não acompanham mesa.
            </p>
        </section>
    `,
    contato: `
        <section id="contact-section" class="page-content">
            <h2 class="animated-element">Fale Conosco</h2>
            <p class="animated-element" style="text-align: center;">Atendimento rápido!</p>

            <div class="contact-form animated-element">
                <form id="contactForm">
                    <div class="form-group">
                        <label for="name">Nome Completo</label>
                        <input type="text" id="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">E-mail</label>
                        <input type="email" id="email" required>
                    </div>
                    <div class="form-group">
                        <label for="phone">Telefone / WhatsApp</label>
                        <input type="tel" id="phone">
                    </div>
                    <div class="form-group">
                        <label for="message">Mensagem</label>
                        <textarea id="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" class="cta-button">Enviar Mensagem</button>
                </form>
            </div>
        </section>
    `
};

// Gera tabela
function generateBudgetTable() {
    return `
        <table class="budget-table animated-element">
            <caption>Kits Pegue e Monte</caption>
            <thead>
                <tr>
                    <th>Item/Kit</th>
                    <th>Descrição</th>
                    <th style="text-align:right;">Valor (R$)</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>Capa p/ 1 mesa</td><td>Não acompanha mesa</td><td class="price-value">60,00</td></tr>
                <tr><td>Capa p/ 2 mesas</td><td>Não acompanha mesa</td><td class="price-value">75,00</td></tr>
                <tr><td class="not_mapped_style" style="text-align: center" colspan="3"><strong>Retirada, montagem e devolução por conta do cliente</strong></td></tr>
                <tr><th colspan="3">KIT BRONZE</th></tr>
                <tr><td>Opção 1</td><td>1 painel 50cm; 1 jarro; 3 bandejas; 1 boleira; 1 display</td><td class="price-value">70,00</td></tr>
                <tr><td>Opção 2</td><td>1 painel 50cm; 1 jarro; 4 bandejas; 1 boleira; 2 displays; 1 mini-arco de balões</td><td class="price-value">130,00</td></tr>
                <tr><td>Opção 3</td><td>1 painel 50cm; 1 jarro; 4 bandejas; 1 boleira; 3 displays; 1 mini-arco de balões com fio de fada (pisca-pisca) e mesa ripada quadrada.</td><td class="price-value">200,00</td></tr>
                <tr><td class="not_mapped_style" style="text-align: center" colspan="3"><strong>Retirada, montagem e devolução por conta do cliente</strong></td></tr>
                <tr><th colspan="3">KIT PRATA</th></tr>
                <tr><td><strong>Peças:</strong>1 painel redondo 1.20m; 3 cilindros; 1 jarro; 2 bandejas; 1 boleira; 1 boleira cake; 2 displays</td><td></td><td class="price-value">250,00</td></tr>
                <tr><td colspan="3"><strong>Opcionais:</strong> Escadinha – R$ 20,00; Arco de balões – R$ 200,00</td></tr>

                <tr><td class="not_mapped_style" style="text-align: center" colspan="3"><strong>Retirada, montagem e devolução por conta do cliente</strong></td></tr>
                <tr><th colspan="3">KIT OURO</th></tr>
                <tr><td><strong>Peças:</strong>1 painel redondo 1.20m; 1 painel retangular 1.50m x 2.20m; 3 cilindros; 1 jarro; 3 bandejas; 1 boleira; 1 tapete; 2 displays</td><td></td><td class="price-value">350,00</td></tr>
                <tr><td class="not_mapped_style" style="text-align: center" colspan="3"><strong>Opcionais:</strong> Escadinha – R$ 20,00; Arco de balões – R$ 200,00</td></tr>
                <tr><td class="not_mapped_style" style="text-align: center" colspan="3"><strong>Retirada, montagem e devolução por conta do cliente</strong></td></tr>
                <tr><th colspan="3">BALÕES</th></tr>
                <tr><td>Caixa de Balão Presente</td><td></td><td class="price-value">15,00</td></tr>
                <tr><td>Árvore de Natal</td><td></td><td class="price-value">55,00</td></tr>
                <tr><td>Box de Balão Natalino 1</td><td></td><td class="price-value">35,00</td></tr>
                <tr><td>Box de Balão Natalino 2</td><td></td><td class="price-value">40,00</td></tr>
                <tr><td>Box de Balão Natalino 3</td><td></td><td class="price-value">65,00</td></tr>
                <tr><td>Box de Balão Ano Novo Estrela Dourada<td></td></td><td class="price-value">45,00</td></tr>
                <tr><td class="not_mapped_style" style="text-align: center" colspan="3"><strong>Retirada por conta do cliente</strong></td></tr>
                <tr><th colspan="3">ARCOS E GUIRLANDA DE BALÕES</th></tr>
                <tr><td>Mini Arco de Balões (Para painel 50cm x 50cm)</td><td></td><td class="price-value">40,00</td></tr>
                <tr><td>Arco de Balões Simples</td><td></td><td class="price-value">200,00</td></tr>
                <tr><td>Arco de Balões Metalizados</td><td></td><td class="price-value">300,00</td></tr>
                <tr><td>Guirlanda de Balão Para Mesa</td><td></td><td class="price-value">60,00</td></tr>
                <tr><td class="not_mapped_style" style="text-align: center" colspan="3"><strong>Retirada por conta do cliente</strong></td></tr>
            </tbody>
        </table>
    `;
}

// Renderiza página
function renderPage(pageName) { 
    const oldContent = appContent.querySelector('.page-content');
    if (oldContent) {
        oldContent.classList.remove('active');
        oldContent.classList.add('animate__animated', 'animate__fadeOut');
    }

    setTimeout(() => {
        appContent.innerHTML = pages[pageName] || pages.home;

        const newContent = appContent.querySelector('.page-content');
        if (newContent) {
            newContent.classList.add('active', 'animate__animated', 'animate__fadeIn');
            setupScrollReveal();
        }

        if (window.innerWidth <= 768) {
            mainNav.classList.remove('active');
        }

        window.scrollTo({ top: document.querySelector('.main-header').offsetHeight, behavior: 'smooth' });

    }, oldContent ? 300 : 0);
}

// --- NOVA NAVEGAÇÃO UNIVERSAL ---
// Funciona para QUALQUER elemento com data-page
document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-page]');
    if (!el) return;

    e.preventDefault();
    const pageName = el.dataset.page;

    history.pushState({ page: pageName }, '', `#${pageName}`);
    renderPage(pageName);
});

// Menu mobile
menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Popstate
window.addEventListener('popstate', (e) => {
    const pageName = e.state ? e.state.page : 'home';
    renderPage(pageName);
});

// Formulário
document.addEventListener('submit', async (e) => {
    if (e.target.id === 'contactForm') {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        try {
            // 🔥 1. Salvar no Firestore
            const db = firebase.firestore();
            await db.collection("mensagens").add({
                name, email, phone, message,
                data: new Date().toISOString()
            });

            // 🔥 2. Enviar e-mail via EmailJS
            await emailjs.send("service_3wf8f97", "template_wq6csx9", {
                nome: name,
                email: email,
                telefone: phone,
                mensagem: message
            });

            alert("Mensagem enviada com sucesso! Verifique seu e-mail.");
            e.target.reset();

        } catch (error) {
            console.error("Erro ao enviar:", error);
            alert("Erro ao enviar mensagem. Tente novamente.");
        }
    }
});

// Scroll Reveal
function setupScrollReveal() {
    const animatedElements = document.querySelectorAll('.animated-element');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show', 'animate__fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    });

    animatedElements.forEach(el => observer.observe(el));
}

// Inicialização
window.addEventListener('DOMContentLoaded', () => {
    const initialPage = window.location.hash ? window.location.hash.substring(1) : 'home';
    history.replaceState({ page: initialPage }, '', `#${initialPage}`);
    renderPage(initialPage);
});
