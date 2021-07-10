import {BlurView} from '@react-native-community/blur';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import DashedLine from 'react-native-dashed-line';
import normalize from 'react-native-normalize';
import {ListHistory, Number} from '..';
import {colors} from '../../../utils';
import {Button, Gap} from '../../atoms';

const SlidingUpPanel = ({
  productName,
  phone,
  name,
  bank,
  accountNumber,
  date,
  nominal,
  price,
  show,
  closePopup,
  type,
}) => {
  const navigation = useNavigation();
  return (
    <>
      {show && <BlurView blurType="dark" blurAmount={1} style={styles.blur} />}

      <Modal
        animationType="slide"
        transparent={true}
        visible={show}
        onRequestClose={() => {}}>
        <Pressable
          onPress={() => {
            if (!true) {
              return;
            }
            closePopup();
          }}
          style={styles.pressable}
        />
        {type === 'Pulsa' && (
          <View style={styles.modal}>
            <Text style={styles.title}>Detail Transaksi</Text>
            <Gap height={16} />
            <View style={styles.row}>
              <Text style={styles.label}>Nomor Ponsel</Text>
              <Text style={styles.value}>{phone}</Text>
            </View>
            <Gap height={8} />
            <View style={styles.row}>
              <Text style={styles.label}>Pulsa</Text>
              <Number number={price} style={styles.value} />
            </View>
            <Gap height={8} />
            <View style={styles.line} />
            <Gap height={24} />
            <Text style={styles.title}>Detail Pembayaran</Text>
            <Gap height={16} />
            <View style={styles.row}>
              <Text style={styles.label}>Harga</Text>
              <Number number={price} style={styles.value} />
            </View>
            <Gap height={8} />
            <View style={styles.row}>
              <Text style={styles.label}>Biaya Transaksi</Text>
              <Number number={1000} style={styles.value} />
            </View>
            <Gap height={8} />
            <DashedLine dashLength={15} dashGap={10} dashColor="#8B8B8B" />
            <Gap height={16} />
            <View style={styles.row}>
              <Text style={styles.totalLabel}>Total Transaksi</Text>
              <Number number={price + 1000} style={styles.total} />
            </View>
            <Gap height={24} />
            <View style={styles.rowButton}>
              <View style={styles.flexOne}>
                <Button
                  text="Ubah"
                  fontFamily="Poppins-Regular"
                  fontSize={14}
                  type="mirror"
                  color={colors.c1}
                />
              </View>
              <Gap width={16} />
              <View style={styles.flexOne}>
                <Button
                  text="Konfirmasi"
                  fontFamily="Poppins-Regular"
                  fontSize={14}
                />
              </View>
            </View>
            <Gap height={24} />
          </View>
        )}

        {type === 'PaketData' && (
          <View style={styles.modal}>
            <Text style={styles.title}>Detail Transaksi</Text>
            <Gap height={16} />
            <View style={styles.row}>
              <Text style={styles.label}>Nomor Ponsel</Text>
              <Text style={styles.value}>{phone}</Text>
            </View>
            <Gap height={8} />
            <View style={styles.line} />
            <Gap height={24} />
            <Text style={styles.title}>Detail Pembayaran</Text>
            <Gap height={16} />
            <View style={styles.row}>
              <Text style={styles.label}>{productName}</Text>
              <Number number={price} style={styles.value} />
            </View>
            <Gap height={8} />
            <View style={styles.row}>
              <Text style={styles.label}>Biaya Transaksi</Text>
              <Number number={1000} style={styles.value} />
            </View>
            <Gap height={8} />
            <DashedLine dashLength={15} dashGap={10} dashColor="#8B8B8B" />
            <Gap height={16} />
            <View style={styles.row}>
              <Text style={styles.totalLabel}>Total Transaksi</Text>
              <Number number={price + 1000} style={styles.total} />
            </View>
            <Gap height={24} />
            <View style={styles.rowButton}>
              <View style={styles.flexOne}>
                <Button
                  text="Ubah"
                  fontFamily="Poppins-Regular"
                  fontSize={14}
                  type="mirror"
                  color={colors.c1}
                />
              </View>
              <Gap width={16} />
              <View style={styles.flexOne}>
                <Button
                  text="Konfirmasi"
                  fontFamily="Poppins-Regular"
                  fontSize={14}
                />
              </View>
            </View>
            <Gap height={24} />
          </View>
        )}

        {type === 'PLN' && (
          <View style={styles.modal}>
            <Text style={styles.title}>Informasi Pelanggan</Text>
            <Gap height={16} />
            <View style={styles.row}>
              <Text style={styles.label}>Nomor Meter</Text>
              <Text style={styles.value}>14047618294</Text>
            </View>
            <Gap height={8} />
            <View style={styles.row}>
              <Text style={styles.label}>Id Pelanggan</Text>
              <Text style={styles.value}>{phone}</Text>
            </View>
            <Gap height={8} />
            <View style={styles.row}>
              <Text style={styles.label}>Nama Pelanggan</Text>
              <Text style={styles.value}>RIDXXX XXXXRTO</Text>
            </View>
            <Gap height={8} />
            <View style={styles.row}>
              <Text style={styles.label}>Tarif / Daya</Text>
              <Text style={styles.value}>R1M/900VA</Text>
            </View>
            <Gap height={8} />
            <View style={styles.line} />
            <Gap height={24} />
            <Text style={styles.title}>Detail Pembayaran</Text>
            <Gap height={16} />
            <View style={styles.row}>
              <Text style={styles.label}>Tagihan Listrik</Text>
              <Number number={200000} style={styles.value} />
            </View>
            <Gap height={8} />
            <View style={styles.row}>
              <Text style={styles.label}>Biaya Transaksi</Text>
              <Number number={2000} style={styles.value} />
            </View>
            <Gap height={8} />
            <DashedLine dashLength={15} dashGap={10} dashColor="#8B8B8B" />
            <Gap height={16} />
            <View style={styles.row}>
              <Text style={styles.totalLabel}>Total Transaksi</Text>
              <Number number={202000} style={styles.total} />
            </View>
            <Gap height={24} />
            <View style={styles.rowButton}>
              <View style={styles.flexOne}>
                <Button
                  text="Ubah"
                  fontFamily="Poppins-Regular"
                  fontSize={14}
                  type="mirror"
                  color={colors.c1}
                />
              </View>
              <Gap width={16} />
              <View style={styles.flexOne}>
                <Button
                  text="Konfirmasi"
                  fontFamily="Poppins-Regular"
                  fontSize={14}
                />
              </View>
            </View>
            <Gap height={24} />
          </View>
        )}

        {type === 'BPJS' && (
          <View style={styles.modal}>
            <Text style={styles.title}>Informasi Pelanggan</Text>
            <Gap height={16} />
            <View style={styles.row}>
              <Text style={styles.label}>Nomor BPJS</Text>
              <Text style={styles.value}>{phone}</Text>
            </View>
            <Gap height={8} />
            <View style={styles.row}>
              <Text style={styles.label}>Nama Pelanggan</Text>
              <Text style={styles.value}>RIDXXX XXXXRTO</Text>
            </View>
            <Gap height={8} />
            <View style={styles.row}>
              <Text style={styles.label}>Sampai dengan</Text>
              <Text style={styles.value}>{date}</Text>
            </View>
            <Gap height={8} />
            <View style={styles.line} />
            <Gap height={24} />
            <Text style={styles.title}>Detail Pembayaran</Text>
            <Gap height={16} />
            <View style={styles.row}>
              <Text style={styles.label}>Jumlah Tagihan</Text>
              <Number number={450000} style={styles.value} />
            </View>
            <Gap height={8} />
            <View style={styles.row}>
              <Text style={styles.label}>Biaya Transaksi</Text>
              <Number number={2000} style={styles.value} />
            </View>
            <Gap height={8} />
            <DashedLine dashLength={15} dashGap={10} dashColor="#8B8B8B" />
            <Gap height={16} />
            <View style={styles.row}>
              <Text style={styles.totalLabel}>Total Transaksi</Text>
              <Number number={452000} style={styles.total} />
            </View>
            <Gap height={24} />
            <View style={styles.rowButton}>
              <View style={styles.flexOne}>
                <Button
                  text="Ubah"
                  fontFamily="Poppins-Regular"
                  fontSize={14}
                  type="mirror"
                  color={colors.c1}
                />
              </View>
              <Gap width={16} />
              <View style={styles.flexOne}>
                <Button
                  text="Konfirmasi"
                  fontFamily="Poppins-Regular"
                  fontSize={14}
                />
              </View>
            </View>
            <Gap height={24} />
          </View>
        )}

        {type === 'Transfer' && (
          <View style={styles.modal}>
            <View style={styles.center}>
              <Text style={styles.title}>Konfirmasi Transfer</Text>
            </View>
            <Gap height={16} />
            <Text style={styles.title}>Penerima</Text>
            <ListHistory
              type="transferBank"
              name={name}
              bank={bank}
              accountNumber={accountNumber}
            />
            <Gap height={16} />
            <Text style={styles.title}>Sumber dana</Text>
            <Gap height={4} />
            <Text style={styles.dana}>
              Saldo <Text style={styles.danaBlue}>Paypas</Text>
            </Text>
            <Gap height={13} />
            <View style={styles.line} />
            <Gap height={16} />
            <Text style={styles.title}>Detail</Text>
            <Gap height={8} />
            <View style={styles.row}>
              <Text style={styles.label}>Nominal Transfer</Text>
              <Number number={nominal} style={styles.value} />
            </View>
            <Gap height={8} />
            <View style={styles.row}>
              <Text style={styles.label}>Biaya Transfer</Text>
              <Number number={2500} style={styles.value} />
            </View>
            <Gap height={8} />
            <DashedLine dashLength={15} dashGap={10} dashColor="#8B8B8B" />
            <Gap height={16} />
            <View style={styles.row}>
              <Text style={styles.totalLabel}>Total</Text>
              <Number number={nominal + 2500} style={styles.total} />
            </View>
            <Gap height={32} />
            <View style={styles.flexOne}>
              <Button
                text="Lanjutkan"
                fontFamily="Poppins-SemiBold"
                fontSize={16}
                borderRadius={12}
                onPress={() => navigation.navigate('Security')}
              />
              <Gap height={16} />
              <View style={styles.center}>
                <Text style={styles.cancel}>Batalkan</Text>
              </View>
            </View>
            <Gap height={44} />
          </View>
        )}

        {type === 'TransferUser' && (
          <View style={styles.modal}>
            <View style={styles.center}>
              <Text style={styles.title}>Konfirmasi Transfer</Text>
            </View>
            <Gap height={16} />
            <Text style={styles.title}>Penerima</Text>
            <ListHistory type="transferPaypas" phone={phone} />
            <Gap height={16} />
            <Text style={styles.title}>Sumber dana</Text>
            <Gap height={4} />
            <Text style={styles.dana}>
              Saldo <Text style={styles.danaBlue}>Paypas</Text>
            </Text>
            <Gap height={13} />
            <View style={styles.line} />
            <Gap height={16} />
            <Text style={styles.title}>Detail</Text>
            <Gap height={8} />
            <View style={styles.row}>
              <Text style={styles.label}>Nominal Transfer</Text>
              <Number number={nominal} style={styles.value} />
            </View>
            <Gap height={8} />
            <View style={styles.row}>
              <Text style={styles.label}>Biaya Transfer</Text>
              <Number number={2500} style={styles.value} />
            </View>
            <Gap height={8} />
            <DashedLine dashLength={15} dashGap={10} dashColor="#8B8B8B" />
            <Gap height={16} />
            <View style={styles.row}>
              <Text style={styles.totalLabel}>Total</Text>
              <Number number={nominal + 2500} style={styles.total} />
            </View>
            <Gap height={32} />
            <View style={styles.flexOne}>
              <Button
                text="Lanjutkan"
                fontFamily="Poppins-SemiBold"
                fontSize={16}
                borderRadius={12}
                onPress={() => navigation.navigate('Security')}
              />
              <Gap height={16} />
              <View style={styles.center}>
                <Text style={styles.cancel}>Batalkan</Text>
              </View>
            </View>
            <Gap height={44} />
          </View>
        )}
      </Modal>
    </>
  );
};

export default SlidingUpPanel;

const styles = StyleSheet.create({
  pressable: {flex: 1},
  blur: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  modal: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.c3,
    borderTopLeftRadius: normalize(20),
    borderTopRightRadius: normalize(20),
    paddingHorizontal: normalize(15),
    paddingTop: normalize(24),
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(18),
    color: colors.c5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: normalize(13),
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(12),
    color: colors.c5,
  },
  value: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(12),
    color: colors.c5,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: colors.c9,
  },
  totalLabel: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(14),
    color: colors.c5,
  },
  total: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(14),
    color: colors.c5,
  },
  flexOne: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dana: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(14),
    color: colors.c6,
    marginLeft: normalize(8),
  },
  danaBlue: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(14),
    color: colors.c1,
  },
  cancel: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(16),
    color: colors.c4,
  },
});
