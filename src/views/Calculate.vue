<template>
    <div>
  <input :value="form.number_of_days" @change="updateDays" type="number" class="form-control" name="number_of_days" id="number_of_days" placeholder="number of day">
  <input :value="form.percentage" @change="updatePercentage" type="number" step="any" class="form-control" name="percentage" id="percentage" placeholder="percentage">
  <input v-model="form.total" type="number" step="any" class="form-control" name="total" id="total" placeholder="Total">
</div>
</template>

<script>
export default {
   data() {
    return {
      form: {
        number_of_days: 0,
        sale_rate: 0,
        total: 0,
      },
    },
  },
   methods: {
    updateDays(event) {
        this.form.number_of_days = event.target.value
        this.form.total = this.form.number_of_days * this.form.percentage
      },
      updatePercentage(event) {
        this.form.percentage = event.target.value
        this.form.total = this.form.number_of_days * this.form.percentage
      },
  },
};
</script>
