import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  template: `
    <div class="footer">
      <div class="footer-desktop-width">
        <div class="footer-wrapper container">
          <!-- Seção da Marca -->
          <div class="footer-brand">
            <img
              src="assets/img/ossain-footer-logo.png"
              width="150"
              alt="logo"
            />
            <!-- Mídias sociais -->
            <div class="footer-socials">
              <p>Nossas mídias</p>
              <!-- Instagram -->
              <div class="social-media" id="instagram">
                <i class="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>

          <!-- Acesso Rápido -->
          <div class="footer-menu">
            <ul>
              <p>Acesso Rápido</p>
              <li routerLink="/">Página Inicial</li>
              <li routerLink="/contact/">Entrar em contato</li>
              <li>Sobre nós</li>
            </ul>
          </div>

          <!-- Institucional -->
          <div class="footer-menu">
            <ul>
              <p>Institucional</p>
              <li>Documentação</li>
              <li>Termos de Serviço</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-mobile-width">
        <div class="footer-wrapper container">
          <div class="footer-accordion">
            <button class="accordion-title">Acesso Rápido</button>
            <div class="accordion-content">
              <ul>
                <li>Página Inicial</li>
                <li>Entrar em Contato</li>
                <li>Sobre nós</li>
              </ul>
            </div>

            <button class="accordion-title">
              Acesso Rápido
            </button>
            <div class="accordion-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <button class="accordion-title">
              Acesso Rápido
            </button>
            <div class="accordion-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Footer -->
      <div class="footer-bottom container">
        <p>Feito com ❤️ por Bulbasaur Group</p>
      </div>
    </div>
  `,
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var accordionTitles = document.querySelectorAll(".accordion-title");
    var statusArray = document.querySelectorAll(".accordion-title i");

    accordionTitles.forEach((accordionTitle) => {
      accordionTitle.addEventListener("click", () => {
        if (accordionTitle.classList.contains("active")) {
          accordionTitle.classList.remove("active");
        } else {
          const accordionTitleActivated = document.querySelectorAll(".active");
          const statusActivated = document.querySelectorAll(".fa-minus");

          accordionTitleActivated.forEach((accordionTitleActivated) => {
            accordionTitleActivated.classList.remove("active");
          });

          accordionTitle.classList.add("active");
        }
      });
    });
  }
}
