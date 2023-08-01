<template>
  <div class="CatalogLoader">
    <div class="CatalogLoader__bar"></div>
  </div>
</template>

<style>
.CatalogLoader {
  height: 103%;
  width: 103%;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  border-radius: 7px;
}

.CatalogLoader__bar {
  border: 4px solid var(--dull-grey);
  border-top: 4px solid var(--tx-blue);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
