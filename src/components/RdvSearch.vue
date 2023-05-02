<!-- RdvSearch.vue -->
<script setup>
    import * as dayjs from 'dayjs'
    import * as utc from 'dayjs/plugin/utc'
    import 'dayjs/locale/fr' // import locale
    import RdvResults from './RdvResults.vue'
    import {DsfrButton} from '@gouvminint/vue-dsfr'
    import {findMeetingPointName, getAvailableTimeSlots} from '../utils'
    import axios from 'axios';

    dayjs.locale('fr')
    dayjs.extend(utc)
</script>

<script>
    export default {
        data() {
            return {
                start_date: "",
                end_date: "",
                reason: "CNI",
                documents_number: 1,
                results: null
            }
        },
        methods: {
            search: function(e) {
                e.preventDefault();

                getAvailableTimeSlots(this.start_date, this.end_date, this.reason, this.documents_number)
                .then(response => {
                    console.log(response)
                })
                .catch(function (error) {
                    console.error(error);
                });
                // appel API
                // then
                let response = {
                    "guid-1":[
                        {
                            "datetime": "2023-05-26T10:00:00Z",
                            "url": "https://www.google.fr"
                        },
                        {
                            "datetime": "2023-05-26T11:00:00Z",
                            "url": "https://www.google.fr"
                        },
                        {
                            "datetime": "2023-05-26T12:00:00Z",
                            "url": "https://www.google.fr"
                        },
                        {
                            "datetime": "2023-05-27T10:00:00Z",
                            "url": "https://www.google.fr"
                        },
                        {
                            "datetime": "2023-05-27T11:00:00Z",
                            "url": "https://www.google.fr"
                        },
                        {
                            "datetime": "2023-05-27T12:00:00Z",
                            "url": "https://www.google.fr"
                        }
                    ],
                    "guid-2":[
                        {
                            "datetime": "2023-05-26T09:00:00Z",
                            "url": "https://www.google.fr"
                        },
                        {
                            "datetime": "2023-05-26T09:30:00Z",
                            "url": "https://www.google.fr"
                        },
                        {
                            "datetime": "2023-05-26T10:00:00Z",
                            "url": "https://www.google.fr"
                        },
                        {
                            "datetime": "2023-05-27T09:00:00Z",
                            "url": "https://www.google.fr"
                        },
                        {
                            "datetime": "2023-05-27T09:30:00Z",
                            "url": "https://www.google.fr"
                        },
                        {
                            "datetime": "2023-05-27T10:00:00Z",
                            "url": "https://www.google.fr"
                        }
                    ]
                };

                this.results = {};

                for (const key in response) {
                    if (Object.hasOwnProperty.call(response, key)) {
                        const appointments = response[key];
                        
                        for (const appointment of appointments) {
                            let date = dayjs.utc(appointment.datetime).format("YYYY-MM-DD");

                            if (this.results[date] == null) {
                                this.results[date] = [];
                            }

                            this.results[date].push({
                                meeting_point: findMeetingPointName(key),
                                datetime: appointment.datetime,
                                callback_url: appointment.callback_url
                            })
                        }
                    }
                }
            }
        }
    }
</script>

