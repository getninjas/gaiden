import Facebook from '../../../../public/media_icons/facebook.svg';
import Instagram from '../../../../public/media_icons/instagram.svg';
import Twitter from '../../../../public/media_icons/twitter.svg';
import Youtube from '../../../../public/media_icons/youtube.svg';
import AppAndroid from '../../../../public/media_icons/app-android.jpg';
import AppApple from '../../../../public/media_icons/app-apple.jpg';
import Logo from '../../../../public/images/Logo_brand.png';
import MexFlag from '../../../../public/images/mexico.svg';

export default {
  title: 'Components | Footer',
  parameters: {
    componentSubtitle: 'Page footer with componentes',
  },
};

import './_index.scss';
import '../heading/_index.scss';
import '../list-link/_index.scss';

export const Footer = () =>
`<div class="docs">
  <footer class="footer footer__container">
    <div class="footer__box">
      <nav class="footer__block">
        <div class="footer__content">
          <div class="lists">
            <h3 class="heading heading--xs listing__title">Serviços</h3>
            <div class="listing__wrapper">
              <ul class="lists">
                <li class="lists__item">
                  <a class="lists__link" target="#" href="https://www.getninjas.com.br/assistencia-tecnica">
                  Assistência Técnica</a>
                </li>
                <li class="lists__item">
                  <a class="lists__link" target="#" href="https://www.getninjas.com.br/aulas">
                  Aulas</a>
                </li>
                <li class="lists__item">
                  <a class="lists__link" target="#" href="https://www.getninjas.com.br/autos">
                  Autos</a>
                </li>
                <li class="lists__item">
                  <a class="lists__link" target="#" href="https://www.getninjas.com.br/consultoria">
                  Consultoria</a>
                </li>
                <li class="lists__item">
                  <a class="lists__link" target="#" href="https://www.getninjas.com.br/design-e-tecnologia">
                  Design e Tecnologia</a>
                </li>
              </ul>
              <ul class="lists">
                <li class="lists__item">
                  <a class="lists__link" target="#" href="https://www.getninjas.com.br/eventos">
                  Eventos</a>
                </li>
                <li class="lists__item">
                  <a class="lists__link" target="#" href="https://www.getninjas.com.br/moda-e-beleza">
                  Moda e Beleza</a>
                </li>
                <li class="lists__item">
                  <a class="lists__link" target="#" href="https://www.getninjas.com.br/reformas">
                  Reformas</a>
                </li>
                <li class="lists__item">
                  <a class="lists__link" target="#" href="https://www.getninjas.com.br/
                saude">
                Saúde</a>
                </li>
                <li class="lists__item">
                  <a class="lists__link" target="#" href="https://www.getninjas.com.br/servicos-domesticos">
                  Serviços Domésticos</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="lists">
            <h3 class="heading heading--xs listing__title">Institucional</h3>
            <div class="listing__wrapper">
              <ul class="lists">
                <li class="lists__item">
                  <a class="lists__link" href="/quem-somos">
                  Quem somos</a>
                </li>
                <li class="lists__item">
                  <a class="lists__link" href="/vagas">
                  Trabalhe conosco</a>
                </li>
                <li class="lists__item">
                  <a class="lists__link" href="http://comunicacao.getninjas.com.br/selo-ninja-verificado">
                  Profissionais verificados</a>
                </li>
                <li class="lists__item">
                <a class="lists__link" href="/guia">
                Guia do GetNinjas</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer__links">
          <div class="footer__links-press">
            <div class="lists">
              <h3 class="heading heading--xs listing__title">Redes Sociais</h3>
              <ul class="lists__group lists--flex">
                <li class="lists__social-media">
                  <a href="" target="_blank">
                    <img src="${Instagram}"/>
                  </a>
                </li>
                <li class="lists__social-media">
                  <a href="" target="_blank">
                    <img src="${Facebook}"/>
                  </a>
                </li>
                <li class="lists__social-media">
                  <a href="" target="_blank">
                    <img src="${Twitter}"/>
                  </a>
                </li>
                <li class="lists__social-media">
                  <a href="" target="_blank">
                    <img src="${Youtube}"/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer__figures">
            <div class="lists lists--downloads">
            <h3 class="heading heading--xs listing__title">
            Downloads
            </h3>
            <ul class="lists__group">
              <li class="lists__item">
                <a target="_blank"
                href="https://play.google.com/store/apps/details?id=br.com.getninjas.pro&referrer=utm_source%3Dgetninjas%26utm_medium%3Dsite%26utm_campaign%3Dhome">
                  <img class="lists__item--app" src=${AppAndroid} alt="Button google play">
                </a>
              </li>
              <li class="lists__item">
                <a target="_blank"
                href="https://play.google.com/store/apps/details?id=br.com.getninjas.pro&referrer=utm_source%3Dgetninjas%26utm_medium%3Dsite%26utm_campaign%3Dhome">
                  <img class="lists__item--app" src=${AppApple} alt="Button google play">
                </a>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </nav>
      <div class="footer__foundation">
        <div class="footer__element">
          <a href="#">
            <img alt="GetNinjas" class="footer__image" src="${Logo}">
          </a>
        </div>
        <div class=" footer__element footer__foundation-tool">
          <ul class="footer__channels">
            <li class="footer__item">
              <a class="caption caption--strong" href="https://www.getninjas.com.br/imprensa">Imprensa</a>
            </li>
            <li class="footer__item">
              <a class="caption caption--strong" href="/ajuda">Ajuda</a>
            </li>
            <li class="footer__item">
              <a class="caption caption--strong" href="https://www.getninjas.com.br/termos-de-uso">Termos de uso</a>
            </li>
          </ul>
        </div>
        <div class="footer__element footer__country">
          <span class="caption caption--medium">Outros países:</span>
          <img alt="GetNinjas" src="${MexFlag}">
          <a class="caption caption--strong" href="https://www.getninjas.com.mx">México</a>
        </div>
      </div>
    </div>
    <div class="copyright">
      <address role="contentinfo" class="caption caption--medium">
        <span>&#169;</span>2011-2020, GetNinjas Serviços de Internet. CNPJ 14.127.813/0001-51 - Av. Rebouças, 2472 - Pinheiros - São Paulo/SP - Brasil
       </address>
    </div>
  </footer>
</div>`
