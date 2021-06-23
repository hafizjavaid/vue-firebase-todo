<template>
      <div class='User'>
            <div class="logo">
               <span>TODOS</span>
            </div>
            <!-- <div class='info'>
                <p>Hafiz Javaid</p>
                <a>Logout!</a>
            </div> -->
        </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

/* User */
.User {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: .5rem;
  border-bottom: 1px solid #ebebeb;
}
.User .logo{
    width: 70px;
    height: 70px;
    border: 1px solid #ebebeb;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    span{
        font-size: 16px;
    }
}

// .User .info p {
//   font-size: 1.1rem;
//   font-weight: bold;
// }

// .User .info a {
//   text-decoration: none;
//   display: flex;
//   justify-content: flex-end;
// }

</style>