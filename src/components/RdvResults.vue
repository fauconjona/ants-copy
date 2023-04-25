<script setup>
import * as dayjs from 'dayjs'
import * as utc from 'dayjs/plugin/utc'
import 'dayjs/locale/fr' // import locale
import {DsfrTabContent, DsfrTabItem} from '@gouvminint/vue-dsfr'

dayjs.locale('fr')
dayjs.extend(utc)
</script>

<script>
    export default {
        data() {
            return {
                current: ""
            }
        },
        props: ['results', 'start_date', 'end_date'],
        mounted() {
            if (this.current == "" && this.results != null && Object.keys(this.results).length > 0) {
                this.current = Object.keys(this.results)[0];
            }
        },
        methods: {
            changeLocation: function(url) {
                location.href = url;
            },
            select: function(key) {
                this.current = key;
            }
        },
        computed: {
            count: function() {
                let count = 0;

                for (const key in this.results) {
                    if (Object.hasOwnProperty.call(this.results, key)) {
                        const elements = this.results[key];
                        if (elements != null) {
                            count += elements.length;
                        }
                    }
                }

                return count;
            }
        }
    }   
</script>

<style>
    table {
        width: 100%;
    }
    th, td {
        width: 50%;
    }
    .info {
        margin-bottom: 16px;
    }
  </style>

<template>
    <div  id="target" class="ng-star-inserted">
        <div  class="fr-grid-row fr-grid-row--center fr-grid-row--gutters">
            <div  class="fr-col fr-col-md-11 fr-col-lg-10 fr-col-xl-11">
                <div  class="ng-star-inserted">
                    <div  _nghost-serverapp-c51="">
                        <div  class="ng-star-inserted info">
                            <div  class="ng-star-inserted">
                                <div  class="fr-alert fr-alert--success fr-mt-3w ng-star-inserted">
                                    <p>
                                        <b> {{count}} </b> créneaux sont disponibles en ligne entre le <b>{{dayjs(start_date, "YYYY-MM-DD", "fr").format("D MMMM YYYY")}}</b> et le <b>{{dayjs(end_date, "YYYY-MM-DD", "fr").format("D MMMM YYYY")}}</b>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="fr-tabs">
                            <ul class="fr-tabs__list" role="tablist" aria-label="[A modifier | nom du système d'onglet]">
                                <DsfrTabItem v-for="(value, key) in results" :panel-id="'panel-'+key" :tab-id="'tab-'+key" :selected="key == current" v-on:click="$event => select(key)">
                                    {{dayjs(key, "YYYY-MM-DD", "fr").format("dddd D MMMM")}}
                                </DsfrTabItem>
                            </ul>
                            <DsfrTabContent v-for="(value, key) in results" :panel-id="'panel-'+key" :tab-id="'tab-'+key" :selected="key == current" asc>
                                <DsfrTable
                                    :rows='value.map(r => [r.meeting_point, dayjs.utc(r.start_date).format("HH:mm"), {"component":"DsfrButton","label":"Réserver","onClick": (e => changeLocation(r.url))}])'
                                />
                            </DsfrTabContent>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>