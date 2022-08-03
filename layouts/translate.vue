<template>
  <LinkNavbar current="translate" />
  <div class="non-bulma p-4 is-size-6 subtitle has-text-white background-dark">
    <ContentDoc v-slot="{ doc }">
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </div>
</template>

<style>
non-bulma div {
  background: rgba(0, 0, 0, 0.5);
}

non-bulma div,h1 {
  font-size: 1.6rem;
  color: #48C;
  font-weight: bold;
  margin-top: 1rem;
}

non-bulma div,h2 {
  margin-top: 1rem;
  font-size: 1.4rem;
  color: #48C;
}

non-bulma div,p a {
  color: #49d;
  transition: color 0.3s ease;
}

non-bulma div,p a:hover {
  color: #369;
}

non-bulma div,ul li {
  text-align: left;
  padding-left: 20px;
}

non-bulma div,ul li::before {
  content: "️• ";
  width: 20px;
  margin-left: -15px;
  position: relative;
}
</style>

