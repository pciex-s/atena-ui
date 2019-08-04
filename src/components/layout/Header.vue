<template>
    <header>
        <h3><i class="fab fa-windows mr-2"></i>ATENA<span>UI</span></h3>
        <i class="fas fa-bars ml-5"></i>
        <nav>
            <ul class="menu-topo">
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Users</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </nav>
            <img  class="avatar" src="@/assets/avatar.png">
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>
    header{
        display:flex;
        align-items: center;
        padding:10px 10px 10px 20px;
        grid-area:header;
        background-color:#fff;
    }

    header h3{
        font-size:1.2rem;
    }

    header h3 span{
        color: #20a8d8;
    }

    .fa-bars{
        font-size:25px;
        cursor:pointer;
        color:grey;
    }

    .fa-bars:hover{
        color:#000;
    }

    .menu-topo{
        display:flex;
        list-style: none;
        align-items: center;
        padding:0;
        margin:0;
        margin-left:30px;
    }

    .menu-topo li{
        padding-right: 20px;
    }

    .menu-topo li a{
        text-decoration: none;
        font-size: .895rem;
        color: grey;
    }

    .menu-topo li a:hover{
        color: black;
    }

    .avatar{
        display:block;
        width: 40px;
        height:40px;
        border-radius: 40px;
        justify-self: end;
    }
</style>
