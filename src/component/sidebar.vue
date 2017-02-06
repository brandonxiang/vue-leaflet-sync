

<template>

<ul class="list-unstyled">
    <li v-for="item in items">
        <a class="btn btn-default btn-block" href="#">
          {{item.name}}
        </a>
    </li>
</ul>

</template>

<script>

export default {
    props: ['items'],
}

</script>
