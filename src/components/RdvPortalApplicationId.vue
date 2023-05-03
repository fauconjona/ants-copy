<!-- RdvPortalApplicationId.vue -->
<template>
    <div>
        <main  role="main" id="contenu">
            <div  class="fr-container main-body">
                <div >
                    <div>
                        <div  class="fr-grid-row fr-grid-row--center fr-ml-2w fr-mt-2w">
                            <div  class="fr-col fr-col-md-9 fr-col-lg-9 fr-col-xl-10 center fr-h6">
                                <h1  class="inline-display"> Retrouvez et gérez tous vos rendez-vous à partir de votre numéro de pré-demande de titre d'identité </h1>
                            </div>
                        </div>
                        <div  class="fr-grid-row fr-grid-row--center fr-ml-2w">
                            <div  class="fr-col fr-col-md-10 fr-col-lg-10 fr-col-xl-10 justify">
                                <p  class="inline-display"> Les numéros de pré-demande sont composés de 10 caractères, par exemple : 1234567890. Saisissez votre/vos numéro(s) de pré-demande séparé(s) par un espace (ou bien une virgule) et lancez la recherche. </p>
                            </div>
                        </div>
                        <form  novalidate="" id="predemandeForm" class="ng-dirty ng-valid ng-touched ng-submitted">
                            <div  class="fr-grid-row fr-grid-row--center fr-mt-5w fr-ml-2w">
                                <div  class="fr-col fr-col-md-10 fr-col-lg-10 fr-col-xl-10">
                                    <div  id="header-search" role="search" class="fr-search-bar fr-search-bar--lg">
                                        <label  for="predemandes" class="fr-label"> Recherche </label>
                                        <input  placeholder="Numéro(s) de pré-demande(s)" type="search" id="predemandes" name="predemandes" v-model="application_id" required="" class="fr-input ng-dirty ng-valid ng-touched">
                                        <button  type="submit" title="Rechercher" class="fr-btn" @click="search">Rechercher</button>
                                    </div>
                                </div>
                            </div>
                            <div  class="fr-grid-row fr-grid-row--center">
                                <!---->
                            </div>
                        </form>
                    </div>
                    <div  id="target" class="ng-star-inserted">
                        <div>
                            <div  class="fr-grid-row fr-grid-row--center fr-mt-5w fr-ml-2w">
                                <div v-if="results != null && results.length > 0" class="application-ids fr-col fr-col-md-10 fr-col-lg-10 fr-col-xl-10">
                                    <DsfrTable
                                    :headers='["NUMÉRO DE PRÉ-DEMANDE","LIEU","DATE", ""]'
                                    :rows='results.map(a => [application_id, a.meeting_point, dayjs.utc(a.datetime).format("ddd D MMM HH:mm"), {"component":"DsfrButton","label":"Gérer","onClick": (e => changeLocation(a.management_url))}])'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
    import {searchApplicationId} from '../utils'
</script>

<script>
    export default {
        data() {
            return {
                application_id: "",
                results: [],
                dayjs: dayjs
            }
        },
        methods: {
            search: function(e) {
                e.preventDefault();

                searchApplicationId(this.application_id)
                .then(response => {
                    return response.json();
                })
                .then(body => {
                    console.log("Result", body);
                    let results = body[this.application_id];

                    results = results.sort((a,b) => (a.datetime > b.datetime) ? 1 : (a.datetime < b.datetime) ? -1 : 0);

                    this.results = results;
                })
                .catch(function (error) {
                    console.error(error);
                });
            },
            changeLocation: function(url) {
                location.href = url;
            }
        }
    }
</script>

<style>
    table {
        width: 100%;
    }
    .application-ids th, .application-ids td {
        width: 33%;
    }
    .info {
        margin-bottom: 16px;
    }
</style>

