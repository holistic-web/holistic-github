<template>
  <section>
    <p>Items are marked stale if they haven't received activity in over a month:</p>
    <p>
      You have {{ stalePullRequests.length }} stale pull requests that need attention.
    </p>
    <p>
      You have {{ staleIssues.length }} stale issues that need attention.
    </p>
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
