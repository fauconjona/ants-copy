
<template>
    <div _nghost-sc21="" ng-version="14.2.3" ng-server-context="other">
      <div _ngcontent-sc21="" _nghost-sc19="">
        <header _ngcontent-sc19="" role="banner" class="fr-header">
          <div _ngcontent-sc19="" class="fr-header__body">
            <div _ngcontent-sc19="" class="fr-container">
              <div _ngcontent-sc19="" class="fr-header__body-row">
                <div _ngcontent-sc19="" class="fr-header__brand">
                  <div _ngcontent-sc19="" class="fr-header__brand-top">
                    <div _ngcontent-sc19="" class="fr-header__logo">
                      <p _ngcontent-sc19="" class="fr-logo"> République <br _ngcontent-sc19="">Française </p>
                    </div>
                  </div>
                  <div _ngcontent-sc19="" class="fr-header__service">
                    <a _ngcontent-sc19="" href="index.html" style="color: black; text-decoration: none;" title="Accueil - Agence nationale des titres sécurisés">
                      <p _ngcontent-sc19="" class="fr-header__service-title"> Agence nationale des titres sécurisés</p>
                    </a>
                    <a _ngcontent-sc19="" href="index.html">
                      <p _ngcontent-sc19="" class="fr-header__service-tagline">Moteur de recherche de rendez-vous pour la délivrance de passeports et de cartes d'identité</p>
                    </a>
                  </div>
                </div>
                <div _ngcontent-sc19="" class="fr-header__tools">
                  <div _ngcontent-sc19="" class="fr-header__tools-links" style="margin-right: 0% !important;">
                    <ul _ngcontent-sc19="" class="fr-links-group">
                      <li _ngcontent-sc19="" style="right: 0% !important;">
                        <a v-if="menu == 'search'" class="fr-link fr-link--sm site-header-link" style="right: 0% !important;" title="Retrouvez vos rendez-vous" href="" @click="applicationId">Retrouvez vos rendez-vous <span _ngcontent-sc19="" class="small-arrow">→</span>
                        </a>
                        <a v-if="menu == 'applicationId'" class="fr-link fr-link--sm site-header-link" style="right: 0% !important;" title="Recherchez un rendez-vous" href="" @click="search">Recherchez un rendez-vous <span _ngcontent-sc19="" class="small-arrow">→</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div _ngcontent-sc19="" id="modal-menu" aria-labelledby="button-825" class="fr-header__menu fr-modal">
            <div _ngcontent-sc19="" class="fr-container">
              <button _ngcontent-sc19="" aria-controls="modal-menu" class="fr-link--close fr-link">Fermer</button>
              <div _ngcontent-sc19="" class="fr-header__menu-links"></div>
            </div>
          </div>
        </header>
    </div>
      <div>
        <DsfrButton label="Configurer" :onClick="open" ref="modalOrigin" />
        <RdvPortalAppointment v-if="menu == 'search'"/>
        <RdvPortalApplicationId v-if="menu == 'applicationId'"/>
        <DsfrModal
        title="Configuration"
        :onClose="(e => close())"
        :opened="opened"
        >
            <Config/>
        </DsfrModal>
      </div>
      <br _ngcontent-sc21="">
      <div _ngcontent-sc21="" _nghost-sc20="">
        <footer _ngcontent-sc20="" role="contentinfo" id="footer" class="fr-footer">
          <div _ngcontent-sc20="" class="fr-container">
            <div _ngcontent-sc20="" class="fr-footer__body">
              <div _ngcontent-sc20="" class="fr-footer__brand fr-enlarge-link">
                <a _ngcontent-sc20="" routerlink="/" title="Retour à l'accueil" href="index.html">
                  <p _ngcontent-sc20="" class="fr-logo"> République <br _ngcontent-sc20="">française </p>
                </a>
              </div>
              <div _ngcontent-sc20="" class="fr-footer__content">
                <p _ngcontent-sc20="" class="fr-footer__content-desc">
                  <a _ngcontent-sc20="" title="Voir le code source" href="https://immatriculation.ants.gouv.fr/" target="_blank" rel="noopener">immatriculation.ants.gouv.fr</a>
                </p>
                <p _ngcontent-sc20="" class="fr-footer__content-desc">
                  <a _ngcontent-sc20="" title="Voir le code source" href="https://permisdeconduire.ants.gouv.fr/" target="_blank" rel="noopener">permisdeconduire.ants.gouv.fr</a>
                </p>
                <p _ngcontent-sc20="" class="fr-footer__content-desc">
                  <a _ngcontent-sc20="" title="Voir le code source" href="https://passeport.ants.gouv.fr/" target="_blank" rel="noopener">passeport.ants.gouv.fr</a>
                </p>
                <ul _ngcontent-sc20="" class="fr-footer__content-list">
                  <li _ngcontent-sc20="" class="fr-footer__content-item">
                    <a _ngcontent-sc20="" href="https://legifrance.gouv.fr/" class="fr-footer__content-link">legifrance.gouv.fr</a>
                  </li>
                  <li _ngcontent-sc20="" class="fr-footer__content-item">
                    <a _ngcontent-sc20="" href="https://www.gouvernement.fr/" class="fr-footer__content-link">gouvernement.fr</a>
                  </li>
                  <li _ngcontent-sc20="" class="fr-footer__content-item">
                    <a _ngcontent-sc20="" href="https://www.service-public.fr/" class="fr-footer__content-link">service-public.fr</a>
                  </li>
                </ul>
              </div>
            </div>
            <div _ngcontent-sc20="" class="fr-footer__bottom">
              <ul _ngcontent-sc20="" class="fr-footer__bottom-list">
                <li _ngcontent-sc20="" class="fr-footer__bottom-item">
                  <a _ngcontent-sc20="" routerlink="/CGU-mentions-legales" class="fr-footer__bottom-link" href="CGU-mentions-legales.html">CGU et mentions légales</a>
                </li>
                <li _ngcontent-sc20="" class="fr-footer__bottom-item">
                  <a _ngcontent-sc20="" routerlink="/donnees-personnelles" class="fr-footer__bottom-link" href="donnees-personnelles.html">Données personnelles</a>
                </li>
                <li _ngcontent-sc20="" class="fr-footer__bottom-item">
                  <a _ngcontent-sc20="" href="https://ants.gouv.fr/contactez-nous/" target="_blank" class="fr-footer__bottom-link">Contactez-nous</a>
                </li>
                <li _ngcontent-sc20="" class="fr-footer__bottom-item">
                  <a _ngcontent-sc20="" routerlink="/savoir-plus" class="fr-footer__bottom-link" href="savoir-plus.html">En savoir plus</a>
                </li>
                <li _ngcontent-sc20="" class="fr-footer__bottom-item">
                  <a _ngcontent-sc20="" routerlink="/accessibilite" class="fr-footer__bottom-link" href="accessibilite.html">Accessibilité : partiellement conforme</a>
                </li>
                <li _ngcontent-sc20="" class="fr-footer__bottom-item">
                  <a _ngcontent-sc20="" routerlink="/deterrialisation" class="fr-footer__bottom-link" href="deterrialisation.html">Déterritorialisation </a>
                </li>
                <br _ngcontent-sc20="" class="mobile">
                <li _ngcontent-sc20="" class="fr-footer__bottom-item">
                  <a _ngcontent-sc20="" routerlink="/villes" class="fr-footer__bottom-link" href="villes.html">Villes</a>
                </li>
                <li _ngcontent-sc20="" class="fr-footer__bottom-item">
                  <a _ngcontent-sc20="" routerlink="/departements" class="fr-footer__bottom-link" href="departements.html">Départements</a>
                </li>
                <li _ngcontent-sc20="">
                  <a _ngcontent-sc20="" target="_blank" class="fr-footer__bottom-link version-link" href="https://gitlab.com/france-identite/rendez-vous-mairie/-/releases/2.12.2">2023-04-14 2.12.2</a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
    </div>
</div>
</template>


<script setup>
import RdvPortalAppointment from './components/RdvPortalAppointment.vue'
import RdvPortalApplicationId from './components/RdvPortalApplicationId.vue'
import Config from './components/Config.vue'
import {DsfrModal, DsfrButton} from '@gouvminint/vue-dsfr'
</script>

<script>
export default {
    data() {
        return {
            opened: false,
            menu: "search"
        }
    },
    methods: {
        open() {
            this.opened = true;
        },
        close() {
            this.opened = false;
        },
        applicationId(e) {
            e.preventDefault();
            this.menu = "applicationId";
        },
        search(e) {
            e.preventDefault();
            this.menu = "search";
        }
    }
}
</script>
