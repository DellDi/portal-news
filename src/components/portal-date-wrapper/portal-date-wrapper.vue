<template>
    <div class="portal_date_wrapper">
        <portal-date-panel class="date_compontents"></portal-date-panel>
        <div class="date_summary"></div>
    </div>
</template>

<script>
import PortalDatePanel from './portal-date-panel/portal-date-panel'
    export default {
        name: 'PortalDateWrapper',
        components: {
            PortalDatePanel
        }
    }
</script>

<style lang="scss" scoped>
.portal_date_wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr) 150px;
    grid-template-rows: repeat(4, 100px);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
    .date_compontents {
        grid-column: 1 / 4;
        grid-row: 1 / 5;
    }
    .date_summary {
        grid-column: 4 / 5;
        grid-row: 1 / 5;
    }
}
</style>