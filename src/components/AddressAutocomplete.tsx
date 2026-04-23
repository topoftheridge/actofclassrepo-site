"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const GOOGLE_MAPS_API_KEY = "AIzaSyCWEkCFDamQ_QuMIR1TYqOyEwGfuj63mK8";

let loadPromise: Promise<void> | null = null;

function loadGoogleMaps(): Promise<void> {
  if (loadPromise) return loadPromise;
  if (typeof window !== "undefined" && (window as any).google?.maps?.places) {
    return Promise.resolve();
  }
  loadPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Google Maps"));
    document.head.appendChild(script);
  });
  return loadPromise;
}

interface AddressAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  onPlaceSelect?: (place: {
    formatted: string;
    street?: string;
    city?: string;
    state?: string;
    zip?: string;
  }) => void;
  placeholder?: string;
  id?: string;
  className?: string;
}

export default function AddressAutocomplete({
  value,
  onChange,
  onPlaceSelect,
  placeholder = "Start typing your address...",
  id,
  className = "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition outline-none text-base",
}: AddressAutocompleteProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    loadGoogleMaps().then(() => setLoaded(true)).catch(() => {});
  }, []);

  const handlePlaceChanged = useCallback(() => {
    const ac = autocompleteRef.current;
    if (!ac) return;
    const place = ac.getPlace();
    if (!place?.address_components) return;

    const get = (type: string) =>
      place.address_components?.find((c) => c.types.includes(type))?.long_name || "";
    const getShort = (type: string) =>
      place.address_components?.find((c) => c.types.includes(type))?.short_name || "";

    const streetNumber = get("street_number");
    const route = get("route");
    const street = streetNumber ? `${streetNumber} ${route}` : route;

    const result = {
      formatted: place.formatted_address || "",
      street,
      city: get("locality") || get("sublocality_level_1") || get("administrative_area_level_2"),
      state: getShort("administrative_area_level_1"),
      zip: get("postal_code"),
    };

    onChange(result.formatted);
    onPlaceSelect?.(result);
  }, [onChange, onPlaceSelect]);

  useEffect(() => {
    if (!loaded || !inputRef.current || autocompleteRef.current) return;

    const ac = new google.maps.places.Autocomplete(inputRef.current, {
      componentRestrictions: { country: "us" },
      types: ["address"],
      fields: ["address_components", "formatted_address"],
    });

    ac.addListener("place_changed", handlePlaceChanged);
    autocompleteRef.current = ac;

    return () => {
      google.maps.event.clearInstanceListeners(ac);
    };
  }, [loaded, handlePlaceChanged]);

  return (
    <input
      ref={inputRef}
      type="text"
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={className}
      autoComplete="off"
    />
  );
}