<template>
    <div>
        <form v-on:submit="submit" class="ng-untouched ng-pristine ng-invalid">
            <div >
                <div >
                <div class="fr-grid-row fr-grid-row--center fr-mt-1w">
                    <h1 class="fr-col fr-col-md-11 fr-col-lg-11 fr-col-xl-11 text-center fr-h6"> Recherchez un rendez-vous <br > pour la délivrance d'un passeport ou d'une carte d'identité </h1>
                </div>
                <div class="fr-grid-row fr-grid-row--center fr-mt-n2w">
                    <div class="fr-col fr-col-md-11 fr-col-lg-10 fr-col-xl-11 text-justify">
                        <p class="inline-display"> Vous cherchez un rendez-vous en mairie pour déposer une demande de passeport et/ou carte d'identité ? Renseignez votre localisation puis choisissez le rendez-vous disponible qui vous convient le mieux. <br >
                            <strong >Conformément au principe de <a routerlink="/deterrialisation" target="_blank" class="fr-link fr-fi-arrow-right-line fr-link--icon-right" href="/deterrialisation">déterritorialisation</a> les usagers peuvent effectuer leur demande dans la mairie de leur choix sur l’ensemble du territoire français. Pour information, toutes les mairies ne sont pas encore référencées dans le moteur de recherche. </strong>
                            <br >Pour réserver en ligne un rendez-vous de dépôt de demande de titre, il est nécessaire de remplir une pré-demande sur le site <a href="https://passeport.ants.gouv.fr/demarches-en-ligne" target="_blank" class="fr-link fr-fi-arrow-right-line fr-link--icon-right">passeport.ants.gouv.fr</a>. Cette pré-demande accélèrera votre démarche.
                        </p>
                    </div>
                </div>
                <div class="fr-grid-row fr-grid-row--center fr-grid-row-12 fr-pb-4w">
                    <div class="fr-col fr-col-md-5 fr-col-lg-4 fr-col-xl-5">
                        <div class="fr-input-group">
                            <label for="start-date" class="fr-label">Début de recherche</label>
                            <input type="date" id="start-date" name="start-date" v-model="start_date" class="fr-input ng-untouched ng-pristine ng-valid" :min="dayjs().format('YYYY-MM-DD')">
                        </div>
                    </div>
                    <div class="fr-col fr-col-md-1 fr-col-lg-2 fr-col-xl-1">
                        <div class="fr-select-group" style="width: 100%;"></div>
                    </div>
                    <div class="fr-col fr-col-md-5 fr-col-lg-4 fr-col-xl-5">
                        <div class="fr-input-group">
                            <label for="end-date" class="fr-label">Fin de recherche</label>
                            <input type="date" id="end-date" name="end-date" v-model="end_date" class="fr-input ng-untouched ng-pristine ng-valid" :min="dayjs().format('YYYY-MM-DD')" :max="dayjs().add(3, 'month').format('YYYY-MM-DD')">
                        </div>
                    </div>
                </div>
                <div class="fr-grid-row fr-grid-row--center fr-grid-row-12 fr-pb-4w">
                    <div class="fr-col fr-col-md-5 fr-col-lg-4 fr-col-xl-5">
                        <div class="fr-select-group" style="width: 100%;">
                            <label for="selectMotif" class="fr-label"> Motif de rendez-vous </label>
                            <select id="selectMotif" name="select" v-model="reason" class="fr-select ng-untouched ng-pristine ng-valid">
                                <option value="CNI" selected="">Carte d'identité</option>
                                <option value="PASSPORT">Passeport</option>
                                <option value="CNI-PASSPORT">Carte d'identité + passeport</option>
                            </select>
                        </div>
                    </div>
                    <div class="fr-col fr-col-md-1 fr-col-lg-2 fr-col-xl-1">
                        <div class="fr-select-group" style="width: 100%;"></div>
                    </div>
                    <div class="fr-col fr-col-md-5 fr-col-lg-4 fr-col-xl-5">
                    <div class="fr-select-group" style="width: 100%;">
                        <label for="selectPersonDesktop" class="fr-label"> Nombre de personnes </label>
                        <select id="selecttPersonDesktop" name="select" v-model="documents_number" class="fr-select ng-untouched ng-pristine ng-valid">
                            <option value="1" selected="">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    </div>
                </div>
                    <div class="fr-grid-row fr-grid-row--center">
                        <div class="fr-col fr-col-md-3 fr-col-lg-2 fr-col-xl-2">
                            <DsfrButton label="Recherche" icon="ri-search-line" :disabled="!(start_date.length > 0 && end_date.length > 0)" :onClick="search"/>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <RdvResults v-if="results != null && Object.keys(results).length > 0" :results="results" :start_date="start_date" :end_date="end_date"/>
    </div>
</template>