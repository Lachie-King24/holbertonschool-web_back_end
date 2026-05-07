export default function createInt8TypedArray(length, position, value) {
    if (position < 0 || position >= length) {
        throw new Error('Position outside range');
    }

    // Create an Array Buffer
    const newBuf = new ArrayBuffer(length);
    // Create a Uint8Array view
    const view = new DataView(newBuf);

    view.setInt8(position, value);

    return view;
}