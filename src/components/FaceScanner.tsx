import Camera from 'react-native-facerecognition';
<Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          captureQuality={Camera.constants.CaptureQuality.high}
          touchToFocus
          torchMode={Camera.constants.TorchMode.on}
          rotateMode={Camera.constants.RotateMode.on}
          cameraType={Camera.constants.CameraType.front}
          model = {Camera.constants.Model.lbp}
          dataset
          distance = {200}
          onTrained = {this.onTrained}
          onRecognized = {this.onRecognized}
          onUntrained = {this.onUntrained}
          onUnrecognized = {this.onUnrecognized}
        />