console.info(AFRAME.version, AFRAME.THREE.REVISION);

AFRAME.registerSystem('_boot', {
  init() {
    console.log('init AFRAME');
    this.el.addEventListener('model-loaded', e => {
      const suzanneEntity = document.getElementById('carEntity');
      console.log(suzanneEntity);
      const suzanneMesh = suzanneEntity.getObject3D('mesh'); // THREE.Mesh
      console.log(suzanneMesh);
      const myCar = suzanneMesh.getObjectByName('car_plain');
      myCar.material.color.setHex(0xFF0000);
      this.car = myCar;
    })
  },
  tick(time) {
    if (this.car) {
      this.car.rotateX(.05 * Math.random());
    }
  }
})