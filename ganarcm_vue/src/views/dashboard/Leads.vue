<template>
  <div class="container">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h1 class="title">Leads</h1>

                
                <router-link 
                    to="/dashboard/leads/add"
                    v-if="$store.state.team.max_leads > num_leads"
                >Add lead</router-link>

            <div class="column is-12">
                <table class="table is-fullwidth">
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Contact person</th>
                            <th>Assigned to</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>

                <tbody>
                    <tr
                        v-for="lead in leads"
                        v-bind:key="lead.id">
                        <td>{{ lead.company }}</td>
                        <td>{{ lead.contact_person }}</td>
                        <td>{{ lead.status }}</td>

                    </tr>
                </tbody>
                </table>

            </div>
        </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'Leads',
        data() {
            return {
                leads: []
            }
        },
        mounted(){
            this.getLeads()
        },
        methods: {
            async getLeads() {
                this.$store.commit('isLoading', true)

                axios
                    .get('/api/v1/leads/')
                    .then(response => {
                        this.leads = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })


                this.$store.commit('isLoading', false)
            }
        }
    }

</script>
