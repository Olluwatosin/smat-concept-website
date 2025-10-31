"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Wifi, Zap, Cpu, Leaf } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const mockSensorData = [
  { time: "00:00", temp: 24, humidity: 65, soil: 45 },
  { time: "04:00", temp: 22, humidity: 70, soil: 42 },
  { time: "08:00", temp: 28, humidity: 60, soil: 38 },
  { time: "12:00", temp: 32, humidity: 55, soil: 35 },
  { time: "16:00", temp: 30, humidity: 58, soil: 40 },
  { time: "20:00", temp: 26, humidity: 62, soil: 43 },
];

export function DataDigitalizationDemo() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleUpload = () => {
    setIsProcessing(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-lg">
      <div className="flex items-center gap-3 mb-4">
        <Upload className="text-blue-600" size={24} />
        <h4 className="font-semibold">Live OCR Demo</h4>
      </div>
      <div className="border-2 border-dashed border-blue-300 rounded-lg p-8 text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleUpload}
          disabled={isProcessing}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium disabled:opacity-50"
        >
          {isProcessing ? "Processing..." : "Upload Document"}
        </motion.button>
        {isProcessing && (
          <div className="mt-4">
            <div className="bg-gray-200 rounded-full h-2">
              <motion.div
                className="bg-blue-600 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">Extracting text... {progress}%</p>
          </div>
        )}
      </div>
    </div>
  );
}

export function SmartAgricultureDemo() {
  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-lg">
      <div className="flex items-center gap-3 mb-4">
        <Leaf className="text-green-600" size={24} />
        <h4 className="font-semibold">IoT Farm Dashboard</h4>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-white p-3 rounded text-center">
          <div className="text-2xl font-bold text-green-600">28°C</div>
          <div className="text-xs text-gray-600">Temperature</div>
        </div>
        <div className="bg-white p-3 rounded text-center">
          <div className="text-2xl font-bold text-blue-600">62%</div>
          <div className="text-xs text-gray-600">Humidity</div>
        </div>
        <div className="bg-white p-3 rounded text-center">
          <div className="text-2xl font-bold text-orange-600">40%</div>
          <div className="text-xs text-gray-600">Soil Moisture</div>
        </div>
      </div>
      <div className="h-32">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={mockSensorData}>
            <XAxis dataKey="time" fontSize={10} />
            <YAxis fontSize={10} />
            <Line type="monotone" dataKey="temp" stroke="#10b981" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function NetworkingDemo() {
  const [connectedDevices] = useState(12);

  return (
    <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-6 rounded-lg">
      <div className="flex items-center gap-3 mb-4">
        <Wifi className="text-purple-600" size={24} />
        <h4 className="font-semibold">Network Monitor</h4>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <div className="text-2xl font-bold text-purple-600">{connectedDevices}</div>
          <div className="text-xs text-gray-600">Connected Devices</div>
        </div>
        <div className="flex gap-2">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-8 bg-purple-600 rounded"
              animate={{ height: [32, 16, 32] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      </div>
      <div className="text-sm text-green-600 font-medium">✓ All systems secure</div>
    </div>
  );
}

export function EnergyDemo() {
  const [solarOutput] = useState(4.2);

  return (
    <div className="bg-gradient-to-br from-yellow-50 to-orange-100 p-6 rounded-lg">
      <div className="flex items-center gap-3 mb-4">
        <Zap className="text-yellow-600" size={24} />
        <h4 className="font-semibold">Solar Monitor</h4>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-3 rounded text-center">
          <div className="text-2xl font-bold text-yellow-600">{solarOutput}kW</div>
          <div className="text-xs text-gray-600">Current Output</div>
        </div>
        <div className="bg-white p-3 rounded text-center">
          <div className="text-2xl font-bold text-green-600">₦2,400</div>
          <div className="text-xs text-gray-600">Daily Savings</div>
        </div>
      </div>
      <motion.div
        className="mt-4 bg-yellow-400 h-2 rounded-full"
        animate={{ width: ["60%", "80%", "60%"] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <div className="text-xs text-gray-600 mt-1">Energy Production</div>
    </div>
  );
}

export function IoTDemo() {
  return (
    <div className="bg-gradient-to-br from-cyan-50 to-blue-100 p-6 rounded-lg">
      <div className="flex items-center gap-3 mb-4">
        <Cpu className="text-cyan-600" size={24} />
        <h4 className="font-semibold">IoT Device Status</h4>
      </div>
      <div className="space-y-2">
        {["Smart Camera", "Access Control", "Temperature Sensor"].map((device, i) => (
          <div key={device} className="flex justify-between items-center bg-white p-2 rounded">
            <span className="text-sm">{device}</span>
            <motion.div
              className="w-3 h-3 bg-green-500 rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}