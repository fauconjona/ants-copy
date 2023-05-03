
<template>
    <DsfrInput :labelVisible="true" v-model:modelValue="api_url">
        <template #label>Url de l'api</template>
    </DsfrInput>
    <DsfrInput :labelVisible="true" v-model:modelValue="token">
        <template #label>Token</template>
    </DsfrInput>
    <br>
    <div>
        <h5>Lieux:</h5>
        <div v-for="(value, key) of meeting_points">
            <DsfrInput :labelVisible="true" v-model:modelValue="meeting_points[key].name">
                <template #label>Nom</template>
            </DsfrInput>
            <DsfrInput :labelVisible="true" v-model:modelValue="meeting_points[key].guid">
                <template #label>Guid</template>
            </DsfrInput>
            <DsfrButton class="button" label="Supprimer" :onClick="(e => remove(key))"/>
        </div>
        
        <DsfrButton class="button" label="Ajouter un lieu" :onClick="(e => add())"/>
    </div>
    <br>
    <DsfrButton class="button" label="Enregistrer" :onClick="(e => save())"/>
</template>

<script setup>
import {DsfrInput, DsfrButton} from '@gouvminint/vue-dsfr'
</script>

<script>
    export default {
        data() {
            return {
                api_url: "",
                token: "",
                meeting_points: []
            }
        },
        created() {
            this.api_url = localStorage.getItem("api_url") ?? "";
            this.token = localStorage.getItem("token") ?? "";
            this.meeting_points = JSON.parse(localStorage.getItem("meeting_points") ?? "[]");
        },
        methods: {
            save() {
                localStorage.setItem("api_url", this.api_url);
                localStorage.setItem("token", this.token);
                localStorage.setItem("meeting_points", JSON.stringify(this.meeting_points));
            },
            add() {
                this.meeting_points.push({
                    guid: '',
                    name: ''
                });
            },
            remove(index) {
                this.meeting_points.splice(index, 1);
            }
        }
    }
</script>

<style>
    .button {
        margin-top: 16px;
    }
</style>
