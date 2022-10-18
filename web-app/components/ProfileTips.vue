<template>
  <section>
    <p>Items are marked stale if they haven't received activity in over a month:</p>

    <section v-if="stalePullRequests.length>0">
      <p>
        You have {{ stalePullRequests.length }} stale pull requests that need attention.
        <b-btn variant="primary" size="sm" @click="showPullRequests = !showPullRequests">
          View
        </b-btn>
      </p>
      <b-collapse v-model="showPullRequests">
        <li v-for="pr in stalePullRequests" :key="pr.id">
          <a :href="pr.html_url" target="_blank">{{ pr.title }}</a>
        </li>
      </b-collapse>
    </section>

    <section v-if="staleIssues.length>0">
      <p>
        You have {{ staleIssues.length }} stale issues that need attention.
        <b-btn variant="primary" size="sm" @click="showIssues = !showIssues">
          View
        </b-btn>
      </p>
      <b-collapse v-model="showIssues">
        <li v-for="issue in staleIssues" :key="issue.id">
          <a :href="issue.html_url" target="_blank">{{ issue.title }}</a>
        </li>
      </b-collapse>
    </section>
  </section>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    issues: {
      type: Array,
      required: true
    },
    pullRequests: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      showPullRequests: false,
      showIssues: false
    }
  },
  computed: {
    stalePullRequests () {
      return this.pullRequests.filter(pr => pr.state === 'open' && moment(pr.updated_at) < moment().subtract(1, 'months'))
    },
    staleIssues () {
      return this.issues.filter(issues => issues.state === 'open' && moment(issues.updated_at) < moment().subtract(1, 'months'))
    }
  }
}
</script>
