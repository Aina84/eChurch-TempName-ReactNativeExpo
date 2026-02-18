import React, { useState } from 'react'
import {
  Button,
  Card,
  H4,
  Input,
  Label,
  TextArea,
  XStack,
  YStack,
  Text,
  Select,
  ScrollView,
  Separator,
} from 'tamagui'
import { ChevronDown } from '@tamagui/lucide-icons'
import { useToastController } from '@tamagui/toast'
import { db } from '@/lib/database/db' // Ajuste le chemin selon ton projet
import { sheeps } from '@/lib/database/schema'

type PersonForm = {
  name: string
  contact: string
  adress: string
  description: string
  role: string
}

const ROLES = ['pasteur', 'decone', 'choral', 'securité', 'interceseur']

type AddPersonCardProps = {
  onUserAdded?: () => void
  onCancel?: () => void
}

export function AddSheepCard({ onUserAdded, onCancel }: AddPersonCardProps) {
  const toast = useToastController()
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [form, setForm] = useState<PersonForm>({
    name: '',
    contact: '',
    adress: '',
    description: '',
    role: '',
  })
  const [errors, setErrors] = useState<Partial<PersonForm>>({})

  const validate = () => {
    const newErrors: Partial<PersonForm> = {}
    if (!form.name.trim()) newErrors.name = 'Le nom est requis'
    if (!form.contact.trim()) newErrors.contact = 'Le contact est requis'
    if (!form.adress.trim()) newErrors.adress = "L'adresse est requise"
    if (!form.description.trim()) newErrors.description = 'La description est requise'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const resetForm = () => {
    setForm({ name: '', contact: '', adress: '', description: '', role: '' })
    setErrors({})
  }

  const handleSubmit = async () => {
    if (!validate()) return

    setIsSubmitting(true)
    try {
      // Insertion dans la base de données
      await db.insert(sheeps).values({
        name: form.name,
        contact: form.contact,
        adress: form.adress,
        description: form.description,
        role: form.role || null,
      })

      toast.show('Succès !', {
        message: 'La personne a été ajoutée avec succès',
        customData: { type: 'success' },
        duration: 3000,
      })

      resetForm()
      setIsVisible(false)
      onUserAdded?.()
    } catch (error) {
      toast.show('Erreur', {
        message: "Impossible d'ajouter la personne",
        customData: { type: 'error' },
        duration: 4000,
      })
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCancel = () => {
    resetForm()
    setIsVisible(false)
    onCancel?.()
  }

  const setField = (field: keyof PersonForm) => (value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  // Si la carte n'est pas visible, afficher juste le bouton
  if (!isVisible) {
    return (
      <Button
        onPress={() => setIsVisible(true)}
        backgroundColor="$blue10"
        size="$4"
        pressStyle={{ opacity: 0.85 }}
      >
        Ajouter une personne
      </Button>
    )
  }

  // Carte de formulaire visible
  return (
    <YStack 
      position="absolute" 
      top={0} 
      left={0} 
      right={0} 
      bottom={0}
      backgroundColor="rgba(0,0,0,0.3)"
      justifyContent="center"
      alignItems="center"
      padding="$4"
      zIndex={1000}
    >
      <Card
        elevation={100}
        size="$4"
        border='1px solid'
        enterStyle={{ scale: 0.9, opacity: 0 }}
        exitStyle={{ scale: 0.9, opacity: 0 }}
        opacity={1}
        scale={1}
        width="100%"
        maxWidth={500}
        backgroundColor="$backgroundStrong"
        borderRadius="$6"
      >
        <ScrollView 
          maxHeight="90%"
          showsVerticalScrollIndicator={false}
          padding="$4"
        >
          <YStack gap="$4">
            {/* En-tête avec bouton de fermeture */}
            <XStack justifyContent="space-between" alignItems="center">
              <YStack>
                <H4 color="$color" fontWeight="700">
                  ➕ Nouvelle Personne
                </H4>
                <Text color="$gray10" fontSize="$3" marginTop="$1">
                  Remplissez les informations ci-dessous
                </Text>
              </YStack>
              <Button
                size="$3"
                circular
                onPress={handleCancel}
                backgroundColor="transparent"
                pressStyle={{ opacity: 0.5 }}
              />
            </XStack>

            <Separator />

            {/* Formulaire */}
            <YStack gap="$3">
              {/* Nom */}
              <YStack gap="$1">
                <Label htmlFor="name" color="$color" fontSize="$3" fontWeight="600">
                  Nom <Text color="$red10">*</Text>
                </Label>
                <Input
                  id="name"
                  placeholder="Ex: Jean Dupont"
                  value={form.name}
                  onChangeText={setField('name')}
                  borderColor={errors.name ? '$red8' : '$borderColor'}
                  focusStyle={{ borderColor: '$blue8' }}
                  size="$4"
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <Text color="$red10" fontSize="$2">
                    {errors.name}
                  </Text>
                )}
              </YStack>

              {/* Contact */}
              <YStack gap="$1">
                <Label htmlFor="contact" color="$color" fontSize="$3" fontWeight="600">
                  Contact <Text color="$red10">*</Text>
                </Label>
                <Input
                  id="contact"
                  placeholder="Ex: +261 34 00 000 00"
                  value={form.contact}
                  onChangeText={setField('contact')}
                  keyboardType="phone-pad"
                  borderColor={errors.contact ? '$red8' : '$borderColor'}
                  focusStyle={{ borderColor: '$blue8' }}
                  size="$4"
                  disabled={isSubmitting}
                />
                {errors.contact && (
                  <Text color="$red10" fontSize="$2">
                    {errors.contact}
                  </Text>
                )}
              </YStack>

              {/* Adresse */}
              <YStack gap="$1">
                <Label htmlFor="adress" color="$color" fontSize="$3" fontWeight="600">
                  Adresse <Text color="$red10">*</Text>
                </Label>
                <Input
                  id="adress"
                  placeholder="Ex: Lot 12, Antananarivo"
                  value={form.adress}
                  onChangeText={setField('adress')}
                  borderColor={errors.adress ? '$red8' : '$borderColor'}
                  focusStyle={{ borderColor: '$blue8' }}
                  size="$4"
                  disabled={isSubmitting}
                />
                {errors.adress && (
                  <Text color="$red10" fontSize="$2">
                    {errors.adress}
                  </Text>
                )}
              </YStack>

              {/* Description */}
              <YStack gap="$1">
                <Label htmlFor="description" color="$color" fontSize="$3" fontWeight="600">
                  Description <Text color="$red10">*</Text>
                </Label>
                <TextArea
                  id="description"
                  placeholder="Décrivez cette personne..."
                  value={form.description}
                  onChangeText={setField('description')}
                  borderColor={errors.description ? '$red8' : '$borderColor'}
                  focusStyle={{ borderColor: '$blue8' }}
                  size="$4"
                  numberOfLines={3}
                  minHeight={80}
                  disabled={isSubmitting}
                />
                {errors.description && (
                  <Text color="$red10" fontSize="$2">
                    {errors.description}
                  </Text>
                )}
              </YStack>

              {/* Rôle */}
              <YStack gap="$1">
                <Label color="$color" fontSize="$3" fontWeight="600">
                  Rôle <Text color="$gray9">(optionnel)</Text>
                </Label>
                <Select 
                  value={form.role} 
                  onValueChange={setField('role')}
                  disablePreventBodyScroll
                >
                  <Select.Trigger
                    iconAfter={ChevronDown}
                    size="$4"
                    borderColor="$borderColor"
                    focusStyle={{ borderColor: '$blue8' }}
                    disabled={isSubmitting}
                  >
                    <Select.Value placeholder="Sélectionner un rôle" />
                  </Select.Trigger>

                  <Select.Content zIndex={200000}>
                    <Select.ScrollUpButton />
                    <Select.Viewport>
                      <Select.Group>
                        <Select.Label>Rôles disponibles</Select.Label>
                        {ROLES.map((role, i) => (
                          <Select.Item key={role} index={i} value={role}>
                            <Select.ItemText>{role}</Select.ItemText>
                            <Select.ItemIndicator marginLeft="auto">
                              <Text>✓</Text>
                            </Select.ItemIndicator>
                          </Select.Item>
                        ))}
                      </Select.Group>
                    </Select.Viewport>
                    <Select.ScrollDownButton />
                  </Select.Content>
                </Select>
              </YStack>

              {/* Actions */}
              <XStack gap="$3" marginTop="$4">
                <Button
                  onPress={handleCancel}
                  variant="outlined"
                  borderColor="$borderColor"
                  size="$4"
                  flex={1}
                  disabled={isSubmitting}
                >
                  Annuler
                </Button>
                <Button
                  onPress={handleSubmit}
                  backgroundColor="$blue10"
                  size="$4"
                  flex={1}
                  pressStyle={{ opacity: 0.85 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enregistrement...' : 'Enregistrer'}
                </Button>
              </XStack>
            </YStack>
          </YStack>
        </ScrollView>
      </Card>
    </YStack>
  )
}