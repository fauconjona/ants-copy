<script setup>
import RdvPortalAppointment from './components/RdvPortalAppointment.vue'
import Config from './components/Config.vue'
import {DsfrModal, DsfrButton} from '@gouvminint/vue-dsfr'
</script>

<script>
export default {
    data() {
        return {
            opened: false
        }
    },
    methods: {
        open() {
            this.opened = true;
        },
        close() {
            this.opened = false;
        }
    }
}
</script>

<template>
    <DsfrButton label="Configurer" :onClick="(e => open())" ref="modalOrigin" />
    <RdvPortalAppointment/>
    <DsfrModal
    title="Configuration"
    :onClose="(e => close())"
    :opened="opened"
    >
        <Config/>
    </DsfrModal>
</template>

<style scoped>

</style>
