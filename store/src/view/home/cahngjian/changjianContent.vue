<template>
  <div class="table">
    <table width="100%" border="1">
      <tr>
        <td rowspan="2">
          <img src="http://img.800pharm.com/images/20180208/20180208171527_993.jpg" alt />
        </td>
        <td>
          <img src="http://img.800pharm.com/images/20180208/20180208171729_372.jpg" alt />
        </td>
        <td>
          <img src="http://img.800pharm.com/images/20180208/20180208171849_355.jpg" alt />
        </td>
        <td>
          <img src="http://img.800pharm.com/images/20180206/20180206111433_885.jpg" alt />
        </td>
      </tr>
      <tr>
        <td>
          <img src="http://img.800pharm.com/images/20180206/20180206111455_546.jpg" alt />
        </td>
        <td colspan="2">
          <img src="http://img.800pharm.com/images/20180206/20180206111424_497.jpg" alt />
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.table {
  padding: 1rem 1.5rem;
  background: #fff;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
table,
td {
  border: 0.1rem solid #fff;
}
img {
  width: 100%;
  vertical-align: top;
}
tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
td {
  display: table-cell;
  vertical-align: inherit;
}
</style>